# Toast

## props
```
export const toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp<ToastType>('text'),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp<ToastPosition>('middle'),
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  wordBreak: String as PropType<ToastWordBreak>,
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp('w-fade'),
  loadingType: String as PropType<LoadingType>,
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object as PropType<CSSProperties>,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
}

export type ToastProps = ExtractPropTypes<typeof toastProps>
```

## emits
```
emits: ['update:show']
```

## setup

## toggleClickable
- 切换是否可以点击。
```
let clickable = false

const toggleClickable = () => {
  const newValue = props.show && props.forbidClick
  if (clickable !== newValue) {
    clickable = newValue
    lockClick(clickable)
  }
}
```

## onClick
- 点击更新。
```
const updateShow = (show: boolean) => emit('update:show', show)

const onClick = () => {
  if (props.closeOnClick) {
    updateShow(false)
  }
}
```

## renderIcon
- 渲染 `icon`。
```
const renderIcon = () => {
  const { icon, type, iconSize, iconPrefix, loadingType } = props
  const hasIcon = icon || type === 'success' || type === 'fail'

  if (hasIcon) {
    return (
      <Icon
        name={icon || type}
        size={iconSize}
        class={bem.e('icon')}
        classPrefix={iconPrefix}
      />
    )
  }

  if (type === 'loading') {
    return (
      <Loading
        class={bem.m('loading')}
        size={iconSize}
        type={loadingType}
      />
    )
  }
}
```

## watch
- 监听值切换是否可以点击。
- 监听值进行更新值`show`，如果是0则不关闭。
```
let timer: ReturnType<typeof setTimeout>
const clearTimer = () => clearTimeout(timer)

watch(() => [props.show, props.forbidClick], toggleClickable)

watch(
  () => [props.show, props.type, props.message, props.duration],
  () => {
    clearTimer()
    if (props.show && props.duration > 0) {
      timer = setTimeout(() => {
        updateShow(false)
      }, props.duration)
    }
  }
)
```

## onMounted & onUnmounted
- 在这两个钩子中进行是否可以点击更新。
```
onMounted(toggleClickable)
onUnmounted(toggleClickable)
```

## render
```
return () => (
  <Popup
    class={[
      bem.b(),
      bem.m(props.position),
      props.wordBreak === 'normal'
        ? bem.m('break-normal')
        : bem.m(props.wordBreak),
      !props.icon && bem.m(props.type),
      props.className
    ]}
    lockScroll={false}
    onClick={onClick}
    onClosed={clearTimer}
    onUpdate:show={updateShow}
    {...pick(props, popupInheritProps)}>
    {renderIcon()}
    {renderMessage()}
  </Popup>
)
```

## lock-click.ts
- lockCount：表示当前页面被锁定的次数。
- lockClick：接受一个布尔值参数 lock，表示是否需要锁定页面。如果需要锁定页面，则会将 lockCount 加 1，并向文档的 body 元素添加一个类，使得整个页面不可点击。如果需要解除锁定，则会将 lockCount 减 1，并在 lockCount 变为 0 时，从文档的 body 元素中移除该类，使得页面重新可点击。
```
let lockCount = 0

export function lockClick(lock: boolean) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('w-toast--unclickable')
    }

    lockCount++
  } else if (lockCount) {
    lockCount--

    if (!lockCount) {
      document.body.classList.remove('w-toast--unclickable')
    }
  }
}
```

## function-call.tsx
- 类型声明。
- 定义了一个 Toast 实例队列 `queue` 和一个允许同时存在多个 Toast 实例的标志 `allowMultiple`，并初始化为 false。
- `parseOptions`： 用于解析传入的 options 对象或字符串，将其转为统一的 ToastOptions 类型。
- `createInstance`: 用于创建实例。
  - [mountComponent](utilsFunction.html#mountcomponent),传入组件，返回组件实例与卸载组件方法。
  - [usePopupState](utilsFunction.html#usepopupstate),导出`open、state、close、toggle`等属性和方法，`state` 用于传递给`WToast`控制状态。
  - `onClosed`: 如果允许多个存在，则清空队列中这个实例，调用[unmount](vue.html#app-unmount)卸载。
  - `render`: 传入`onClosed`方法及`onUpdate:show`。
  - `watch`：监听`message`并导出给，用于动态更改。
  - `(getCurrentInstance() as any).render = render`： 重写`render`方法。
- `getInstance`：用于调用`createInstance`并把实例入栈。
- `showToast`：展示 `toast`。
  - 调用`getInstance`得到实例。
  - 调用 `open`，更新 `state`，这里的state的更改会传递到组件中，打开组件。
- `closeToast`: 关闭`toast`
  - 调用`queue`中实例的`close`进而更新`state`。
- `createMethod`: 返回一个传入了类型的`showToast`。
- `setToastDefaultOptions`: 设置默认参数。
- `resetToastDefaultOptions`: 重置默认参数。
- `allowMultipleToast`: 控制是否支持多个`toast`。

```
const defaultOptions: ToastOptions = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: undefined,
  onOpened: undefined,
  duration: 2000,
  teleport: 'body',
  iconSize: undefined,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'w-fade',
  forbidClick: false,
  loadingType: undefined,
  overlayClass: '',
  overlayStyle: undefined,
  closeOnClick: false,
  closeOnClickOverlay: false
}

let queue: ToastWrapperInstance[] = []
let allowMultiple = false
let currentOptions = extend({}, defaultOptions)

// default options of specific type
const defaultOptionsMap = new Map<string, ToastOptions>()

function parseOptions(message: string | ToastOptions): ToastOptions {
  if (isObject(message)) {
    return message
  }
  return { message }
}

function createInstance() {
  const { instance, unmount } = mountComponent({
    setup() {
      const message = ref('')
      const { open, state, close, toggle } = usePopupState()

      const onClosed = () => {
        if (allowMultiple) {
          queue = queue.filter(item => item !== instance)
          unmount()
        }
      }

      const render = () => {
        const attrs: Record<string, unknown> = {
          onClosed,
          'onUpdate:show': toggle
        }
        return <WToast {...state} {...attrs} />
      }

      // support dynamic modification of message
      watch(message, val => {
        state.message = val
      })

      // rewrite render function
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(getCurrentInstance() as any).render = render

      return {
        open,
        close,
        message
      }
    }
  })

  return instance as ToastWrapperInstance
}

function getInstance() {
  if (!queue.length || allowMultiple) {
    const instance = createInstance()
    queue.push(instance)
  }

  return queue[queue.length - 1]
}

export function showToast(options: string | ToastOptions = {}) {
  if (!inBrowser) {
    return {} as ToastWrapperInstance
  }

  const toast = getInstance()
  const parsedOptions = parseOptions(options)

  toast.open(
    extend(
      {},
      currentOptions,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      defaultOptionsMap.get(parsedOptions.type || currentOptions.type!),
      parsedOptions
    )
  )

  return toast
}

const createMethod = (type: ToastType) => (options: string | ToastOptions) =>
  showToast(extend({ type }, parseOptions(options)))

export const showLoadingToast = createMethod('loading')
export const showSuccessToast = createMethod('success')
export const showFailToast = createMethod('fail')

export const closeToast = (all?: boolean) => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.close()
      })
      queue = []
    } else if (!allowMultiple) {
      queue[0].close()
    } else {
      queue.shift()?.close()
    }
  }
}

export function setToastDefaultOptions(options: ToastOptions): void
export function setToastDefaultOptions(
  type: ToastType,
  options: ToastOptions
): void
export function setToastDefaultOptions(
  type: ToastType | ToastOptions,
  options?: ToastOptions
) {
  if (typeof type === 'string') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    defaultOptionsMap.set(type, options!)
  } else {
    extend(currentOptions, type)
  }
}

export const resetToastDefaultOptions = (type?: ToastType) => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type)
  } else {
    currentOptions = extend({}, defaultOptions)
    defaultOptionsMap.clear()
  }
}

export const allowMultipleToast = (value = true) => {
  allowMultiple = value
}

```

## style
``` less
:root {
  --w-toast-max-width: 70%;
  --w-toast-font-size: var(--w-font-size-md);
  --w-toast-text-color: var(--w-white);
  --w-toast-loading-icon-color: var(--w-white);
  --w-toast-line-height: var(--w-line-height-md);
  --w-toast-radius: var(--w-radius-lg);
  --w-toast-background: rgba(0, 0, 0, 0.7);
  --w-toast-icon-size: 36px;
  --w-toast-text-min-width: 96px;
  --w-toast-text-padding: var(--w-padding-xs) var(--w-padding-sm);
  --w-toast-default-padding: var(--w-padding-md);
  --w-toast-default-width: 88px;
  --w-toast-default-min-height: 88px;
  --w-toast-position-top-distance: 20%;
  --w-toast-position-bottom-distance: 20%;
}

.w-toast {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  transition: all var(--w-duration-fast);

  // hack for avoid max-width when use left & fixed
  width: var(--w-toast-default-width);
  max-width: var(--w-toast-max-width);
  min-height: var(--w-toast-default-min-height);
  padding: var(--w-toast-default-padding);
  color: var(--w-toast-text-color);
  font-size: var(--w-toast-font-size);
  line-height: var(--w-toast-line-height);

  // allow newline character
  white-space: pre-wrap;
  word-break: break-all;
  text-align: center;
  background: var(--w-toast-background);
  border-radius: var(--w-toast-radius);

  &--break {
    &-normal {
      word-break: normal;
      word-wrap: normal;
    }

    &-word {
      word-break: normal;
      word-wrap: break-word;
    }
  }

  &--unclickable {
    // lock scroll
    overflow: hidden;
    cursor: not-allowed;

    // should not add pointer-events: none directly to body tag
    // that will cause unexpected tap-highlight-color in mobile safari
    * {
      pointer-events: none;
    }
  }

  &--text,
  &--html {
    width: fit-content;
    min-width: var(--w-toast-text-min-width);
    min-height: 0;
    padding: var(--w-toast-text-padding);

    .w-toast__text {
      margin-top: 0;
    }
  }

  &--top {
    top: var(--w-toast-position-top-distance);
  }

  &--bottom {
    top: auto;
    bottom: var(--w-toast-position-bottom-distance);
  }

  &__icon {
    font-size: var(--w-toast-icon-size);
  }

  &__loading {
    padding: var(--w-padding-base);
    color: var(--w-toast-loading-icon-color);
  }

  &__text {
    margin-top: var(--w-padding-xs);
  }
}
```
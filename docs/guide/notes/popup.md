# Popup

## props
```
export const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: numericProp,
  // whether to show overlay
  overlay: truthProp,
  // transition duration
  duration: numericProp,
  // teleport
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  // prevent body scroll
  lockScroll: truthProp,
  // whether to lazy render
  lazyRender: truthProp,
  // callback function before close
  beforeClose: Function as PropType<Interceptor>,
  // overlay custom style
  overlayStyle: Object as PropType<CSSProperties>,
  // overlay custom class name
  overlayClass: unknownProp,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: truthProp
}

export const popupProps = extend({}, popupSharedProps, {
  // 是否显示圆角
  round: Boolean,
  // 弹出位置，可选值为 top bottom right left
  position: makeStringProp<PopupPosition>('center'),
  // 关闭图标名称或图片链接，等同于 Icon 组件的 name 属性
  closeIcon: makeStringProp('cross'),
  // 是否显示关闭图标
  closeable: Boolean,
  // 动画类名，等价于 transition 的 name 属性
  transition: String,
  // 图标类名前缀，等同于 Icon 组件的 class-prefix 属性
  iconPrefix: String,
  // 是否在页面回退时自动关闭
  closeOnPopstate: Boolean,
  // 关闭图标位置，可选值为 top-left bottom-left bottom-right
  closeIconPosition: makeStringProp<PopupCloseIconPosition>('top-right'),
  // 是否开启顶部安全区适配
  safeAreaInsetTop: Boolean,
  // 是否开启底部安全区适配
  safeAreaInsetBottom: Boolean
})

export type PopupProps = ExtractPropTypes<typeof popupProps>
```

## emits
```
emits: [
  'open',
  'close',
  'opened',
  'closed',
  'keydown',
  'update:show',
  'clickOverlay',
  'clickCloseIcon'
]
```

## setup

### useLazyRender & lazyRender
- [useLazyRender](hooks.html#use-lazy-render-ts)返回一个函数。
- 这个函数接收一个`JSX.Element`入参的函数，这个函数根据`props.show || !props.lazyRender`执行。
- `position` 设置位置。
- `round` 设置圆角。
```
const popupRef = ref<HTMLElement>()

const lazyRender = useLazyRender(() => props.show || !props.lazyRender)

const renderPopup = lazyRender(() => {
  const { round, position, safeAreaInsetTop, safeAreaInsetBottom } = props
  return (
    <div
      v-show={props.show}
      ref={popupRef}
      style={style.value}
      role="dialog"
      tabindex={0}
      class={[
        bem.b(),
        round && bem.m('round'),
        bem.m(`${position}`),
        safeAreaInsetTop && 'w-safe-area-top',
        safeAreaInsetBottom && 'w-safe-area-bottom'
      ]}
      onKeydown={onKeydown}
      {...attrs}
    >
      {slots.default?.()}
      {renderCloseIcon()}
    </div>
  )
})
```

### style
- 设置层级与动画/渐变时间。
```
const style = computed(() => {
  const style: CSSProperties = {
    zIndex: zIndex.value
  }
  if (isDef(props.duration)) {
    const key =
      props.position === 'center'
        ? 'animationDuration'
        : 'transitionDuration'
    style[key] = `${props.duration}s`
  }
  return style
})
```

### open
- 使用自定义`zIndex` 或[全局zIndex](hooks.html#use-global-z-index-ts)
- `emit('open')`
```
const open = () => {
  if (!opened) {
    opened = true

    zIndex.value =
      props.zIndex !== undefined ? +props.zIndex : useGlobalZIndex()

    emit('open')
  }
}
```

### close
- 这里的`props.beforeClose` 已经通过类型定义为一个 `Function`
- 通过[callInterceptor](utilsFunction.html#interceptor-ts)拦截`beforeClose`, 在执行`beforeClose`后进行`done`的调用。
- 
```
const close = () => {
  if (opened) {
    callInterceptor(props.beforeClose, {
      done() {
        opened = false
        emit('close')
        emit('update:show', false)
      }
    })
  }
}
```

### onClickOverlay
- 派发`clickOverlay`
- 根据`closeOnClickOverlay`调用`close`
```
const onClickOverlay = (event: MouseEvent): void => {
  emit('clickOverlay', event)
  if (props.closeOnClickOverlay) {
    close()
  }
}
```

### renderOverlay
- 渲染遮罩层。
```
const renderOverlay = () => {
  if (props.overlay) {
    return (
      <Overlay
        v-slots={{ default: slots['overlay-content'] }}
        show={props.show}
        class={props.overlayClass}
        zIndex={zIndex.value}
        duration={props.duration}
        customStyle={props.overlayStyle}
        role={props.closeOnClickOverlay ? 'button' : undefined}
        tabindex={props.closeOnClickOverlay ? 0 : undefined}
        onClick={onClickOverlay}
      ></Overlay>
    )
  }
}
```

### renderCloseIcon
- 渲染关闭按钮。
```
const renderCloseIcon = () => {
  if (props.closeable) {
    return (
      <Icon
        role="button"
        tabindex={0}
        name={props.closeIcon}
        class={[
          bem.e('close-icon'),
          bem.em('close-icon', props.closeIconPosition),
          HAPTICS_FEEDBACK
        ]}
        classPrefix={props.iconPrefix}
        onClick={onClickCloseIcon}
      />
    )
  }
}
```

### onClickCloseIcon
- 点击关闭按钮。
```
const onClickCloseIcon = (event: MouseEvent) => {
  emit('clickCloseIcon', event)
  close()
}
```

### onOpened
- 弹窗打开后派发`opened`事件。
```
let timer: ReturnType<typeof setTimeout> | null
const onOpened = () => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    emit('opened')
  })
}
```

### onClosed
- 派发`closed`事件。
```
const onClosed = () => emit('closed')
```

### onKeydown
- 派发`keydown`事件。
```
const onKeydown = (event: KeyboardEvent) => emit('keydown', event)
```

### renderTransition
- 使用`Transition`, 定义`onAfterEnter`与`onAfterLeave`。
```
const renderTransition = () => {
  const { position, transition, transitionAppear } = props
  const name =
    position === 'center' ? 'w-fade' : `w-popup-slide-${position}`

  return (
    <Transition
      v-slots={{ default: renderPopup }}
      name={transition || name}
      appear={transitionAppear}
      onAfterEnter={onOpened}
      onAfterLeave={onClosed}
    ></Transition>
  )
}
```

### watch
- 监听 `props.show`，进行关闭与开启。
```
watch(
  () => props.show,
  show => {
    if (show && !opened) {
      open()

      if (attrs.tabindex === 0) {
        nextTick(() => {
          popupRef.value?.focus()
        })
      }
    }
    if (!show && opened) {
      opened = false
      emit('close')
    }
  }
)
```

### useExpose
- 通过自定义`hooks`[useExpose](hooks.html#use-expose-ts)暴露 popupRef。
```
useExpose({ popupRef })
```

### useLockScroll
- 通过[useLockScroll](hooks.html#use-lock-scroll-ts)进行滚动的控制。
```
useLockScroll(popupRef, () => props.show && props.lockScroll)
```

### useEventListener
- 路由退出后根据配置关闭。
```
useEventListener('popstate', () => {
  if (props.closeOnPopstate) {
    close()
    shouldReopen = false
  }
})
```

### onMounted & onActivated & onDeactivated
```
onMounted(() => {
  if (props.show) {
    open()
  }
})

onActivated(() => {
  if (shouldReopen) {
    emit('update:show', true)
    shouldReopen = false
  }
})

onDeactivated(() => {
  // teleported popup should be closed when deactivated
  if (props.show && props.teleport) {
    close()
    shouldReopen = true
  }
})
```

### provide
```
provide(POPUP_TOGGLE_KEY, () => props.show)
```

### render
- 如果`teleport`，结合`Teleport`组件`to`属性渲染到特定`DOM`。
```
return () => {
  if (props.teleport) {
    return (
      <Teleport to={props.teleport}>
        {renderOverlay()}
        {renderTransition()}
      </Teleport>
    )
  }
  return (
    <>
      {renderOverlay()}
      {renderTransition()}
    </>
  )
}
```

## style
``` less
:root {
  --w-popup-background: var(--w-background-2);
  --w-popup-transition: transform var(--w-duration-base);
  --w-popup-round-radius: 16px;
  --w-popup-close-icon-size: 22px;
  --w-popup-close-icon-color: var(--w-gray-5);
  --w-popup-close-icon-margin: 16px;
  --w-popup-close-icon-z-index: 1;
}

.w {
  &-overflow-hidden {
    overflow: hidden !important;
  }

  &-popup {
    position: fixed;
    max-height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    background: var(--w-popup-background);
    transition: var(--w-popup-transition);
    -webkit-overflow-scrolling: touch;

    &--center {
      top: 50%;
      left: 0;
      right: 0;
      width: fit-content;
      max-width: calc(100vw - var(--w-padding-md) * 2);
      margin: 0 auto;
      transform: translateY(-50%);

      &.w-popup--round {
        border-radius: var(--w-popup-round-radius);
      }
    }

    &--top {
      top: 0;
      left: 0;
      width: 100%;

      &.w-popup--round {
        border-radius: 0 0 var(--w-popup-round-radius)
          var(--w-popup-round-radius);
      }
    }

    &--right {
      top: 50%;
      right: 0;
      transform: translate3d(0, -50%, 0);

      &.w-popup--round {
        border-radius: var(--w-popup-round-radius) 0 0
          var(--w-popup-round-radius);
      }
    }

    &--bottom {
      bottom: 0;
      left: 0;
      width: 100%;

      &.w-popup--round {
        border-radius: var(--w-popup-round-radius) var(--w-popup-round-radius) 0
          0;
      }
    }

    &--left {
      top: 50%;
      left: 0;
      transform: translate3d(0, -50%, 0);

      &.w-popup--round {
        border-radius: 0 var(--w-popup-round-radius) var(--w-popup-round-radius)
          0;
      }
    }

    &-slide-top-enter-active,
    &-slide-left-enter-active,
    &-slide-right-enter-active,
    &-slide-bottom-enter-active {
      transition-timing-function: var(--w-ease-out);
    }

    &-slide-top-leave-active,
    &-slide-left-leave-active,
    &-slide-right-leave-active,
    &-slide-bottom-leave-active {
      transition-timing-function: var(--w-ease-in);
    }

    &-slide-top-enter-from,
    &-slide-top-leave-active {
      transform: translate3d(0, -100%, 0);
    }

    &-slide-right-enter-from,
    &-slide-right-leave-active {
      transform: translate3d(100%, -50%, 0);
    }

    &-slide-bottom-enter-from,
    &-slide-bottom-leave-active {
      transform: translate3d(0, 100%, 0);
    }

    &-slide-left-enter-from,
    &-slide-left-leave-active {
      transform: translate3d(-100%, -50%, 0);
    }

    &__close-icon {
      position: absolute;
      z-index: var(--w-popup-close-icon-z-index);
      color: var(--w-popup-close-icon-color);
      font-size: var(--w-popup-close-icon-size);

      &--top-left {
        top: var(--w-popup-close-icon-margin);
        left: var(--w-popup-close-icon-margin);
      }

      &--top-right {
        top: var(--w-popup-close-icon-margin);
        right: var(--w-popup-close-icon-margin);
      }

      &--bottom-left {
        bottom: var(--w-popup-close-icon-margin);
        left: var(--w-popup-close-icon-margin);
      }

      &--bottom-right {
        right: var(--w-popup-close-icon-margin);
        bottom: var(--w-popup-close-icon-margin);
      }
    }
  }
}
```
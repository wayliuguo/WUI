# hooks

## useChildren.ts

### useChildren
- 导出了`publicChildren`,`linkChildren`
- `publicChildren`：元素下的子元素
- `linkChildren`：接收一个value入参
  - 通过 provide 提供了一个对象，包括`link、unlink、internalChildren、children、value`
  - `link`：往公共子元素数组中收集并排序（链接子元素）
  - `unlink`: 解除子元素链接
  - `value`：公共变量
```
export function useChildren<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Child extends ComponentPublicInstance = ComponentPublicInstance<object, any>,
  ProvideValue = never
>(key: InjectionKey<ProvideValue>) {
  const publicChildren: Child[] = reactive([])
  const internalChildren: ComponentInternalInstance[] = reactive([])
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const parent = getCurrentInstance()!

  const linkChildren = (value?: ProvideValue) => {
    const link = (child: ComponentInternalInstance) => {
      if (child.proxy) {
        internalChildren.push(child)
        publicChildren.push(child.proxy as Child)
        sortChildren(parent, publicChildren, internalChildren)
      }
    }

    const unlink = (child: ComponentInternalInstance) => {
      const index = internalChildren.indexOf(child)
      publicChildren.splice(index, 1)
      internalChildren.splice(index, 1)
    }

    provide(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren
        },
        value
      )
    )
  }

  return {
    children: publicChildren,
    linkChildren
  }
}
```
### sortChildren
- 用于对子组件列表进行排序。
```
export function sortChildren(
  parent: ComponentInternalInstance,
  publicChildren: ComponentPublicInstance[],
  internalChildren: ComponentInternalInstance[]
) {
  const vnodes = flattenVNodes(parent.subTree.children)

  internalChildren.sort(
    (a, b) => findVNodeIndex(vnodes, a.vnode) - findVNodeIndex(vnodes, b.vnode)
  )

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const orderedPublicChildren = internalChildren.map(item => item.proxy!)

  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a)
    const indexB = orderedPublicChildren.indexOf(b)
    return indexA - indexB
  })
}
```
### flattenVNodes
- 将渲染子树中的所有虚拟节点展平为一维数组。
```
export function flattenVNodes(children: VNodeNormalizedChildren) {
  const result: VNode[] = []

  const traverse = (children: VNodeNormalizedChildren) => {
    if (Array.isArray(children)) {
      children.forEach(child => {
        if (isVNode(child)) {
          result.push(child)

          if (child.component?.subTree) {
            result.push(child.component.subTree)
            traverse(child.component.subTree.children)
          }

          if (child.children) {
            traverse(child.children)
          }
        }
      })
    }
  }

  traverse(children)

  return result
}
```
### findVNodeIndex
- 查找指定虚拟节点在 vnodes 数组中的索引位置。
```
const findVNodeIndex = (vnodes: VNode[], vnode: VNode) => {
  const index = vnodes.indexOf(vnode)
  if (index === -1) {
    return vnodes.findIndex(
      item =>
        vnode.key !== undefined &&
        vnode.key !== null &&
        item.type === vnode.type &&
        item.key === vnode.key
    )
  }
  return index
}
```

## useParent.ts
### useParent
- 通过`inject`获取了在`useChildren`中`provide`的内容
- 调用 `useChildren`，更新 `useChildren` 中数据
- 卸载时取消链接
- 返回`parent`、`index(下标)`
```
export function useParent<T>(key: InjectionKey<ParentProvide<T>>) {
  const parent = inject(key, null)

  if (parent) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const instance = getCurrentInstance()!
    const { link, unlink, internalChildren } = parent

    link(instance)
    onUnmounted(() => unlink(instance))

    const index = computed(() => internalChildren.indexOf(instance))

    return {
      parent,
      index
    }
  }

  return {
    parent: null,
    index: ref(-1)
  }
}
```

## useCustomFieldValue
- `CustomFieldInjectionValue` 定义类型
- `InjectionKey` 定义注入类型为`CustomFieldInjectionValue`
```
export type CustomFieldInjectionValue = {
  customValue: Ref<(() => unknown) | undefined>
  resetValidation: () => void
  validateWithTrigger: (trigger: 'onBlur' | 'onChange' | 'onSubmit') => void
}

export const CUSTOM_FIELD_INJECTION_KEY: InjectionKey<CustomFieldInjectionValue> =
  Symbol('w-field')

export function useCustomFieldValue(customValue: () => unknown) {
  const field = inject(CUSTOM_FIELD_INJECTION_KEY, null)

  if (field && !field.customValue.value) {
    field.customValue.value = customValue

    watch(customValue, () => {
      field.resetValidation()
      field.validateWithTrigger('onChange')
    })
  }
}
```

## use-expose.ts
- `vue` 中 `expose` 的升级版
- [expose](vue.html#expose)
```
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    extend(instance.proxy as object, apis)
  }
}
```

## use-lazy-render.ts
- 依据入参的`show`作为`watch`的监听源。
- `(render: () => JSX.Element)` 参数列表，定义render
- `(render: () => JSX.Element) => () => inited.value ? render() : null` 在参数列表中定义render函数，这里返回一个函数`() => inited.value ? render() : null`,这个函数根据`inited.value`判断是否调用`render()`
```
export function useLazyRender(show: WatchSource<boolean | undefined>) {
  const inited = ref(false)

  watch(
    show,
    value => {
      if (value) {
        inited.value = value
      }
    },
    { immediate: true }
  )

  return (render: () => JSX.Element) => () => inited.value ? render() : null
}
```

## useEventListener
- 利用函数重载，定义多个函数签名，以便在调用函数时根据传入的参数类型和数量来自动选择正确的函数签名。
- 如果当前不在浏览器环境中，直接退出。
- target: 监听的目标，如果是元素则使用[addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener),如果是`Ref`对象则使用`watch`监听，并在值变化后自动添加或移除事件监听器。
- capture：一个布尔值，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。
- 一个布尔值，设置为 true 时，表示 `listener` 永远不会调用 preventDefault()。
- 定义了两个内部函数 add 和 remove，用于添加和移除事件监听器。这两个函数会根据传入的目标元素和配置选项来添加或移除事件监听器。
- 在组件卸载时（使用 onUnmounted）和组件失活时（使用 onDeactivated）移除事件监听器。
- 在组件挂载时（使用 onMountedOrActivated）添加事件监听器。
- 返回一个函数，用于手动移除事件监听器。
```
export type UseEventListenerOptions = {
  target?: TargetRef
  capture?: boolean
  passive?: boolean
}

export function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions
): () => void
export function useEventListener(
  type: string,
  listener: EventListener,
  options?: UseEventListenerOptions
): () => void
export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  if (!inBrowser) {
    return
  }

  const { target = window, passive = false, capture = false } = options

  let cleaned = false
  let attached: boolean

  const add = (target?: TargetRef) => {
    if (cleaned) {
      return
    }
    const element = unref(target)

    if (element && !attached) {
      element.addEventListener(type, listener, {
        capture,
        passive
      })
      attached = true
    }
  }

  const remove = (target?: TargetRef) => {
    if (cleaned) {
      return
    }
    const element = unref(target)

    if (element && attached) {
      element.removeEventListener(type, listener, capture)
      attached = false
    }
  }

  onUnmounted(() => remove(target))
  onDeactivated(() => remove(target))
  onMountedOrActivated(() => add(target))

  let stopWatch: WatchStopHandle

  if (isRef(target)) {
    stopWatch = watch(target, (val, oldVal) => {
      remove(oldVal)
      add(val)
    })
  }

  /**
   * Clean up the event listener
   */
  return () => {
    stopWatch?.()
    remove(target)
    cleaned = true
  }
}
```

## use-global-z-index.ts
- 全局管理`ZIndex`
```
let globalZIndex = 2000

/** the global z-index is automatically incremented after reading */
export const useGlobalZIndex = () => ++globalZIndex

/** reset the global z-index */
export const setGlobalZIndex = (val: number) => {
  globalZIndex = val
}
```

## useScrollParent
- 用于获取元素的滚动容器，`getScrollParent` 函数用于找到元素 el `的滚动容器，useScrollParent` 函数则是将 `getScrollParent` 封装成一个 `Hook`。
- `getScrollParent` 解析:
  - 从当前元素一直往上遍历父节点，直到节点为空、根节点或者遍历到了非元素节点为止。
  - 使用 window.getComputedStyle 获取元素的样式对象，从而得到 overflowY 属性值并使用正则表达式匹配是否包含 scroll、auto 或者 overlay 等关键词，如果匹配成功，则返回该元素作为滚动容器。
  - 否则继续向上遍历父节点。最终返回的结果是根节点 root（默认是 window 对象）。
```
type ScrollElement = HTMLElement | Window

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot = inBrowser ? window : undefined

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  )
}

export function getScrollParent(
  el: Element,
  root: ScrollElement | undefined = defaultRoot
) {
  let node = el

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode as Element
  }

  return root
}

export function useScrollParent(
  el: Ref<Element | undefined>,
  root: ScrollElement | undefined = defaultRoot
) {
  const scrollParent = ref<Element | Window>()

  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root)
    }
  })

  return scrollParent
}
```

## use-touch.ts
- 函数返回了一些变量和方法，包括 `startX、startY、deltaX、deltaY、offsetX、offsetY` 和 `direction` 等变量，以及 `move、start、reset、isVertical` 和 `isHorizontal` 等方法
- `start` 返回了起始坐标。
- `reset` 方法用于重置各个变量和方向。
- `move` 计算了当前触摸点相对于起始点的偏移量，并根据偏移量计算 deltaX、deltaY、offsetX 和 offsetY 变量的值，同时通过 getDirection 函数判断了滑动方向并保存在 direction 变量中。
```
import { ref } from 'vue'

type Direction = '' | 'vertical' | 'horizontal'

function getDirection(x: number, y: number) {
  if (x > y) {
    return 'horizontal'
  }
  if (y > x) {
    return 'vertical'
  }
  return ''
}

export function useTouch() {
  const startX = ref(0)
  const startY = ref(0)
  const deltaX = ref(0)
  const deltaY = ref(0)
  const offsetX = ref(0)
  const offsetY = ref(0)
  const direction = ref<Direction>('')

  const isVertical = () => direction.value === 'vertical'
  const isHorizontal = () => direction.value === 'horizontal'

  const reset = () => {
    deltaX.value = 0
    deltaY.value = 0
    offsetX.value = 0
    offsetY.value = 0
    direction.value = ''
  }

  const start = ((event: TouchEvent) => {
    reset()
    startX.value = event.touches[0].clientX
    startY.value = event.touches[0].clientY
  }) as EventListener

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0]
    // safari back will set clientX to negative number
    deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value
    deltaY.value = touch.clientY - startY.value
    offsetX.value = Math.abs(deltaX.value)
    offsetY.value = Math.abs(deltaY.value)

    // lock direction when distance is greater than a certain value
    const LOCK_DIRECTION_DISTANCE = 10
    if (
      !direction.value ||
      (offsetX.value < LOCK_DIRECTION_DISTANCE &&
        offsetY.value < LOCK_DIRECTION_DISTANCE)
    ) {
      direction.value = getDirection(offsetX.value, offsetY.value)
    }
  }) as EventListener

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal
  }
}
```

## use-lock-scroll.ts
- `rootRef`： 元素, `shouldLock`: 是否控制。
- 使用[useTouch](hooks.html#use-touch-ts)获取导出的对象，用于处理触摸事件。
- `DIRECTION_UP` 和 `DIRECTION_DOWN`：表示向上和向下方向的常量。
- `onTouchMove`：是一个处理 `touchmove` 事件的函数，用于判断是否应该阻止默认行为。具体来说，它会根据触摸事件的方向和滚动条的位置来判断是否需要阻止默认行为。
- `lock` 和 `unlock`：分别用于锁定和解锁滚动。它们会添加或删除一些事件监听器，并向文档的 `body` 元素添加或删除一个类，以实现滚动锁定的效果。
- `init` 和 `destroy`：分别用于初始化和销毁滚动锁定。它们会在组件挂载或激活时、组件失活时以及组件卸载前分别调用。
- `watch`：用于监听 `shouldLock` 函数的返回值，以决定是否锁定滚动。
- `onTouchMove` 函数会获取当前触摸事件的方向和滚动条的位置，并根据这些信息判断是否需要阻止默认行为。
  - `touch.move(event)`：更新触摸事件的状态。
  - `const el = getScrollParent(event.target as Element, rootRef.value) as HTMLElement`：获取触摸事件所在的可滚动元素。[getScrollParent](hooks.html#usescrollparent)
  - `scrollHeight`：表示元素的滚动高度，即元素的内容高度加上内边距和边框高度。
  - `offsetHeight`：表示元素的高度，包括内边距、边框和滚动条（如果存在）的高度。
  - `scrollTop`：表示元素的滚动位置，即元素顶部被隐藏的像素数。
  - `let status = '11'`：初始化状态码。
  - `if (scrollTop === 0)`：如果滚动条已经滚动到顶部，则更新状态码。
  - `else if (scrollTop + offsetHeight >= scrollHeight)`：如果滚动条已经滚动到底部，则更新状态码。
  - `if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2)))`：如果状态码不为 '11'，并且触摸方向为垂直方向，并且状态码与方向码不匹配，则阻止默认行为。
```
let totalLockCount = 0

const BODY_LOCK_CLASS = 'w-overflow-hidden'

export function useLockScroll(
  rootRef: Ref<HTMLElement | undefined>,
  shouldLock: () => boolean
) {
  const touch = useTouch()
  const DIRECTION_UP = '01'
  const DIRECTION_DOWN = '10'

  const onTouchMove = (event: TouchEvent) => {
    touch.move(event)

    const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP
    const el = getScrollParent(
      event.target as Element,
      rootRef.value
    ) as HTMLElement
    const { scrollHeight, offsetHeight, scrollTop } = el
    let status = '11'

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01'
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10'
    }

    if (
      status !== '11' &&
      touch.isVertical() &&
      !(parseInt(status, 2) & parseInt(direction, 2))
    ) {
      preventDefault(event, true)
    }
  }

  const lock = () => {
    document.addEventListener('touchstart', touch.start)
    document.addEventListener('touchmove', onTouchMove, { passive: false })

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS)
    }

    totalLockCount++
  }

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start)
      document.removeEventListener('touchmove', onTouchMove)

      totalLockCount--

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS)
      }
    }
  }

  const init = () => shouldLock() && lock()

  const destroy = () => shouldLock() && unlock()

  onMountedOrActivated(init)
  onDeactivated(destroy)
  onBeforeUnmount(destroy)

  watch(shouldLock, value => {
    value ? lock() : unlock()
  })
}
```
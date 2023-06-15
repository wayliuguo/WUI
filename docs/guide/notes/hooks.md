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
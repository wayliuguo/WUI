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
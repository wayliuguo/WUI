# Row

## props
```
export type RowAlign = 'top' | 'center' | 'bottom'

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

export const rowProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  // 是否自动换行，默认 true
  wrap: truthProp,
  // 交叉轴对齐方式
  align: String as PropType<RowAlign>,
  // 列间距
  gutter: makeNumericProp(0),
  // 主轴对齐方式
  justify: String as PropType<RowJustify>
}

export type RowProps = ExtractPropTypes<typeof rowProps>
```

## setup

### injection
- 使用 InjectionKey 指定注入的类型。
```
export type RowSpaces = { left?: number; right: number }[]

export type RowProvide = {
  spaces: ComputedRef<RowSpaces>
}

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name)
```

### useChildren
- 使用 [useChildren](hooks.html#useChildren.ts) 处理元素
```
const { children, linkChildren } = useChildren(ROW_KEY)
```

## groups
```
const groups = computed(() => {
  const groups: number[][] = [[]]

  let totalSpan = 0
  children.forEach((child, index) => {
    totalSpan += Number(child.span)

    if (totalSpan > 24) {
      groups.push([index])
      totalSpan -= 24
    } else {
      groups[groups.length - 1].push(index)
    }
  })

  return groups
})
```

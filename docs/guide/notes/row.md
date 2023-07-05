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

## injection
- 使用 InjectionKey 指定注入的类型。
```
export type RowSpaces = { left?: number; right: number }[]

export type RowProvide = {
  spaces: ComputedRef<RowSpaces>
}

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name)
```

## useChildren
- 使用 [useChildren](hooks.html#useChildren.ts)
- 通过`linkChildren`，导出方法和值。
```
const { children, linkChildren } = useChildren(ROW_KEY)

linkChildren({ spaces })
```

## groups
- groups 依赖的是 `useChildren` 的 `children`
- 这是一个二维数组，每一项包括了包含的24份内的项的下标`[[0,1,2],[3,4],[5]]`
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

## spaces
- `averagePadding`：平均的padding，如`[0,1,2]`需要`2*gutter/3`
```
const spaces = computed(() => {
  const gutter = Number(props.gutter)
  const spaces: RowSpaces = []

  if (!gutter) {
    return spaces
  }

  groups.value.forEach(group => {
    const averagePadding = (gutter * (group.length - 1)) / group.length

    group.forEach((item, index) => {
      if (index === 0) {
        spaces.push({ right: averagePadding })
      } else {
        const left = gutter - spaces[item - 1].right
        const right = averagePadding - left
        spaces.push({ left, right })
      }
    })
  })

  return spaces
})
```

## render
- 添加上属性控制的样式
- 把插槽渲染
```
return () => {
  const { tag, wrap, align, justify } = props
  return (
    <tag
      class={[
        bem.b(),
        align && bem.m(`align-${align}`),
        justify && bem.m(`justify-${justify}`),
        !wrap && bem.m('nowrap')
      ]}
    >
      {slots.default?.()}
    </tag>
  )
}
```
## style
```
.w-row {
  display: flex;
  flex-wrap: wrap;

  &--nowrap {
    flex-wrap: nowrap;
  }

  &--justify-center {
    justify-content: center;
  }

  &--justify-end {
    justify-content: flex-end;
  }

  &--justify-space-between {
    justify-content: space-between;
  }

  &--justify-space-around {
    justify-content: space-around;
  }

  &--align-center {
    align-items: center;
  }

  &--align-bottom {
    align-items: flex-end;
  }
}
```

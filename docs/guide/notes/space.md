# Space

## props
```
export type SpaceSize = number | string
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'

export const spaceProps = {
  // 对齐方式
  align: String as PropType<SpaceAlign>,
  // 间距方向
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal'
  },
  // 间距大小
  size: {
    type: [Number, String, Array] as PropType<
      number | string | [SpaceSize, SpaceSize]
    >,
    default: 8
  },
  // 是否自动换行，仅适用于水平方向排列
  wrap: Boolean,
  // 是否让 Space 变为一个块级元素，填充整个父元素
  fill: Boolean
}
export type SpaceProps = ExtractPropTypes<typeof spaceProps>
```

## setup

### mergedAlign
- 获取对齐方式，用于设置类名
```
const mergedAlign = computed(
  () => props.align ?? (props.direction === 'horizontal' ? 'center' : '')
)
```

### getMargin
- 通过`size`获取间距
```
const getMargin = (size: SpaceSize) => {
  if (typeof size === 'number') {
    return size + 'px'
  }
  return size
}
```

### getMarginStyle
- 获取右、下 `margin`
- 如果是最后一个则不设置
- 如果间距方向为`horizontal`设置右边距
- 如果间距方向为`vertical`或者设置自动换行设置下边距
```
const getMarginStyle = (isLast: boolean): CSSProperties => {
  const style: CSSProperties = {}

  const marginRight = `${getMargin(
    Array.isArray(props.size) ? props.size[0] : props.size
  )}`
  const marginBottom = `${getMargin(
    Array.isArray(props.size) ? props.size[1] : props.size
  )}`

  if (isLast) {
    return props.wrap ? { marginBottom } : {}
  }

  if (props.direction === 'horizontal') {
    style.marginRight = marginRight
  }
  if (props.direction === 'vertical' || props.wrap) {
    style.marginBottom = marginBottom
  }

  return style
}
```

### filterEmpty
- 过滤空 VNode 
```
const filterEmpty = (children: VNode[] = []) => {
  const nodes: VNode[] = []
  children.forEach(child => {
    if (Array.isArray(child)) {
      nodes.push(...child)
    } else if (child.type === Fragment) {
      nodes.push(...filterEmpty(child.children as VNode[]))
    } else {
      nodes.push(child)
    }
  })
  return nodes.filter(
    c =>
      !(
        c &&
        (c.type === Comment ||
          (c.type === Fragment && c.children?.length === 0) ||
          (c.type === Text && (c.children as string).trim() === ''))
      )
  )
}
```
### render
- 遍历过滤后的vNode进行渲染
```
return () => {
  const children = filterEmpty(slots.default?.())
  return (
    <div
      class={[
        bem.b(),
        bem.m(props.direction),
        mergedAlign.value && bem.m(`align-${mergedAlign.value}`),
        props.wrap && bem.m('wrap'),
        props.fill && bem.m('fill')
      ]}
    >
      {children.map((c, i) => (
        <div
          key={`item-${i}`}
          class={`${name}-item`}
          style={getMarginStyle(i === children.length - 1)}
        >
          {c}
        </div>
      ))}
    </div>
  )
}
```

## style
``` less
.w-space {
  display: inline-flex;

  &--horizontal {
    .w-space-item {
      display: flex;
      align-items: center;
    }
  }

  &--vertical {
    flex-direction: column;
  }

  &--align-baseline {
    align-items: baseline;
  }

  &--align-start {
    align-items: flex-start;
  }

  &--align-end {
    align-items: flex-end;
  }

  &--align-center {
    align-items: center;
  }

  &--wrap {
    flex-wrap: wrap;
  }

  &--fill {
    display: flex;
  }
}
```
# Badge

## props
```
export type BadgePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  color: String,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp<BadgePosition>('top-right')
} as const
```

## setup

## hasContent
- 通过 `插槽`的`content` 判断是否有定义徽标
- 通过 `props` 的 `content、showZero`，判断是否需要展示0
```
const hasContent = () => {
  if (slots.content) {
    return true
  }
  const { content, showZero } = props
  return (
    isDef(content) &&
    content !== '' &&
    (showZero || (content !== 0 && content !== '0'))
  )
}
```

## renderContent
- 优先渲染`插槽``content`
- 如果有定义`max`，返回`${max}+`
```
const renderContent = () => {
  const { dot, max, content } = props
  if (!dot && hasContent()) {
    if (slots.content) {
      return slots.content()
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (isDef(max) && isNumeric(content!) && +content > +max) {
      return `${max}+`
    }
    return content
  }
}
```

## style Computed
- 根据 `offset` 和 `positon` 设置徽标的偏移量及位置
```
const getOffsetWithMinusString = (val: string) =>
  val.startsWith('-') ? val.replace('-', '') : `-${val}`

const style = computed(() => {
  const style: CSSProperties = {
    background: props.color
  }

  if (props.offset) {
    const [x, y] = props.offset
    const { position } = props
    const [offsetY, offsetX] = position.split('-') as [
      'top' | 'bottom',
      'left' | 'right'
    ]

    if (slots.default) {
      if (typeof y === 'number') {
        style[offsetY] = addUnit(offsetY === 'top' ? y : -y)
      } else {
        style[offsetY] =
          offsetY === 'top' ? addUnit(y) : getOffsetWithMinusString(y)
      }

      if (typeof x === 'number') {
        style[offsetX] = addUnit(offsetX === 'left' ? x : -x)
      } else {
        style[offsetX] =
          offsetX === 'left' ? addUnit(x) : getOffsetWithMinusString(x)
      }
    } else {
      style.marginTop = addUnit(y)
      style.marginLeft = addUnit(x)
    }
  }

  return style
})
```

## renderBadge
- 渲染徽标
```
const renderBadge = () => {
  if (hasContent() || props.dot) {
    return (
      <div
        class={[
          bem.b(),
          bem.m(props.position),
          props.dot && bem.m('dot'),
          !!slots.default && bem.m('fixed')
        ]}
        style={style.value}
      >
        {renderContent()}
      </div>
    )
  }
}
```
## render
- 如果有默认插槽才进行插槽和徽标的渲染
- 否则只渲染徽标
```
return () => {
  if (slots.default) {
    return (
      <tag class={bem.e('wrapper')}>
        {slots.default()}
        {renderBadge()}
      </tag>
    )
  }

  return renderBadge()
}
```

## style
``` less
:root {
  --w-badge-size: 16px;
  --w-badge-color: var(--w-white);
  --w-badge-padding: 0 3px;
  --w-badge-font-size: var(--w-font-size-sm);
  --w-badge-font-weight: var(--w-font-bold);
  --w-badge-border-width: var(--w-border-width);
  --w-badge-background: var(--w-danger-color);
  --w-badge-dot-color: var(--w-danger-color);
  --w-badge-dot-size: 8px;
  --w-badge-font: -apple-system-font, helvetica neue, arial, sans-serif;
}

.w-badge {
  display: inline-block;
  box-sizing: border-box;
  min-width: var(--w-badge-size);
  padding: var(--w-badge-padding);
  color: var(--w-badge-color);
  font-weight: var(--w-badge-font-weight);
  font-size: var(--w-badge-font-size);
  font-family: var(--w-badge-font);
  line-height: 1.2;
  text-align: center;
  background: var(--w-badge-background);
  border: var(--w-badge-border-width) solid var(--w-background-2);
  border-radius: var(--w-radius-max);

  &--fixed {
    position: absolute;
    transform-origin: 100%;
  }

  &--top-left {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }

  &--top-right {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  &--bottom-left {
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  }

  &--bottom-right {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  }

  &--dot {
    width: var(--w-badge-dot-size);
    min-width: 0;
    height: var(--w-badge-dot-size);
    background: var(--w-badge-dot-color);
    border-radius: 100%;
    border: none;
    padding: 0;
  }

  &__wrapper {
    position: relative;
    display: inline-block;
  }
}
```
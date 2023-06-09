# Cell

## props
```
export type CellSize = 'normal' | 'large'

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right'

export const cellSharedProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  icon: String,
  size: String as PropType<CellSize>,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null as unknown as PropType<string | CSSProperties>,
  arrowDirection: String as PropType<CellArrowDirection>,
  clickable: {
    type: Boolean as PropType<boolean | null>,
    default: null
  }
}
```

## setup

### renderLeftIcon
- 渲染左侧`icon`
- 优先渲染插槽，其次props
```
const renderLoadingIcon = () => {
  if (slots.loading) {
    return slots.loading()
  }

  return (
    <Loading
      size={props.loadingSize}
      type={props.loadingType}
      class={bem.b('loading')}
    />
  )
}
```

### renderLabel
- 渲染 `label`
- 优先渲染插槽，其次props
```
const renderLabel = () => {
  const showLabel = slots.label || isDef(props.label)

  if (showLabel) {
    return (
      <div class={[bem.e('label'), props.labelClass]}>
        {slots.label ? slots.label() : props.label}
      </div>
    )
  }
}
```

### renderTitle
- 渲染`title`
- 优先渲染插槽，其次props
```
const renderText = () => {
  let text
  if (props.loading) {
    text = props.loadingText
  } else {
    text = slots.default ? slots.default() : props.text
  }

  if (text) {
    return <span class={bem.m('text')}>{text}</span>
  }
}
```

### renderValue
- 渲染value
```
const renderValue = () => {
  // slots.default is an alias of slots.value
  const slot = slots.value || slots.default
  const hasValue = slot || isDef(props.value)

  if (hasValue) {
    return (
      <div class={[bem.e('value'), props.valueClass]}>
        {slot ? slot() : <span>{props.value}</span>}
      </div>
    )
  }
}
```
### renderRightIcon
- 渲染右侧 icon
```
const renderRightIcon = () => {
  if (slots['right-icon']) {
    return slots['right-icon']()
  }

  if (props.isLink) {
    const name =
      props.arrowDirection && props.arrowDirection !== 'right'
        ? `arrow-${props.arrowDirection}`
        : 'arrow'
    return <Icon name={name} class={bem.e('right-icon')} />
  }
}
```
### classes
```
const classes = [
  bem.b(),
  center && bem.m('center'),
  required && bem.m('required'),
  clickable && bem.m('clickable'),
  !border && bem.m('borderless'),
  size && bem.m(`${size}`)
]
```
### render
- `class` 与 `style`, 点击事件
- `icon` 的渲染位置
```
<tag
  class={classes}
  role={clickable ? 'button' : undefined}
  tabindex={clickable ? 0 : undefined}
>
  {renderLeftIcon()}
  {renderTitle()}
  {renderValue()}
  {renderRightIcon()}
  {slots.extra?.()}
</tag>
```

## style
``` less
@import './mixins/hairline.less';

:root {
  --w-cell-font-size: var(--w-font-size-md);
  --w-cell-line-height: 24px;
  --w-cell-vertical-padding: 10px;
  --w-cell-horizontal-padding: var(--w-padding-md);
  --w-cell-text-color: var(--w-text-color);
  --w-cell-background: var(--w-background-2);
  --w-cell-border-color: var(--w-border-color);
  --w-cell-active-color: var(--w-active-color);
  --w-cell-required-color: var(--w-danger-color);
  --w-cell-label-color: var(--w-text-color-2);
  --w-cell-label-font-size: var(--w-font-size-sm);
  --w-cell-label-line-height: var(--w-line-height-sm);
  --w-cell-label-margin-top: var(--w-padding-base);
  --w-cell-value-color: var(--w-text-color-2);
  --w-cell-icon-size: 16px;
  --w-cell-right-icon-color: var(--w-gray-6);
  --w-cell-large-vertical-padding: var(--w-padding-sm);
  --w-cell-large-title-font-size: var(--w-font-size-lg);
  --w-cell-large-label-font-size: var(--w-font-size-md);
}

.w-cell {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: var(--w-cell-vertical-padding) var(--w-cell-horizontal-padding);
  overflow: hidden;
  color: var(--w-cell-text-color);
  font-size: var(--w-cell-font-size);
  line-height: var(--w-cell-line-height);
  background: var(--w-cell-background);

  &::after {
    .hairline-bottom(var(--w-cell-border-color), var(--w-padding-md), var(--w-padding-md));
  }

  &:last-child::after,
  &--borderless::after {
    display: none;
  }

  &__label {
    margin-top: var(--w-cell-label-margin-top);
    color: var(--w-cell-label-color);
    font-size: var(--w-cell-label-font-size);
    line-height: var(--w-cell-label-line-height);
  }

  &__title,
  &__value {
    flex: 1;
  }

  &__value {
    position: relative;
    overflow: hidden;
    color: var(--w-cell-value-color);
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }

  &__left-icon,
  &__right-icon {
    height: var(--w-cell-line-height);
    font-size: var(--w-cell-icon-size);
    line-height: var(--w-cell-line-height);
  }

  &__left-icon {
    margin-right: var(--w-padding-base);
  }

  &__right-icon {
    margin-left: var(--w-padding-base);
    color: var(--w-cell-right-icon-color);
  }

  &--clickable {
    cursor: pointer;

    &:active {
      background-color: var(--w-cell-active-color);
    }
  }

  &--required {
    overflow: visible;

    &::before {
      position: absolute;
      left: var(--w-padding-xs);
      color: var(--w-cell-required-color);
      font-size: var(--w-cell-font-size);
      content: '*';
    }
  }

  &--center {
    align-items: center;
  }

  &--large {
    padding-top: var(--w-cell-large-vertical-padding);
    padding-bottom: var(--w-cell-large-vertical-padding);

    .w-cell__title {
      font-size: var(--w-cell-large-title-font-size);
    }

    .w-cell__label {
      font-size: var(--w-cell-large-label-font-size);
    }
  }
}
```
# Button

## types
```
export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>

export type ButtonIconPosition = 'left' | 'right'

export type ButtonThemeVars = {
  buttonMiniHeight?: string
  buttonMiniPadding?: string
  buttonMiniFontSize?: string
  buttonSmallHeight?: string
  buttonSmallPadding?: string
  buttonSmallFontSize?: string
  buttonNormalPadding?: string
  buttonNormalFontSize?: string
  buttonLargeHeight?: string
  buttonDefaultHeight?: string
  buttonDefaultLineHeight?: number | string
  buttonDefaultFontSize?: string
  buttonDefaultColor?: string
  buttonDefaultBackground?: string
  buttonDefaultBorderColor?: string
  buttonPrimaryColor?: string
  buttonPrimaryBackground?: string
  buttonPrimaryBorderColor?: string
  buttonSuccessColor?: string
  buttonSuccessBackground?: string
  buttonSuccessBorderColor?: string
  buttonDangerColor?: string
  buttonDangerBackground?: string
  buttonDangerBorderColor?: string
  buttonWarningColor?: string
  buttonWarningBackground?: string
  buttonWarningBorderColor?: string
  buttonBorderWidth?: string
  buttonRadius?: string
  buttonRoundRadius?: string
  buttonPlainBackground?: string
  buttonDisabledOpacity?: number | string
  buttonIconSize?: string
  buttonLoadingIconSize?: string
}

```
## props
```
export const buttonProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('button'),
  text: String,
  icon: String,
  type: makeStringProp<ButtonType>('default'),
  size: makeStringProp<ButtonSize>('normal'),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp<ButtonNativeType>('button'),
  loadingSize: numericProp,
  loadingText: String,
  loadingType: String as PropType<LoadingType>,
  iconPosition: makeStringProp<ButtonIconPosition>('left')
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
```

## setup

## renderLoadingIcon
- 提供了loading插槽
- 或者使用`Loading`组件自定义size与type 
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

## renderIcon
- 如果 props `loading`
- 如果使用 `icon` 插槽
- 如果 props `icon`
```
const renderIcon = () => {
  if (props.loading) {
    return renderLoadingIcon()
  }

  if (slots.icon) {
    return <div class={bem.e('icon')}>{slots.icon()}</div>
  }

  if (props.icon) {
    return (
      <Icon
        name={props.icon}
        class={bem.e('icon')}
        classPrefix={props.iconPrefix}
      />
    )
  }
}
```

## renderText
- 如果是 props `loading`,则显示 `loadingText`
- 否则使用默认插槽的值
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

## getStyle
- color: plain ? color : 'white'
- hide border when color is linear-gradient
```
const getStyle = () => {
  const { color, plain } = props
  if (color) {
    const style: CSSProperties = {
      color: plain ? color : 'white'
    }

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color
    }

    // hide border when color is linear-gradient
    if (color.includes('gradient')) {
      style.border = 0
    } else {
      style.borderColor = color
    }

    return style
  }
}
```
## classes
```
const {
  type,
  size,
  block,
  round,
  plain,
  square,
  loading,
  disabled,
  hairline,
  nativeType,
  iconPosition
} = props

const classes = [
  bem.b(),
  bem.m(type),
  bem.m(size),
  plain && bem.m('plain'),
  block && bem.m('block'),
  round && bem.m('round'),
  square && bem.m('square'),
  loading && bem.m('loading'),
  disabled && bem.m('disabled'),
  hairline && bem.m('hairline'),
  { [BORDER_SURROUND]: hairline }
]
```
## onClick
```
const onClick = (event: MouseEvent) => {
  if (props.loading) {
    preventDefault(event)
  } else if (!props.disabled) {
    emit('click', event)
  }
}
```
## render
- `class` 与 `style`, 点击事件
- `icon` 的渲染位置
```
return (
  <tag
    type={nativeType}
    class={classes}
    style={getStyle()}
    disabled={disabled}
    onClick={onClick}
  >
    <div class={bem.e('content')}>
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {iconPosition === 'right' && renderIcon()}
    </div>
  </tag>
)
```

## style
``` less
:root {
  --w-button-mini-height: 24px;
  --w-button-mini-padding: 0 var(--w-padding-base);
  --w-button-mini-font-size: var(--w-font-size-xs);
  --w-button-small-height: 32px;
  --w-button-small-padding: 0 var(--w-padding-xs);
  --w-button-small-font-size: var(--w-font-size-sm);
  --w-button-normal-padding: 0 15px;
  --w-button-normal-font-size: var(--w-font-size-md);
  --w-button-large-height: 50px;
  --w-button-default-height: 44px;
  --w-button-default-line-height: 1.2;
  --w-button-default-font-size: var(--w-font-size-lg);
  --w-button-default-color: var(--w-text-color);
  --w-button-default-background: var(--w-background-2);
  --w-button-default-border-color: var(--w-gray-4);
  --w-button-primary-color: var(--w-white);
  --w-button-primary-background: var(--w-primary-color);
  --w-button-primary-border-color: var(--w-primary-color);
  --w-button-success-color: var(--w-white);
  --w-button-success-background: var(--w-success-color);
  --w-button-success-border-color: var(--w-success-color);
  --w-button-danger-color: var(--w-white);
  --w-button-danger-background: var(--w-danger-color);
  --w-button-danger-border-color: var(--w-danger-color);
  --w-button-warning-color: var(--w-white);
  --w-button-warning-background: var(--w-warning-color);
  --w-button-warning-border-color: var(--w-warning-color);
  --w-button-border-width: var(--w-border-width);
  --w-button-radius: var(--w-radius-md);
  --w-button-round-radius: var(--w-radius-max);
  --w-button-plain-background: var(--w-white);
  --w-button-disabled-opacity: var(--w-disabled-opacity);
  --w-button-icon-size: 1.2em;
  --w-button-loading-icon-size: 20px;
}

.w-theme-dark {
  --w-button-plain-background: transparent;
}

.w-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: var(--w-button-default-height);
  margin: 0;
  padding: 0;
  font-size: var(--w-button-default-font-size);
  line-height: var(--w-button-default-line-height);
  text-align: center;
  border-radius: var(--w-button-radius);
  cursor: pointer;
  transition: opacity var(--w-duration-fast);
  -webkit-appearance: none;
  -webkit-font-smoothing: auto;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: var(--w-black);
    border: inherit;
    border-color: var(--w-black);
    border-radius: inherit; /* inherit parent's border radius */
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
  }

  &:active::before {
    opacity: 0.1;
  }

  &--loading,
  &--disabled {
    &::before {
      display: none;
    }
  }

  &--default {
    color: var(--w-button-default-color);
    background: var(--w-button-default-background);
    border: var(--w-button-border-width) solid
      var(--w-button-default-border-color);
  }

  &--primary {
    color: var(--w-button-primary-color);
    background: var(--w-button-primary-background);
    border: var(--w-button-border-width) solid
      var(--w-button-primary-border-color);
  }

  &--success {
    color: var(--w-button-success-color);
    background: var(--w-button-success-background);
    border: var(--w-button-border-width) solid
      var(--w-button-success-border-color);
  }

  &--danger {
    color: var(--w-button-danger-color);
    background: var(--w-button-danger-background);
    border: var(--w-button-border-width) solid
      var(--w-button-danger-border-color);
  }

  &--warning {
    color: var(--w-button-warning-color);
    background: var(--w-button-warning-background);
    border: var(--w-button-border-width) solid
      var(--w-button-warning-border-color);
  }

  &--plain {
    background: var(--w-button-plain-background);

    &.w-button--primary {
      color: var(--w-button-primary-background);
    }

    &.w-button--success {
      color: var(--w-button-success-background);
    }

    &.w-button--danger {
      color: var(--w-button-danger-background);
    }

    &.w-button--warning {
      color: var(--w-button-warning-background);
    }
  }

  &--large {
    width: 100%;
    height: var(--w-button-large-height);
  }

  &--normal {
    padding: var(--w-button-normal-padding);
    font-size: var(--w-button-normal-font-size);
  }

  &--small {
    height: var(--w-button-small-height);
    padding: var(--w-button-small-padding);
    font-size: var(--w-button-small-font-size);
  }

  &__loading {
    color: inherit;
    font-size: inherit;

    .w-loading__spinner {
      color: currentColor;
      width: var(--w-button-loading-icon-size);
      height: var(--w-button-loading-icon-size);
    }
  }

  &--mini {
    height: var(--w-button-mini-height);
    padding: var(--w-button-mini-padding);
    font-size: var(--w-button-mini-font-size);

    & + .w-button--mini {
      margin-left: var(--w-padding-base);
    }
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: var(--w-button-disabled-opacity);
  }

  &--loading {
    cursor: default;
  }

  &--round {
    border-radius: var(--w-button-round-radius);
  }

  &--square {
    border-radius: 0;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &::before {
      content: ' ';
    }
  }

  &__icon {
    font-size: var(--w-button-icon-size);
    line-height: inherit;
  }

  &__icon + &__text,
  &__loading + &__text,
  &__text + &__icon,
  &__text + &__loading {
    margin-left: var(--w-padding-base);
  }

  &--hairline {
    border-width: 0;

    &::after {
      border-color: inherit;
      border-radius: calc(var(--w-button-radius) * 2);
    }

    &.w-button--round::after {
      border-radius: var(--w-button-round-radius);
    }

    &.w-button--square::after {
      border-radius: 0;
    }
  }
}
```
# Loading

## props
```
export type LoadingType = 'circular' | 'spinner'

export const loadingProps = {
  size: numericProp,
  type: makeStringProp<LoadingType>('circular'),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
}

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
```

## setup

## spinnerStyle
- 获取 `color`、`size` 样式
```
const spinnerStyle = computed(() =>
  extend({ color: props.color }, getSizeStyle(props.size))
)
```

## renderIcon
- 根据`props`定义默认`icon`或者使用插槽的`icon`
```
const renderIcon = () => {
  const DefaultIcon = props.type === 'spinner' ? SpinIcon : CircularIcon
  return (
    <span
      class={[bem.e('spinner'), bem.em('spinner', props.type)]}
      style={spinnerStyle.value}
    >
      {slots.icon ? slots.icon() : DefaultIcon}
    </span>
  )
}
```

## SpinIcon & CircularIcon
- 两种类型的加载默认样式
```
onst SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => <i class={[bem.e('line'), bem.em('line', index + 1)]} />)

const CircularIcon = (
  <svg class={bem.e('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
)
```

## renderText
- 默认插槽就是文字的插槽，如果定义了文字就执行
```
const renderText = () => {
  if (slots.default) {
    return (
      <span
        class={bem.e('text')}
        style={{
          fontSize: addUnit(props.textSize),
          color: props.textColor ?? props.color
        }}
      >
        {slots.default()}
      </span>
    )
  }
}
```
## render
```
return () => {
  const { type, vertical } = props
  return (
    <div
      class={[bem.b(), bem.m(type), bem.is('vertical', vertical)]}
      aria-live="polite"
      aria-busy={true}
    >
      {renderIcon()}
      {renderText()}
    </div>
  )
}
```

## style
``` less
:root {
  // 样式变量
  --w-loading-text-color: var(--w-text-color-2);
  --w-loading-text-font-size: var(--w-font-size-md);
  --w-loading-spinner-color: var(--w-gray-5);
  --w-loading-spinner-size: 30px;
  --w-loading-spinner-duration: 0.8s;
}

.w-loading {
  position: relative;
  color: var(--w-loading-spinner-color);
  font-size: 0;
  vertical-align: middle;
  // 如果type 是 spinner
  &__spinner {
    position: relative;
    display: inline-block;
    width: var(--w-loading-spinner-size);
    // compatible for 1.x, users may set width or height in root element
    max-width: 100%;
    height: var(--w-loading-spinner-size);
    max-height: 100%;
    vertical-align: middle;
    animation: w-rotate var(--w-loading-spinner-duration) linear infinite;

    &--spinner {
      animation-timing-function: steps(12);
    }

    &--circular {
      animation-duration: 2s;
    }
  }

  &__line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      display: block;
      width: 2px;
      height: 25%;
      margin: 0 auto;
      background-color: currentColor;
      border-radius: 40%;
      content: ' ';
    }
  }
  // 如果 type 是 circular

  &__circular {
    display: block;
    width: 100%;
    height: 100%;

    circle {
      animation: w-circular 1.5s ease-in-out infinite;
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
    }
  }

  // 文字样式

  &__text {
    display: inline-block;
    margin-left: var(--w-padding-xs);
    color: var(--w-loading-text-color);
    font-size: var(--w-loading-text-font-size);
    vertical-align: middle;
  }
}
// 是否垂直排列
.is-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;

  .w-loading__text {
    margin: var(--w-padding-xs) 0 0;
  }
}
// circular 动画
@keyframes w-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}

// 生成 spinner 样式函数
.generate-spinner(@n, @i: 1) when (@i =< @n) {
  .w-loading__line--@{i} {
    transform: rotate(@i * 30deg);
    opacity: 1 - (0.75 / 12) * (@i - 1);
  }
  .generate-spinner(@n, (@i + 1));
}
.generate-spinner(12);
```
# loading

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
```

## setup

### spinnerStyle
获取 `color`、`size` 样式
```
const spinnerStyle = computed(() =>
  extend({ color: props.color }, getSizeStyle(props.size))
)
```
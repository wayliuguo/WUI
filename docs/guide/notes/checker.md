# Row

## props
```
export type CheckerShape = 'square' | 'round'
export type CheckerDirection = 'horizontal' | 'vertical'
export type CheckerLabelPosition = 'left' | 'right'
export type CheckerParent = {
  props: {
    disabled?: boolean
    iconSize?: Numeric
    direction?: CheckerDirection
    checkedColor?: string
  }
}
export const checkerProps = {
  name: unknownProp,
  shape: makeStringProp<CheckerShape>('round'),
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String as PropType<CheckerLabelPosition>,
  labelDisabled: Boolean
}
...
props: extend({}, checkerProps, {
  bem: makeRequiredProp(Object),
  role: String,
  parent: Object as PropType<CheckerParent | null>,
  checked: Boolean,
  bindGroup: truthProp
})
```
## emits
- `emits`配置项，用于声明组件所支持的自定义事件。
```
emits: ['click', 'toggle']
```

## setup

## getParentProp
- 获取父组件`props`
- `T extends keyof CheckerParent['props']`对父组件的`props`又可以做类型校验
```
const getParentProp = <T extends keyof CheckerParent['props']>(name: T) => {
  if (props.parent && props.bindGroup) {
    return props.parent.props[name]
  }
}
```

## direction、disable、iconStyle
- 获取 `direction、disable、iconStyle`
```
const direction = computed(() => getParentProp('direction'))

const disabled = computed(() => getParentProp('disabled') || props.disabled)

const iconStyle = computed(() => {
  const checkedColor = props.checkedColor || getParentProp('checkedColor')

  if (checkedColor && props.checked && !disabled.value) {
    return {
      borderColor: checkedColor,
      backgroundColor: checkedColor
    }
  }
  return {}
})
```

## onClick
- 点击触发
- 如果非不可选中且（点击的是icon或者没有禁用label点击），`emit('toggle')`
- `emit('click', event)`
```
const iconRef = ref<HTMLElement>()

const onClick = (event: MouseEvent) => {
  const { target } = event
  const icon = iconRef.value
  const iconClicked = icon === target || icon?.contains(target as Node)

  if (!disabled.value && (iconClicked || !props.labelDisabled)) {
    emit('toggle')
  }
  emit('click', event)
}
```

## renderIcon
- 如果有定义`icon 插槽`，则通过`作用域插槽`给`插槽`传递状态[使用](/component/radio.html#自定义图标)
```
const renderIcon = () => {
  const { bem, shape, checked } = props
  const iconSize = props.iconSize || getParentProp('iconSize')

  return (
    <div
      ref={iconRef}
      class={[
        bem.e('icon'),
        bem.em('icon', shape),
        disabled.value && bem.em('icon', 'disabled'),
        checked && bem.em('icon', 'checked')
      ]}
      style={{ fontSize: addUnit(iconSize) }}
    >
      {slots.icon ? (
        slots.icon({ checked, disabled: disabled.value })
      ) : (
        <Icon name="success" style={iconStyle.value} />
      )}
    </div>
  )
}
```
## renderLabel
- 渲染`label`,指定样式
```
const renderLabel = () => {
  if (slots.default) {
    return (
      <span
        class={[
          props.bem.e('label'),
          props.labelPosition && props.bem.em('label', props.labelPosition),
          disabled.value && props.bem.em('label', 'disabled')
        ]}
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
  const nodes: (JSX.Element | undefined)[] =
    props.labelPosition === 'left'
      ? [renderLabel(), renderIcon()]
      : [renderIcon(), renderLabel()]

  return (
    <div
      role={props.role}
      class={[
        props.bem.b(),
        props.labelDisabled && props.bem.m('label-disabled'),
        direction.value && props.bem.m(`${direction.value}`)
      ]}
      tabindex={disabled.value ? undefined : 0}
      aria-checked={props.checked}
      onClick={onClick}
    >
      {nodes}
    </div>
  )
}
```

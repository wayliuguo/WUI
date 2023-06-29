# RadioGroup

## props
```
export const radioGroupProps = {
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<RadioGroupDirection>,
  modelValue: unknownProp,
  checkedColor: String
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
```
## emits
- `emits`配置项，用于声明组件所支持的自定义事件。
```
emits: ['change', 'update:modelValue']
```

## setup

## injection
- 使用 `InjectionKey` 指定注入的类型。
```
export type RadioGroupProvide = {
  props: RadioGroupProps
  updateValue: (value: unknown) => void
}
export const RADIO_KEY: InjectionKey<RadioGroupProvide> = Symbol('radio-group')
```

## useChildren
- 使用 [useChildren](hooks.html#useChildren.ts)
- 通过`linkChildren`，导出方法和值。
```
const { linkChildren } = useChildren(RADIO_KEY)
const updateValue = (value: unknown) => emit('update:modelValue', value)

linkChildren({
  props,
  updateValue
})
```

## watch
- 根据绑定值的变更触发`change`
```
watch(
  () => props.modelValue,
  value => emit('change', value)
)
```

## useCustomFieldValue
- [useCustomFieldValue](hooks.html#usecustomfieldvalue)
```
useCustomFieldValue(() => props.modelValue)
```

## render
```
return () => (
  <div
    class={[bem.b(), props.direction && bem.m(props.direction)]}
    role="radiogroup"
  >
    {slots.default?.()}
  </div>
)
```

## style
```
.w-radio-group {
  &--horizontal {
    display: flex;
    flex-wrap: wrap;
  }
}
```

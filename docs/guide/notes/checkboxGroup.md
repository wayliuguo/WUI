# CheckboxGroup

## props
```
import Checker, { checkerProps } from './Checker'

export const checkboxProps = extend({}, checkerProps, {
  bindGroup: truthProp
})

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
```
## emits
- `emits`配置项，用于声明组件所支持的自定义事件。
```
emits: ['change', 'update:modelValue']
```

## setup

### injection
- 使用 InjectionKey 指定注入的类型。
- 通过 `linkChildren` `provide` 了`props`和`updateValue`方法。
```
export const CHECKBOX_GROUP_KEY: InjectionKey<CheckboxGroupProvide> =
  Symbol(name)

const { children, linkChildren } = useChildren(CHECKBOX_GROUP_KEY)
const updateValue = (value: unknown[]) => emit('update:modelValue', value)

linkChildren({
  props,
  updateValue
})
```

### watch
- 绑定值改变派发`change`事件。
```
watch(
  () => props.modelValue,
  value => emit('change', value)
)
```

### useExpose
- 通过自定义`hooks`[useExpose](hooks.html#use-expose-ts)实现更全面的[expose](vue.html#expose)。
- 这样组件就可以通过`ref.value.toggleAll` 进行消费。
```
const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) => {
  if (typeof options === 'boolean') {
    options = { checked: options }
  }

  const { checked, skipDisabled } = options

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkedChildren = children.filter((item: any) => {
    if (!item.props.bindGroup) {
      return false
    }
    if (item.props.disabled && skipDisabled) {
      return item.checked.value
    }
    return checked ?? !item.checked.value
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const names = checkedChildren.map((item: any) => item.name)
  updateValue(names)
}

useExpose<CheckboxGroupExpose>({ toggleAll })
```

### render
```
return () => (
  <div class={[bem.b(), props.direction && bem.m(props.direction)]}>
    {slots.default?.()}
  </div>
)
```

## style
```
.w-checkbox-group {
  &--horizontal {
    display: flex;
    flex-wrap: wrap;
  }
}
```

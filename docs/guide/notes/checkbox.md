# Checkbox

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

### useParent
- 通过自定义`hooks`[useParent](hooks.html#useParent),`inject` 父组件暴露的属性和方法。
```
const { parent } = useParent(CHECKBOX_GROUP_KEY)
```

### toggle & setParentValue
- 如果有`checkboxGroup`，则触发`setParentValue`,否则更新绑定值。
- `setParentValue`最后会调用`checkboxGroup` 暴露的`updateValue`方法。
```
const toggle = (newValue = !checked.value) => {
  if (parent && props.bindGroup) {
    setParentValue(newValue)
  } else {
    emit('update:modelValue', newValue)
  }
}

const setParentValue = (checked: boolean) => {
  const { name } = props
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { max, modelValue } = parent!.props
  const value = modelValue.slice()

  if (checked) {
    const overlimit = max && value.length >= +max

    if (!overlimit && !value.includes(name)) {
      value.push(name)

      if (props.bindGroup) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        parent!.updateValue(value)
      }
    }
  } else {
    const index = value.indexOf(name)

    if (index !== -1) {
      value.splice(index, 1)

      if (props.bindGroup) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        parent!.updateValue(value)
      }
    }
  }
}
```

### useExpose
- 通过自定义`hooks`[useExpose](hooks.html#use-expose-ts)实现更全面的[expose](vue.html#expose)。
- 暴露了`toggle`、`props`、`checked`。
```
useExpose<CheckboxExpose>({ toggle, props, checked })
```

### watch
- 监听绑定值的变更派发`change`事件。
```
watch(
  () => props.modelValue,
  value => emit('change', value)
)
```
### checked
- 如果有`checkboxGroup`，则依赖其`parent.props.modelValue`
```
const checked = computed(() => {
  if (parent && props.bindGroup) {
    return parent.props.modelValue.indexOf(props.name) !== -1
  }
  return !!props.modelValue
})
```
### render
```
return () => (
  <Checker
    v-slots={pick(slots, ['default', 'icon'])}
    bem={bem}
    role="checkbox"
    parent={parent}
    checked={checked.value}
    onToggle={toggle}
    {...props}
  />
)
```

## style
```
:root {
  --w-checkbox-size: 20px;
  --w-checkbox-border-color: var(--w-gray-5);
  --w-checkbox-duration: var(--w-duration-fast);
  --w-checkbox-label-margin: var(--w-padding-xs);
  --w-checkbox-label-color: var(--w-text-color);
  --w-checkbox-checked-icon-color: var(--w-primary-color);
  --w-checkbox-disabled-icon-color: var(--w-gray-5);
  --w-checkbox-disabled-label-color: var(--w-text-color-3);
  --w-checkbox-disabled-background: var(--w-border-color);
}

.w-checkbox {
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  &--disabled {
    cursor: not-allowed;
  }

  &--label-disabled {
    cursor: default;
  }

  &--horizontal {
    margin-right: var(--w-padding-sm);
  }

  &__icon {
    flex: none;
    height: 1em;
    font-size: var(--w-checkbox-size);
    line-height: 1em;
    cursor: pointer;

    .w-icon {
      display: block;
      box-sizing: border-box;
      width: 1.25em;
      height: 1.25em;
      color: transparent;
      font-size: 0.8em;
      line-height: 1.25;
      text-align: center;
      border: 1px solid var(--w-checkbox-border-color);
      transition-duration: var(--w-checkbox-duration);
      transition-property: color, border-color, background-color;
    }

    &--round {
      .w-icon {
        border-radius: 100%;
      }
    }

    &--checked {
      .w-icon {
        color: var(--w-white);
        background-color: var(--w-checkbox-checked-icon-color);
        border-color: var(--w-checkbox-checked-icon-color);
      }
    }

    &--disabled {
      cursor: not-allowed;

      .w-icon {
        background-color: var(--w-checkbox-disabled-background);
        border-color: var(--w-checkbox-disabled-icon-color);
      }
    }

    &--disabled&--checked {
      .w-icon {
        color: var(--w-checkbox-disabled-icon-color);
      }
    }
  }

  &__label {
    margin-left: var(--w-checkbox-label-margin);
    color: var(--w-checkbox-label-color);
    line-height: var(--w-checkbox-size);

    &--left {
      margin: 0 var(--w-checkbox-label-margin) 0 0;
    }

    &--disabled {
      color: var(--w-checkbox-disabled-label-color);
    }
  }
}
```

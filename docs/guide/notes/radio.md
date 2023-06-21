# Radio

## props
```
import Checker, {
  CheckerLabelPosition,
  CheckerShape,
  checkerProps
} from '../Checkbox/Checker'

export const radioProps = checkerProps

export type RadioShape = CheckerShape
export type RadioLabelPosition = CheckerLabelPosition
export type RadioProps = ExtractPropTypes<typeof radioProps>
```
## emits
- `emits`配置项，用于声明组件所支持的自定义事件。
```
emits: ['update:modelValue']
```

## setup

### useParent
- 获取父组件`inject`的数据
```
const { parent } = useParent(RADIO_KEY)
```

### checked
- 选中判断
```
const checked = () => {
  const value = parent ? parent.props.modelValue : props.modelValue
  return value === props.name
}
```

### toggle
- 状态切换
```
const toggle = () => {
  if (parent) {
    parent.updateValue(props.name)
  } else {
    emit('update:modelValue', props.name)
  }
}
```

### renderIcon
- 使用`Checker`进行渲染
```
return () => (
  <Checker
    v-slots={pick(slots, ['default', 'icon'])}
    bem={bem}
    role="radio"
    parent={parent}
    checked={checked()}
    onToggle={toggle}
    {...props}
  />
)
```

## style
```less
:root {
  --w-radio-size: 20px;
  --w-radio-border-color: var(--w-gray-5);
  --w-radio-duration: var(--w-duration-fast);
  --w-radio-label-margin: var(--w-padding-xs);
  --w-radio-label-color: var(--w-text-color);
  --w-radio-checked-icon-color: var(--w-primary-color);
  --w-radio-disabled-icon-color: var(--w-gray-5);
  --w-radio-disabled-label-color: var(--w-text-color-3);
  --w-radio-disabled-background: var(--w-border-color);
}

.w-radio {
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
    font-size: var(--w-radio-size);
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
      border: 1px solid var(--w-radio-border-color);
      transition-duration: var(--w-radio-duration);
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
        background-color: var(--w-radio-checked-icon-color);
        border-color: var(--w-radio-checked-icon-color);
      }
    }

    &--disabled {
      cursor: not-allowed;

      .w-icon {
        background-color: var(--w-radio-disabled-background);
        border-color: var(--w-radio-disabled-icon-color);
      }
    }

    &--disabled&--checked {
      .w-icon {
        color: var(--w-radio-disabled-icon-color);
      }
    }
  }

  &__label {
    margin-left: var(--w-radio-label-margin);
    color: var(--w-radio-label-color);
    line-height: var(--w-radio-size);

    &--left {
      margin: 0 var(--w-radio-label-margin) 0 0;
    }

    &--disabled {
      color: var(--w-radio-disabled-label-color);
    }
  }
}
```
import {
  Numeric,
  addUnit,
  extend,
  makeRequiredProp,
  makeStringProp,
  numericProp,
  truthProp,
  unknownProp
} from '@w-ui/utils'
import { PropType, computed, defineComponent, ref } from 'vue'
import Icon from '../Icon'

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

export default defineComponent({
  props: extend({}, checkerProps, {
    bem: makeRequiredProp(Object),
    role: String,
    parent: Object as PropType<CheckerParent | null>,
    checked: Boolean,
    bindGroup: truthProp
  }),
  emits: ['click', 'toggle'],
  setup(props, { emit, slots }) {
    const iconRef = ref<HTMLElement>()

    const getParentProp = <T extends keyof CheckerParent['props']>(name: T) => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name]
      }
    }

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

    const onClick = (event: MouseEvent) => {
      const { target } = event
      const icon = iconRef.value
      const iconClicked = icon === target || icon?.contains(target as Node)

      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit('toggle')
      }
      emit('click', event)
    }

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
  }
})

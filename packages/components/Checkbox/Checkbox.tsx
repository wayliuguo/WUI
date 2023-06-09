import { createNamespace, extend, pick, truthProp } from '@w-ui/utils'
import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue'
import Checker, { checkerProps } from './Checker'
import { useCustomFieldValue, useParent } from '@w-ui/use'
import { CHECKBOX_GROUP_KEY } from '../CheckboxGroup/CheckboxGroup'
import { CheckboxExpose } from './types'
import { useExpose } from '../../composables/use-expose'

const name = 'w-checkbox'
const bem = createNamespace('checkbox')

export const checkboxProps = extend({}, checkerProps, {
  bindGroup: truthProp
})

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export default defineComponent({
  name,

  props: checkboxProps,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent(CHECKBOX_GROUP_KEY)

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

    const checked = computed(() => {
      if (parent && props.bindGroup) {
        return parent.props.modelValue.indexOf(props.name) !== -1
      }
      return !!props.modelValue
    })

    const toggle = (newValue = !checked.value) => {
      if (parent && props.bindGroup) {
        setParentValue(newValue)
      } else {
        emit('update:modelValue', newValue)
      }
    }

    watch(
      () => props.modelValue,
      value => emit('change', value)
    )

    useExpose<CheckboxExpose>({ toggle, props, checked })
    useCustomFieldValue(() => props.modelValue)

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
  }
})

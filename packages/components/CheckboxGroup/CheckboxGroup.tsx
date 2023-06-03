import { createNamespace, makeArrayProp, numericProp } from '@w-ui/utils'
import {
  ExtractPropTypes,
  InjectionKey,
  PropType,
  defineComponent,
  watch
} from 'vue'
import { CheckerDirection } from '../Checkbox/Checker'
import {
  CheckboxGroupExpose,
  CheckboxGroupProvide,
  CheckboxGroupToggleAllOptions
} from './types'
import { useChildren, useCustomFieldValue } from '@w-ui/use'
import { useExpose } from '../../composables/use-expose'

const name = 'w-checkbox-group'
const bem = createNamespace('checkbox-group')

export const checkboxGroupProps = {
  max: numericProp,
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<CheckerDirection>,
  modelValue: makeArrayProp<unknown>(),
  checkedColor: String
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const CHECKBOX_GROUP_KEY: InjectionKey<CheckboxGroupProvide> =
  Symbol(name)

export default defineComponent({
  name,
  props: checkboxGroupProps,
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const { children, linkChildren } = useChildren(CHECKBOX_GROUP_KEY)

    const updateValue = (value: unknown[]) => emit('update:modelValue', value)

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

    watch(
      () => props.modelValue,
      value => emit('change', value)
    )

    useExpose<CheckboxGroupExpose>({ toggleAll })
    useCustomFieldValue(() => props.modelValue)
    linkChildren({
      props,
      updateValue
    })

    return () => (
      <div class={[bem.b(), props.direction && bem.m(props.direction)]}>
        {slots.default?.()}
      </div>
    )
  }
})

import { createNamespace, numericProp, unknownProp } from '@w-ui/utils'
import {
  ExtractPropTypes,
  InjectionKey,
  PropType,
  defineComponent,
  watch
} from 'vue'
import { CheckerDirection } from '../Checkbox/Checker'
import { useChildren, useCustomFieldValue } from '@w-ui/use'

const name = 'w-radio-group'
const bem = createNamespace('radio-group')

export type RadioGroupDirection = CheckerDirection

export const radioGroupProps = {
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<RadioGroupDirection>,
  modelValue: unknownProp,
  checkedColor: String
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export type RadioGroupProvide = {
  props: RadioGroupProps
  updateValue: (value: unknown) => void
}

export const RADIO_KEY: InjectionKey<RadioGroupProvide> = Symbol('radio-group')

export default defineComponent({
  name,
  props: radioGroupProps,
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(RADIO_KEY)

    const updateValue = (value: unknown) => emit('update:modelValue', value)

    watch(
      () => props.modelValue,
      value => emit('change', value)
    )

    linkChildren({
      props,
      updateValue
    })

    useCustomFieldValue(() => props.modelValue)

    return () => (
      <div
        class={[bem.b(), props.direction && bem.m(props.direction)]}
        role="radiogroup">
        {slots.default?.()}
      </div>
    )
  }
})

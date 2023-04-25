import { PropType } from 'vue'

export const numericProp = [Number, String]

export const makeStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal
})

export const truthProp = {
  type: Boolean,
  default: true as const
}

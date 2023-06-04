import { ComponentPublicInstance } from 'vue'
import { CheckerDirection, CheckerParent } from '../Checkbox/Checker'
import { CheckboxGroupProps } from './CheckboxGroup'

export type CheckboxGroupDirection = CheckerDirection

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean
      skipDisabled?: boolean
    }

export type CheckboxGroupExpose = {
  toggleAll: (options?: CheckboxGroupToggleAllOptions) => void
}

export type CheckboxGroupInstance = ComponentPublicInstance<
  CheckboxGroupExpose,
  CheckboxGroupExpose
>

export type CheckboxGroupProvide = CheckerParent & {
  props: CheckboxGroupProps
  updateValue: (value: unknown[]) => void
}

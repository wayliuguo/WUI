import { Numeric } from "@w-ui/utils"
import { ComponentPublicInstance, VNode } from "vue"
import { DropdownItemProps } from "./DropdownItem"

export type DropdownItemOption = {
  text: string
  icon?: string
  value: Numeric
}

export type DropdownItemExpose = {
  toggle: (
    show?: boolean,
    options?: {
      immediate?: boolean
    }
  ) => void
  /** @private */
  state: {
    showPopup: boolean
    transition: boolean
    showWrapper: boolean
  }
  /** @private */
  renderTitle: () => string | VNode[]
}

export type DropdownItemInstance = ComponentPublicInstance<
  DropdownItemProps,
  DropdownItemExpose
>

export type DropdownItemThemeVars = {
  dropdownItemZIndex?: number | string
}

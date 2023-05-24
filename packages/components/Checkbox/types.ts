import { ComponentPublicInstance, ComputedRef } from "vue";
import { CheckerLabelPosition, CheckerShape } from "./Checker";
import { CheckboxProps } from "./Checkbox";


export type CheckboxShape = CheckerShape;
export type CheckboxLabelPosition = CheckerLabelPosition;

export type CheckboxExpose = {
  toggle: (newValue?: boolean) => void;
  /** @private */
  props: CheckboxProps;
  /** @private */
  checked: ComputedRef<boolean>;
};

export type CheckboxInstance = ComponentPublicInstance<
  CheckboxProps,
  CheckboxExpose
>;

export type CheckboxThemeVars = {
  checkboxSize?: string;
  checkboxBorderColor?: string;
  checkboxDuration?: string;
  checkboxLabelMargin?: string;
  checkboxLabelColor?: string;
  checkboxCheckedIconColor?: string;
  checkboxDisabledIconColor?: string;
  checkboxDisabledLabelColor?: string;
  checkboxDisabledBackground?: string;
};

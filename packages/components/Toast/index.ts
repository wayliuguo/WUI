import _Toast from './Toast'
import { withInstall } from '@w-ui/utils'

export const Toast = withInstall(_Toast)
export default Toast
export { toastProps } from './Toast'
export {
  showToast,
  closeToast,
  showFailToast,
  showLoadingToast,
  showSuccessToast,
  allowMultipleToast,
  setToastDefaultOptions,
  resetToastDefaultOptions
} from './function-call'

export type { ToastProps } from './Toast'
export type {
  ToastType,
  ToastOptions,
  ToastPosition,
  ToastThemeVars,
  ToastWordBreak
} from './types'

declare module 'vue' {
  export interface GlobalComponents {
    WToast: typeof Toast
  }
}

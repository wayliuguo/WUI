import { withInstall } from '@w-ui/utils'
import _Popup from './Popup'

export const Popup = withInstall(_Popup)
export default Popup
export { popupProps } from './Popup'
export type { PopupProps } from './Popup'
export type {
  PopupPosition,
  PopupInstance,
  PopupThemeVars,
  PopupCloseIconPosition
} from './types'

declare module 'vue' {
  export interface GlobalComponents {
    WPopup: typeof Popup
  }
}

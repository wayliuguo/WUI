import { withInstall } from '@w-ui/utils'
import _Overlay from './Overlay'

export const Overlay = withInstall(_Overlay)
export default Overlay
export { overlayProps } from './Overlay'
export type { OverlayProps } from './Overlay'
export type { OverlayThemeVars } from './types'

declare module 'vue' {
  export interface GlobalComponents {
    WOverlay: typeof Overlay
  }
}

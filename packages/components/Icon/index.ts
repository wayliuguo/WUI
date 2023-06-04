import { withInstall } from '@w-ui/utils'
import _Icon from './Icon'

export const Icon = withInstall(_Icon)
export default Icon

declare module 'vue' {
  export interface GlobalComponents {
    WIcon: typeof Icon
  }
}

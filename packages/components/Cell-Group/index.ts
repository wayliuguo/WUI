import { withInstall } from '@w-ui/utils'
import _CellGroup from './CellGroup'

export const CellGroup = withInstall(_CellGroup)
export default CellGroup
export { cellGroupProps } from './CellGroup'
export type { CellGroupProps } from './CellGroup'
export type { CellGroupThemeVars } from './types'

declare module 'vue' {
  export interface GlobalComponents {
    WCellGroup: typeof CellGroup
  }
}

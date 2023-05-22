import { withInstall } from '@w-ui/utils';
import _Col from './Col';

export const Col = withInstall(_Col);
export default Col;
export { colProps } from './Col';
export type { ColProps } from './Col';

declare module 'vue' {
  export interface GlobalComponents {
    WCol: typeof Col;
  }
}

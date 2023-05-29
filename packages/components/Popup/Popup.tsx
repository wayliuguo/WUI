import { createNamespace, extend, makeStringProp } from '@w-ui/utils'
import { ExtractPropTypes, defineComponent } from 'vue'
import { popupSharedProps } from './shared'
import { PopupCloseIconPosition, PopupPosition } from './types'

const name = 'w-popup'
const bem = createNamespace('popup')

export const popupProps = extend({}, popupSharedProps, {
  round: Boolean,
  position: makeStringProp<PopupPosition>('center'),
  closeIcon: makeStringProp('cross'),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: makeStringProp<PopupCloseIconPosition>('top-right'),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
})

export type PopupProps = ExtractPropTypes<typeof popupProps>

export default defineComponent({
  name,
  inheritAttrs: false,
  props: popupProps,
  emits: [
    'open',
    'close',
    'opened',
    'closed',
    'keydown',
    'update:show',
    'clickOverlay',
    'clickCloseIcon'
  ],
  setup(props, { emit, attrs, slots }) {}
})

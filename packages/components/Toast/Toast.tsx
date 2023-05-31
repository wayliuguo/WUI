import {
  createNamespace,
  makeNumberProp,
  makeStringProp,
  numericProp,
  unknownProp
} from '@w-ui/utils'
import {
  CSSProperties,
  ExtractPropTypes,
  PropType,
  TeleportProps,
  defineComponent
} from 'vue'
import { ToastPosition, ToastWordBreak } from './types'
import { LoadingType } from '../Loading'

const name = 'w-toast'
const bem = createNamespace('toast')

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html'

export const toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp<ToastType>('text'),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp<ToastPosition>('middle'),
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  wordBreak: String as PropType<ToastWordBreak>,
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp('van-fade'),
  loadingType: String as PropType<LoadingType>,
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object as PropType<CSSProperties>,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
}

export type ToastProps = ExtractPropTypes<typeof toastProps>

export default defineComponent({
  name,
  props: toastProps,
  emits: ['update:show'],
  setup(props, { emit, slots }) {
    let timer: ReturnType<typeof setTimeout>
  }
})

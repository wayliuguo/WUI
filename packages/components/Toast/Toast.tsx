import {
  createNamespace,
  makeNumberProp,
  makeStringProp,
  numericProp,
  unknownProp,
  pick,
  isDef
} from '@w-ui/utils'
import {
  CSSProperties,
  ExtractPropTypes,
  PropType,
  TeleportProps,
  defineComponent,
  onMounted,
  onUnmounted,
  watch
} from 'vue'
import { ToastPosition, ToastType, ToastWordBreak } from './types'
import Loading, { LoadingType } from '../Loading'
import Popup from '../Popup'
import Icon from '../Icon'
import { lockClick } from './lock-click'

const name = 'w-toast'
const bem = createNamespace('toast')

const popupInheritProps = [
  'show',
  'overlay',
  'teleport',
  'transition',
  'overlayClass',
  'overlayStyle',
  'closeOnClickOverlay'
] as const

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
    let clickable = false

    const toggleClickable = () => {
      const newValue = props.show && props.forbidClick
      if (clickable !== newValue) {
        clickable = newValue
        lockClick(clickable)
      }
    }

    const updateShow = (show: boolean) => emit('update:show', show)

    const onClick = () => {
      if (props.closeOnClick) {
        updateShow(false)
      }
    }

    const clearTimer = () => clearTimeout(timer)

    const renderIcon = () => {
      const { icon, type, iconSize, iconPrefix, loadingType } = props
      const hasIcon = icon || type === 'success' || type === 'fail'

      if (hasIcon) {
        return (
          <Icon
            name={icon || type}
            size={iconSize}
            class={bem.m('icon')}
            classPrefix={iconPrefix}
          />
        )
      }

      if (type === 'loading') {
        return (
          <Loading class={bem.m('loading')} size={iconSize} type={loadingType} />
        )
      }
    }

    const renderMessage = () => {
      const { type, message } = props

      if (slots.message) {
        return <div class={bem.m('text')}>{slots.message()}</div>
      }

      if (isDef(message) && message !== '') {
        return type === 'html' ? (
          <div key={0} class={bem.m('text')} innerHTML={String(message)} />
        ) : (
          <div class={bem.m('text')}>{message}</div>
        )
      }
    }

    watch(() => [props.show, props.forbidClick], toggleClickable)

    watch(
      () => [props.show, props.type, props.message, props.duration],
      () => {
        clearTimer()
        if (props.show && props.duration > 0) {
          timer = setTimeout(() => {
            updateShow(false)
          }, props.duration)
        }
      }
    )

    onMounted(toggleClickable)
    onUnmounted(toggleClickable)

    return () => (
      <Popup
        class={[
          bem.b(),
          bem.m(props.position),
          props.wordBreak === 'normal' ? 'break-normal' : props.wordBreak,
          !props.icon && bem.m(props.type),
          props.className
        ]}
        lockScroll={false}
        onClick={onClick}
        onClosed={clearTimer}
        onUpdate:show={updateShow}
        {...pick(props, popupInheritProps)}>
        {renderIcon()}
        {renderMessage()}
      </Popup>
    )
  }
})

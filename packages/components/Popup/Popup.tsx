import {
  HAPTICS_FEEDBACK,
  callInterceptor,
  createNamespace,
  extend,
  isDef,
  makeStringProp
} from '@w-ui/utils'
import {
  CSSProperties,
  ExtractPropTypes,
  Teleport,
  Transition,
  computed,
  defineComponent,
  nextTick,
  onActivated,
  onDeactivated,
  onMounted,
  provide,
  ref,
  watch
} from 'vue'
import { popupSharedProps } from './shared'
import { PopupCloseIconPosition, PopupPosition } from './types'
import Overlay from '../Overlay'
import { useLazyRender } from '../../composables/use-lazy-render'
import Icon from '../Icon/Icon'
import { useExpose } from '../../composables/use-expose'
import { useLockScroll } from '../../composables/use-lock-scroll'
import { POPUP_TOGGLE_KEY } from '../../composables/on-popup-reopen'
import { useGlobalZIndex } from '../../composables/use-global-z-index'
import { useEventListener } from '@w-ui/use'

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
  setup(props, { emit, attrs, slots }) {
    let opened: boolean
    let shouldReopen: boolean

    const zIndex = ref<number>()
    const popupRef = ref<HTMLElement>()

    const lazyRender = useLazyRender(() => props.show || !props.lazyRender)

    const style = computed(() => {
      const style: CSSProperties = {
        zIndex: zIndex.value
      }
      if (isDef(props.duration)) {
        const key =
          props.position === 'center'
            ? 'animationDuration'
            : 'transitionDuration'
        style[key] = `${props.duration}s`
      }
      return style
    })

    const open = () => {
      if (!opened) {
        opened = true

        zIndex.value =
          props.zIndex !== undefined ? +props.zIndex : useGlobalZIndex()

        emit('open')
      }
    }

    const close = () => {
      if (opened) {
        callInterceptor(props.beforeClose, {
          done() {
            opened = false
            emit('close')
            emit('update:show', false)
          }
        })
      }
    }

    const onClickOverlay = (event: MouseEvent): void => {
      emit('clickOverlay', event)
      if (props.closeOnClickOverlay) {
        close()
      }
    }

    const renderOverlay = () => {
      if (props.overlay) {
        return (
          <Overlay
            v-slots={{ default: slots['overlay-content'] }}
            show={props.show}
            class={props.overlayClass}
            zIndex={zIndex.value}
            duration={props.duration}
            customStyle={props.overlayStyle}
            role={props.closeOnClickOverlay ? 'button' : undefined}
            tabindex={props.closeOnClickOverlay ? 0 : undefined}
            onClick={onClickOverlay}></Overlay>
        )
      }
    }

    const onClickCloseIcon = (event: MouseEvent) => {
      emit('clickCloseIcon', event)
      close()
    }

    const renderCloseIcon = () => {
      if (props.closeable) {
        return (
          <Icon
            role="button"
            tabindex={0}
            name={props.closeIcon}
            class={[
              bem.e('close-icon'),
              bem.em('close-icon', props.closeIconPosition),
              HAPTICS_FEEDBACK
            ]}
            classPrefix={props.iconPrefix}
            onClick={onClickCloseIcon}
          />
        )
      }
    }

    let timer: ReturnType<typeof setTimeout> | null
    const onOpened = () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        emit('opened')
      })
    }
    const onClosed = () => emit('closed')
    const onKeydown = (event: KeyboardEvent) => emit('keydown', event)

    const renderPopup = lazyRender(() => {
      const { round, position, safeAreaInsetTop, safeAreaInsetBottom } = props
      return (
        <div
          v-show={props.show}
          ref={popupRef}
          style={style.value}
          role="dialog"
          tabindex={0}
          class={[
            bem.b(),
            round && bem.m('round'),
            bem.m(`${position}`),
            safeAreaInsetTop && 'w-safe-area-top',
            safeAreaInsetBottom && 'w-safe-area-bottom'
          ]}
          onKeydown={onKeydown}
          {...attrs}>
          {slots.default?.()}
          {renderCloseIcon()}
        </div>
      )
    })

    const renderTransition = () => {
      const { position, transition, transitionAppear } = props
      const name =
        position === 'center' ? 'w-fade' : `w-popup-slide-${position}`

      return (
        <Transition
          v-slots={{ default: renderPopup }}
          name={transition || name}
          appear={transitionAppear}
          onAfterEnter={onOpened}
          onAfterLeave={onClosed}></Transition>
      )
    }

    watch(
      () => props.show,
      show => {
        if (show && !opened) {
          open()

          if (attrs.tabindex === 0) {
            nextTick(() => {
              popupRef.value?.focus()
            })
          }
        }
        if (!show && opened) {
          opened = false
          emit('close')
        }
      }
    )

    useExpose({ popupRef })

    useLockScroll(popupRef, () => props.show && props.lockScroll)

    useEventListener('popstate', () => {
      if (props.closeOnPopstate) {
        close()
        shouldReopen = false
      }
    })

    onMounted(() => {
      if (props.show) {
        open()
      }
    })

    onActivated(() => {
      if (shouldReopen) {
        emit('update:show', true)
        shouldReopen = false
      }
    })

    onDeactivated(() => {
      // teleported popup should be closed when deactivated
      if (props.show && props.teleport) {
        close()
        shouldReopen = true
      }
    })

    provide(POPUP_TOGGLE_KEY, () => props.show)

    return () => {
      if (props.teleport) {
        return (
          <Teleport to={props.teleport}>
            {renderOverlay()}
            {renderTransition()}
          </Teleport>
        )
      }
      return (
        <>
          {renderOverlay()}
          {renderTransition()}
        </>
      )
    }
  }
})

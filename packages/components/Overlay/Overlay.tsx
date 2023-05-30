import {
  createNamespace,
  isDef,
  numericProp,
  truthProp,
  unknownProp,
  getZIndexStyle,
  extend,
  preventDefault
} from '@w-ui/utils'
import {
  CSSProperties,
  ExtractPropTypes,
  PropType,
  defineComponent,
  Transition,
  ref
} from 'vue'
import { useLazyRender } from '../../composables/use-lazy-render'
import { useEventListener } from '@w-ui/use'

const name = 'w-overlay'
const bem = createNamespace('overlay')

export const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object as PropType<CSSProperties>
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export default defineComponent({
  name,
  props: overlayProps,
  setup(props, { slots }) {
    const root = ref<HTMLElement>()
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender)

    const onTouchMove = (event: TouchEvent) => {
      if (props.lockScroll) {
        preventDefault(event, true)
      }
    }

    const renderOverlay = lazyRender(() => {
      const style: CSSProperties = extend(
        getZIndexStyle(props.zIndex),
        props.customStyle
      )
      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`
      }
      return (
        <div
          v-show={props.show}
          ref={root}
          style={style}
          class={[bem.b(), props.className]}>
          {slots.default?.()}
        </div>
      )
    })

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchMove, {
      target: root
    })

    return () => (
      <Transition v-slots={{ default: renderOverlay }} name="w-fade" appear />
    )
  }
})

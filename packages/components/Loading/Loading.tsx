import { computed, defineComponent, type ExtractPropTypes } from 'vue'
import {
  extend,
  addUnit,
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace
} from '@w-ui/utils'

const bem = createNamespace('loading')
const name = 'w-loading'

const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => <i class={[bem.e('line'), bem.em('line', index + 1)]} />)

const CircularIcon = (
  <svg class={bem.e('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
)

export type LoadingType = 'circular' | 'spinner'

export const loadingProps = {
  size: numericProp,
  type: makeStringProp<LoadingType>('circular'),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
}

export type LoadingProps = ExtractPropTypes<typeof loadingProps>

export default defineComponent({
  name,

  props: loadingProps,

  setup(props, { slots }) {
    const spinnerStyle = computed(() =>
      extend({ color: props.color }, getSizeStyle(props.size))
    )

    const renderIcon = () => {
      const DefaultIcon = props.type === 'spinner' ? SpinIcon : CircularIcon
      return (
        <span
          class={[bem.e('spinner'), bem.em('spinner', props.type)]}
          style={spinnerStyle.value}
        >
          {slots.icon ? slots.icon() : DefaultIcon}
        </span>
      )
    }

    const renderText = () => {
      if (slots.default) {
        return (
          <span
            class={bem.e('text')}
            style={{
              fontSize: addUnit(props.textSize),
              color: props.textColor ?? props.color
            }}
          >
            {slots.default()}
          </span>
        )
      }
    }

    return () => {
      const { type, vertical } = props
      return (
        <div
          class={[bem.b(), bem.m(type), bem.is('vertical', vertical)]}
          aria-live="polite"
          aria-busy={true}
        >
          {renderIcon()}
          {renderText()}
        </div>
      )
    }
  }
})

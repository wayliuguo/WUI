import { ExtractPropTypes, defineComponent } from 'vue'
import Checker, {
  CheckerLabelPosition,
  CheckerShape,
  checkerProps
} from '../Checkbox/Checker'
import { createNamespace, pick } from '@w-ui/utils'
import { useParent } from '@w-ui/use'
import { RADIO_KEY } from '../RadioGroup/RadioGroup'

const name = 'w-radio'
const bem = createNamespace('radio')

export const radioProps = checkerProps

export type RadioShape = CheckerShape
export type RadioLabelPosition = CheckerLabelPosition
export type RadioProps = ExtractPropTypes<typeof radioProps>

export default defineComponent({
  name,
  props: checkerProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const { parent } = useParent(RADIO_KEY)

    const checked = () => {
      const value = parent ? parent.props.modelValue : props.modelValue
      return value === props.name
    }

    const toggle = () => {
      if (parent) {
        parent.updateValue(props.name)
      } else {
        emit('update:modelValue', props.name)
      }
    }

    return () => (
      <Checker
        v-slots={pick(slots, ['default', 'icon'])}
        bem={bem}
        role="radio"
        parent={parent}
        checked={checked()}
        onToggle={toggle}
        {...props}
      />
    )
  }
})

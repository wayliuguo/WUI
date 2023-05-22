import { useParent } from '@w-ui/use'
import {
  createNamespace,
  makeNumericProp,
  makeStringProp,
  numericProp
} from '@w-ui/utils'
import { ExtractPropTypes, defineComponent } from 'vue'
import { ROW_KEY } from '../Row/Row'

const bem = createNamespace('col')
const name = 'w-col'

export const colProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  span: makeNumericProp(0),
  offset: numericProp
}

export type ColProps = ExtractPropTypes<typeof colProps>

export default defineComponent({
  name,
  props: colProps,
  setup(props, { slots }) {
    const { parent, index } = useParent(ROW_KEY)

    return () => {
      const { tag, span, offset } = props

      return (
        <tag
        >

        </tag>
      )
    }
  }
})

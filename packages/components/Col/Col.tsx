import { useParent } from '@w-ui/use'
import {
  createNamespace,
  makeNumericProp,
  makeStringProp,
  numericProp
} from '@w-ui/utils'
import { ExtractPropTypes, computed, defineComponent } from 'vue'
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

    const style = computed(() => {
      if (!parent) {
        return
      }

      const { spaces } = parent

      if (spaces && spaces.value && spaces.value[index.value]) {
        const { left, right } = spaces.value[index.value]
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null
        }
      }
      return {}
    })

    return () => {
      const { tag, span, offset } = props

      return (
        <tag
          style={style.value}
          class={[
            bem.b(),
            bem.m(`${span}`),
            offset && bem.m(`offset-${offset}`)
          ]}
        >
          {slots.default?.()}
        </tag>
      )
    }
  }
})

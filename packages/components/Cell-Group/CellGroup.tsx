import { truthProp, createNamespace } from '@w-ui/utils'
import { ExtractPropTypes, defineComponent } from 'vue'

export const cellGroupProps = {
  title: String,
  inset: Boolean,
  border: truthProp
}

export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>

const name = 'w-cell-group'
const bem = createNamespace('cell-group')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: cellGroupProps,
  setup(props, { slots, attrs }) {
    return () => {
      if (props.title || slots.title) {
        return (
          <>
            {renderTitle()}
            {renderGroup()}
          </>
        )
      }
    }
    return renderGroup()
  }
})

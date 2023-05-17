import { truthProp, createNamespace, BORDER_TOP_BOTTOM } from '@w-ui/utils'
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

    const renderTitle = () => (
      <div class={[bem.e('title'), props.inset && bem.m('inset')]}>
        {slots.title ? slots.title() : props.title}
      </div>
    )

    const renderGroup = () => (
      <div
        class={[
          bem.b(),
          props.inset && bem.m('inset'),
          props.border && !props.inset && BORDER_TOP_BOTTOM
        ]}
        {...attrs}
      >
        {slots.default?.()}
      </div>
    );

    return () => {
      if (props.title || slots.title) {
        return (
          <>
            {renderTitle()}
            {renderGroup()}
          </>
        )
      }
      return renderGroup()
    }
  }
})

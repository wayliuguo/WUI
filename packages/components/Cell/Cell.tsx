import {
  createNamespace,
  extend,
  makeStringProp,
  numericProp,
  truthProp,
  unknownProp
} from '@w-ui/utils'
import { CSSProperties, ExtractPropTypes, PropType, defineComponent } from 'vue'
import Icon from '../Icon'

export type CellSize = 'normal' | 'large'

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right'

export const cellSharedProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  icon: String,
  size: String as PropType<CellSize>,
  title: numericProp,
  value: numericProp,
  label: numericProp,
  center: Boolean,
  isLink: Boolean,
  border: truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: unknownProp,
  labelClass: unknownProp,
  titleClass: unknownProp,
  titleStyle: null as unknown as PropType<string | CSSProperties>,
  arrowDirection: String as PropType<CellArrowDirection>,
  clickable: {
    type: Boolean as PropType<boolean | null>,
    default: null
  }
}

export type CellProps = ExtractPropTypes<typeof cellProps>

export const cellProps = extend({}, cellSharedProps)

const name = 'w-cell'
const bem = createNamespace('cell')

export default defineComponent({
  name,
  props: cellProps,
  setup(props, { slots }) {
    return () => {
      const renderLeftIcon = () => {
        if (slots.icon) {
          return slots.icon()
        }
        if (props.icon) {
          return (
            <Icon
              name={props.icon}
              class={bem.m('left-icon')}
              classPrefix={props.iconPrefix}
            />
          )
        }
      }

      const { tag, size, center, border, isLink, required } = props
      const clickable = props.clickable ?? isLink

      const classes = [
        bem.b(),
        center && bem.m('center'),
        required && bem.m('required'),
        clickable && bem.m('clickable'),
        !border && bem.m('borderless'),
        size && bem.m('size')
      ]
      return (
        <tag
          class={classes}
          role={clickable ? 'button' : undefined}
          tabindex={clickable ? 0 : undefined}
        >
          {renderLeftIcon()}
        </tag>
      )
    }
  }
})

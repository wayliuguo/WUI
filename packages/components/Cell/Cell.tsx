import {
  createNamespace,
  extend,
  isDef,
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
              class={bem.e('left-icon')}
              classPrefix={props.iconPrefix}
            />
          )
        }
      }

      const renderLabel = () => {
        const showLabel = slots.label || isDef(props.label);
  
        if (showLabel) {
          return (
            <div class={[bem.e('label'), props.labelClass]}>
              {slots.label ? slots.label() : props.label}
            </div>
          );
        }
      };

      const renderTitle = () => {
        if (slots.title || isDef(props.title)) {
          const titleSlot = slots.title?.();
  
          if (Array.isArray(titleSlot) && titleSlot.length === 0) {
            return;
          }
  
          return (
            <div
              class={
                [
                  bem.e('title'), 
                  props.titleClass
                ]
              }
              style={props.titleStyle}
            >
              {titleSlot || <span>{props.title}</span>}
              {renderLabel()}
            </div>
          );
        }
      };

      const renderValue = () => {
        // slots.default is an alias of slots.value
        const slot = slots.value || slots.default;
        const hasValue = slot || isDef(props.value);
  
        if (hasValue) {
          return (
            <div class={[bem.e('value'), props.valueClass]}>
              {slot ? slot() : <span>{props.value}</span>}
            </div>
          );
        }
      };

      const renderRightIcon = () => {
        if (slots['right-icon']) {
          return slots['right-icon']();
        }
  
        if (props.isLink) {
          const name =
            props.arrowDirection && props.arrowDirection !== 'right'
              ? `arrow-${props.arrowDirection}`
              : 'arrow';
          return <Icon name={name} class={bem.e('right-icon')} />;
        }
      };

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
          {renderTitle()}
          {renderValue()}
          {renderRightIcon()}
          {slots.extra?.()}
        </tag>
      )
    }
  }
})

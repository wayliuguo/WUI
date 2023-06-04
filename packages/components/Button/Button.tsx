import {
  BORDER_SURROUND,
  createNamespace,
  makeStringProp,
  numericProp,
  preventDefault
} from '@w-ui/utils'
import { CSSProperties, ExtractPropTypes, PropType, defineComponent } from 'vue'
import {
  ButtonIconPosition,
  ButtonNativeType,
  ButtonSize,
  ButtonType
} from './types'
import Loading, { LoadingType } from '../Loading'
import Icon from '../Icon'

export const buttonProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('button'),
  text: String,
  icon: String,
  type: makeStringProp<ButtonType>('default'),
  size: makeStringProp<ButtonSize>('normal'),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp<ButtonNativeType>('button'),
  loadingSize: numericProp,
  loadingText: String,
  loadingType: String as PropType<LoadingType>,
  iconPosition: makeStringProp<ButtonIconPosition>('left')
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

const name = 'w-button'
const bem = createNamespace('button')

export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit, slots }) {
    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading()
      }

      return (
        <Loading
          size={props.loadingSize}
          type={props.loadingType}
          class={bem.b('loading')}
        />
      )
    }

    const renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon()
      }

      if (slots.icon) {
        return <div class={bem.e('icon')}>{slots.icon()}</div>
      }

      if (props.icon) {
        return (
          <Icon
            name={props.icon}
            class={bem.e('icon')}
            classPrefix={props.iconPrefix}
          />
        )
      }
    }

    const renderText = () => {
      let text
      if (props.loading) {
        text = props.loadingText
      } else {
        text = slots.default ? slots.default() : props.text
      }

      if (text) {
        return <span class={bem.m('text')}>{text}</span>
      }
    }

    const getStyle = () => {
      const { color, plain } = props
      if (color) {
        const style: CSSProperties = {
          color: plain ? color : 'white'
        }

        if (!plain) {
          // Use background instead of backgroundColor to make linear-gradient work
          style.background = color
        }

        // hide border when color is linear-gradient
        if (color.includes('gradient')) {
          style.border = 0
        } else {
          style.borderColor = color
        }

        return style
      }
    }

    const onClick = (event: MouseEvent) => {
      if (props.loading) {
        preventDefault(event)
      } else if (!props.disabled) {
        emit('click', event)
      }
    }

    return () => {
      const {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition
      } = props

      const classes = [
        bem.b(),
        bem.m(type),
        bem.m(size),
        plain && bem.m('plain'),
        block && bem.m('block'),
        round && bem.m('round'),
        square && bem.m('square'),
        loading && bem.m('loading'),
        disabled && bem.m('disabled'),
        hairline && bem.m('hairline'),
        { [BORDER_SURROUND]: hairline }
      ]

      return (
        <tag
          type={nativeType}
          class={classes}
          style={getStyle()}
          disabled={disabled}
          onClick={onClick}
        >
          <div class={bem.e('content')}>
            {iconPosition === 'left' && renderIcon()}
            {renderText()}
            {iconPosition === 'right' && renderIcon()}
          </div>
        </tag>
      )
    }
  }
})

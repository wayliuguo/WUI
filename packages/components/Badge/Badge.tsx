import {
  Numeric,
  addUnit,
  createNamespace,
  isDef,
  isNumeric,
  makeStringProp,
  numericProp,
  truthProp
} from '@w-ui/utils'
import {
  CSSProperties,
  ExtractPropTypes,
  PropType,
  computed,
  defineComponent
} from 'vue'

export type BadgePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  color: String,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp<BadgePosition>('top-right')
} as const

export type BadgeProps = ExtractPropTypes<typeof badgeProps>

const name = 'w-badge'

const bem = createNamespace('badge')

export default defineComponent({
  name,
  props: badgeProps,
  setup(props, { slots }) {
    const hasContent = () => {
      if (slots.content) {
        return true
      }
      const { content, showZero } = props
      return (
        isDef(content) &&
        content !== '' &&
        (showZero || (content !== 0 && content !== '0'))
      )
    }

    const renderContent = () => {
      const { dot, max, content } = props
      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content()
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (isDef(max) && isNumeric(content!) && +content > +max) {
          return `${max}+`
        }
        return content
      }
    }

    const getOffsetWithMinusString = (val: string) =>
      val.startsWith('-') ? val.replace('-', '') : `-${val}`

    const style = computed(() => {
      const style: CSSProperties = {
        background: props.color
      }

      if (props.offset) {
        const [x, y] = props.offset
        const { position } = props
        const [offsetY, offsetX] = position.split('-') as [
          'top' | 'bottom',
          'left' | 'right'
        ]

        if (slots.default) {
          if (typeof y === 'number') {
            style[offsetY] = addUnit(offsetY === 'top' ? y : -y)
          } else {
            style[offsetY] =
              offsetY === 'top' ? addUnit(y) : getOffsetWithMinusString(y)
          }

          if (typeof x === 'number') {
            style[offsetX] = addUnit(offsetX === 'left' ? x : -x)
          } else {
            style[offsetX] =
              offsetX === 'left' ? addUnit(x) : getOffsetWithMinusString(x)
          }
        } else {
          style.marginTop = addUnit(y)
          style.marginLeft = addUnit(x)
        }
      }

      return style
    })

    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return (
          <div
            class={[
              bem.b(),
              bem.m(props.position),
              props.dot && bem.m('dot'),
              !!slots.default && bem.m('fixed')
            ]}
            style={style.value}
          >
            {renderContent()}
          </div>
        )
      }
    }

    return () => {
      if (slots.default) {
        return (
          <tag class={bem.e('wrapper')}>
            {slots.default()}
            {renderBadge()}
          </tag>
        )
      }

      return renderBadge()
    }
  }
})

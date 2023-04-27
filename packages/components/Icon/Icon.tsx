import {
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes
} from 'vue'
import {
  addUnit,
  numericProp,
  makeStringProp,
  createNamespace
} from '@w-ui/utils'
import { Badge, type BadgeProps } from '@w-ui/components/Badge'

const bem = createNamespace('icon')

const name = 'w-icon'

const isImage = (name?: string) => name?.includes('/')

export const iconProps = {
  dot: Boolean,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('i'),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object as PropType<Partial<BadgeProps>>,
  classPrefix: String
}

export type IconProps = ExtractPropTypes<typeof iconProps>

export default defineComponent({
  name,

  props: iconProps,

  setup(props, { slots }) {
    const classPrefix = computed(() => props.classPrefix || bem.b())

    return () => {
      const { tag, dot, name, size, badge, color } = props
      const isImageIcon = isImage(name)

      return (
        <Badge
          dot={dot}
          tag={tag}
          class={[
            classPrefix.value,
            isImageIcon ? '' : `${classPrefix.value}-${name}`
          ]}
          style={{
            color,
            fontSize: addUnit(size)
          }}
          content={badge}
          {...props.badgeProps}
        >
          {slots.default?.()}
          {isImageIcon && <img class={bem.e('image')} src={name} />}
        </Badge>
      )
    }
  }
})

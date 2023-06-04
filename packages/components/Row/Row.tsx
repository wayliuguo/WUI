import {
  createNamespace,
  makeNumericProp,
  makeStringProp,
  truthProp
} from '@w-ui/utils'
import { useChildren } from '@w-ui/use'
import {
  ComputedRef,
  ExtractPropTypes,
  InjectionKey,
  PropType,
  computed,
  defineComponent
} from 'vue'

const bem = createNamespace('row')
const name = 'w-row'

export type RowAlign = 'top' | 'center' | 'bottom'

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

export const rowProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  wrap: truthProp,
  align: String as PropType<RowAlign>,
  gutter: makeNumericProp(0),
  justify: String as PropType<RowJustify>
}

export type RowProps = ExtractPropTypes<typeof rowProps>

export type RowSpaces = { left?: number; right: number }[]

export type RowProvide = {
  spaces: ComputedRef<RowSpaces>
}

export const ROW_KEY: InjectionKey<RowProvide> = Symbol(name)

export default defineComponent({
  name,

  props: rowProps,

  setup(props, { slots }) {
    const { children, linkChildren } = useChildren(ROW_KEY)

    const groups = computed(() => {
      const groups: number[][] = [[]]

      let totalSpan = 0
      children.forEach((child, index) => {
        totalSpan += Number(child.span)

        if (totalSpan > 24) {
          groups.push([index])
          totalSpan -= 24
        } else {
          groups[groups.length - 1].push(index)
        }
      })

      return groups
    })

    const spaces = computed(() => {
      const gutter = Number(props.gutter)
      const spaces: RowSpaces = []

      if (!gutter) {
        return spaces
      }

      groups.value.forEach(group => {
        const averagePadding = (gutter * (group.length - 1)) / group.length

        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({ right: averagePadding })
          } else {
            const left = gutter - spaces[item - 1].right
            const right = averagePadding - left
            spaces.push({ left, right })
          }
        })
      })

      return spaces
    })

    linkChildren({ spaces })

    return () => {
      const { tag, wrap, align, justify } = props
      return (
        <tag
          class={[
            bem.b(),
            align && bem.m(`align-${align}`),
            justify && bem.m(`justify-${justify}`),
            !wrap && bem.m('nowrap')
          ]}
        >
          {slots.default?.()}
        </tag>
      )
    }
  }
})

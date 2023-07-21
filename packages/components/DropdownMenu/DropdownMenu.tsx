import {
  ComponentInstance,
  HAPTICS_FEEDBACK,
  createNamespace,
  isDef,
  makeNumericProp,
  makeStringProp,
  numericProp,
  truthProp,
  windowHeight
} from '@w-ui/utils'
import {
  CSSProperties,
  ExtractPropTypes,
  InjectionKey,
  computed,
  defineComponent,
  ref
} from 'vue'
import { DropdownMenuDirection, DropdownMenuProvide } from './types'
import {
  useChildren,
  useClickAway,
  useEventListener,
  useRect,
  useScrollParent
} from '@w-ui/use'
import { useId } from '../../composables/use-id'
import { useExpose } from '../../composables/use-expose'

const name = 'w-dropdown-menu'
const bem = createNamespace('dropdown-menu')

export const dropdownMenuProps = {
  // 菜单标题和选项的选中态颜色
  activeColor: String,
  // 	菜单展开方向，可选值为up|down
  direction: makeStringProp<DropdownMenuDirection>('down'),
  // 菜单栏 z-index 层级
  zIndex: numericProp,
  // 动画时长，单位秒，设置为 0 可以禁用动画
  duration: makeNumericProp(0.2),
  // 是否显示遮罩层
  overlay: truthProp,
  // 是否在点击遮罩层后关闭菜单
  closeOnClickOutside: truthProp,
  // 是否在点击外部元素后关闭菜单
  closeOnClickOverlay: truthProp
}

export type DropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>

export const DROPDOWN_KEY: InjectionKey<DropdownMenuProvide> = Symbol()

export default defineComponent({
  name,
  props: dropdownMenuProps,
  setup(props, { slots }) {
    // menu ref
    const root = ref<HTMLElement>()
    // menu bar ref
    const barRef = ref<HTMLElement>()
    // 生成id
    const id = useId()
    // menu bar top
    const offset = ref(0)

    // 关联子组件
    const { children, linkChildren } = useChildren(DROPDOWN_KEY)
    // 获取可滚动的父级元素
    const scrollParent = useScrollParent(root)

    // 是否是打开的
    const opened = computed(() => children.some(item => item.state.showWrapper))

    // menu bar style zindex
    const barStyle = computed<CSSProperties | undefined>(() => {
      if (opened.value && isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1
        }
      }
      return {}
    })

    // 切换打开的选项
    const toggleItem = (active: number) => {
      children.forEach((item, index) => {
        if (index === active) {
          item.toggle()
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true })
        }
      })
    }

    // menu bar title render
    const renderTitle = (item: ComponentInstance, index: number) => {
      const { showPopup } = item.state
      const { disabled, titleClass } = item
      return (
        <div
          id={`${id}-${index}`}
          role="button"
          tabindex={disabled ? undefined : 0}
          class={[
            bem.e('item'),
            disabled ? bem.em('item', 'disabled') : HAPTICS_FEEDBACK
          ]}
          onClick={() => {
            if (!disabled) {
              toggleItem(index)
            }
          }}>
          <span
            class={[
              bem.e('title'),
              showPopup === (props.direction === 'down') &&
                bem.em('title', 'down'),
              showPopup && bem.em('title', 'active'),
              titleClass
            ]}
            style={{ color: showPopup ? props.activeColor : '' }}>
            <div class="w-ellipsis">{item.renderTitle()}</div>
          </span>
        </div>
      )
    }

    // 关闭所有菜单的展示状态
    const close = () => {
      children.forEach(item => item.toggle(false))
    }

    // 动态监听 menu bar 的宽高，用于指定列表的top或bottom
    const updateOffset = () => {
      if (barRef.value) {
        const rect = useRect(barRef)
        if (props.direction === 'down') {
          offset.value = rect.bottom
        } else {
          offset.value = windowHeight.value - rect.top
        }
      }
    }

    // 根据配置点击outsize是否关闭菜单展示状态
    const onClickAway = () => {
      if (props.closeOnClickOutside) {
        close()
      }
    }

    // 监听 scroll
    const onScroll = () => {
      if (opened.value) {
        updateOffset()
      }
    }

    useExpose({ close })
    linkChildren({ id, props, offset, updateOffset })
    useClickAway(root, onClickAway)
    useEventListener('scroll', onScroll, {
      target: scrollParent,
      passive: true
    })

    return () => (
      <div ref={root} class={bem.b()}>
        <div
          ref={barRef}
          style={barStyle.value}
          class={[bem.e('bar'), opened.value && bem.em('bar', 'opened')]}>
          {children.map(renderTitle)}
        </div>
        {slots.default?.()}
      </div>
    )
  }
})

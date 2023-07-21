import {
  createNamespace,
  extend,
  makeArrayProp,
  makeStringProp,
  truthProp,
  pick,
  HAPTICS_FEEDBACK
} from '@w-ui/utils'
import { ExtractPropTypes, defineComponent, nextTick } from 'vue'
import { popupSharedPropKeys, popupSharedProps } from '../Popup/shared'
import Popup from '../Popup/Popup'
import Icon from '../Icon/Icon'
import Loading from '../Loading/Loading'

const name = 'w-action-sheet'
const bem = createNamespace('action-sheet')

// action 数据类型
export interface ActionSheetAction {
  // 标题
  name?: string
  // 二级标题
  subname?: string
  // 选项文字颜色
  color?: string
  // 是否为加载状态
  loading?: boolean
  // 是否为禁用状态
  disabled?: boolean
  // 点击时触发的回调函数
  callback?: (action: ActionSheetAction) => void
  // 为对应列添加额外的 class
  className?: unknown
}

const popupInheritKeys = [
  ...popupSharedPropKeys,
  'round',
  'closeOnPopstate',
  'safeAreaInsetBottom'
] as const

export const actionSheetProps = extend({}, popupSharedProps, {
  // 顶部标题
  title: String,
  // 是否显示圆角
  round: truthProp,
  // 面板选项列表
  actions: makeArrayProp<ActionSheetAction>(),
  // 关闭图标名称或图片链接，
  closeIcon: makeStringProp('cross'),
  // 是否显示关闭图标
  closeable: truthProp,
  // 取消按钮文字
  cancelText: String,
  // 选项上方的描述信息
  description: String,
  // 是否在页面回退时自动关闭
  closeOnPopstate: truthProp,
  // 是否在点击选项后关闭
  closeOnClickAction: Boolean,
  // 是否开启底部安全区适配
  safeAreaInsetBottom: truthProp
})

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>

export default defineComponent({
  name,

  props: actionSheetProps,

  emits: ['select', 'cancel', 'update:show'],

  setup(props, { slots, emit }) {
    // 更新显示状态
    const updateShow = (show: boolean) => emit('update:show', show)

    // 取消选择
    const onCancel = () => {
      updateShow(false)
      emit('cancel')
    }

    // 渲染 header
    const renderHeader = () => {
      if (props.title) {
        return (
          <div class={bem.e('header')}>
            {props.title}
            {props.closeable && (
              <Icon
                name={props.closeIcon}
                class={[bem.e('close'), HAPTICS_FEEDBACK]}
                onClick={onCancel}></Icon>
            )}
          </div>
        )
      }
    }

    // 渲染描述信息
    const renderDescription = () => {
      if (props.description || slots.description) {
        const content = slots.description
          ? slots.description()
          : props.description
        return <div class={bem.e('description')}>{content}</div>
      }
    }

    // 渲染取消
    const renderCancel = () => {
      if (slots.cancel || props.cancelText) {
        return [
          <>
            <div class={bem.e('gap')}></div>
            <button type="button" class={bem.e('cancel')} onClick={onCancel}>
              {slots.cancel ? slots.cancel() : props.cancelText}
            </button>
          </>
        ]
      }
    }

    // 渲染选项内容
    const renderActionContent = (action: ActionSheetAction, index: number) => {
      if (action.loading) {
        return <Loading class={bem.m('loading-icon')}></Loading>
      }
      if (slots.action) {
        return slots.action({ action, index })
      }
      return [
        <span class={bem.e('name')}>{action.name}</span>,
        action.subname && <div class={bem.e('subname')}>{action.subname}</div>
      ]
    }

    // 渲染选项列表
    const renderAction = (action: ActionSheetAction, index: number) => {
      const { color, loading, callback, disabled, className } = action
      const onClick = () => {
        if (disabled || loading) return
        if (callback) callback(action)
        if (props.closeOnClickAction) updateShow(false)
        nextTick(() => emit('select', action, index))
      }
      return (
        <button
          type="button"
          style={{ color }}
          class={[
            bem.e('item'),
            className,
            loading && bem.m('loading'),
            disabled && bem.m('disabled')
          ]}
          onClick={onClick}>
          {renderActionContent(action, index)}
        </button>
      )
    }

    return () => (
      <Popup
        class={bem.b()}
        position="bottom"
        onUpdate:show={updateShow}
        {...pick(props, popupInheritKeys)}>
        {renderHeader()}
        {renderDescription()}
        <div class={bem.e('content')}>
          {props.actions.map(renderAction)}
          {slots.default?.()}
        </div>
        {renderCancel()}
      </Popup>
    )
  }
})

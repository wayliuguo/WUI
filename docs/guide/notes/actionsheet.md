# ActionSheet

## props
- [popupSharedProps](popup.html#props)
```
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

```

## emits

```
emits: ['select', 'cancel', 'update:show']
```

## setup

## updateShow
- 更新显示状态
```
const updateShow = (show: Boolean) => emit('update:show', show)
```

## onCancel
- 取消选择
```
const onCancel = () => {
  updateShow(false)
  emit('cancel')
}
```

## renderHeader
- 渲染 header
```
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
```

## renderDescription
- 渲染描述信息
```
const renderDescription = () => {
  if (props.description || slots.description) {
    const content = slots.description
      ? slots.description()
      : props.description
    return <div class={bem.e('description')}>{content}</div>
  }
}
```
## renderCancel
- 渲染取消按钮
```
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
```

## renderActionContent
- 渲染选项内容
```
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
```

## renderAction
- 渲染选项列表
```
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
```

## render
- 使用`popup`组件进行弹出，同时利用`default`插槽渲染内容。
```
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
```

## style
``` less
@import './mixins/hairline.less';

:root {
  --w-action-sheet-max-height: 80%;
  --w-action-sheet-header-height: 48px;
  --w-action-sheet-header-font-size: var(--w-font-size-lg);
  --w-action-sheet-description-color: var(--w-text-color-2);
  --w-action-sheet-description-font-size: var(--w-font-size-md);
  --w-action-sheet-description-line-height: var(--w-line-height-md);
  --w-action-sheet-item-background: var(--w-background-2);
  --w-action-sheet-item-font-size: var(--w-font-size-lg);
  --w-action-sheet-item-line-height: var(--w-line-height-lg);
  --w-action-sheet-item-text-color: var(--w-text-color);
  --w-action-sheet-item-disabled-text-color: var(--w-text-color-3);
  --w-action-sheet-subname-color: var(--w-text-color-2);
  --w-action-sheet-subname-font-size: var(--w-font-size-sm);
  --w-action-sheet-subname-line-height: var(--w-line-height-sm);
  --w-action-sheet-close-icon-size: 22px;
  --w-action-sheet-close-icon-color: var(--w-gray-5);
  --w-action-sheet-close-icon-padding: 0 var(--w-padding-md);
  --w-action-sheet-cancel-text-color: var(--w-gray-7);
  --w-action-sheet-cancel-padding-top: var(--w-padding-xs);
  --w-action-sheet-cancel-padding-color: var(--w-background);
  --w-action-sheet-loading-icon-size: 22px;
}

.w-action-sheet {
  display: flex;
  flex-direction: column;
  max-height: var(--w-action-sheet-max-height);
  overflow: hidden;
  color: var(--w-action-sheet-item-text-color);

  &__content {
    flex: 1 auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__item,
  &__cancel {
    display: block;
    width: 100%;
    padding: 14px var(--w-padding-md);
    font-size: var(--w-action-sheet-item-font-size);
    background: var(--w-action-sheet-item-background);
    border: none;
    cursor: pointer;

    &:active {
      background-color: var(--w-active-color);
    }
  }

  &__item {
    line-height: var(--w-action-sheet-item-line-height);

    &--loading,
    &--disabled {
      color: var(--w-action-sheet-item-disabled-text-color);

      &:active {
        background-color: var(--w-action-sheet-item-background);
      }
    }

    &--disabled {
      cursor: not-allowed;
    }

    &--loading {
      cursor: default;
    }
  }

  &__cancel {
    flex-shrink: 0;
    box-sizing: border-box;
    color: var(--w-action-sheet-cancel-text-color);
  }

  &__subname {
    margin-top: var(--w-padding-xs);
    color: var(--w-action-sheet-subname-color);
    font-size: var(--w-action-sheet-subname-font-size);
    line-height: var(--w-action-sheet-subname-line-height);
  }

  &__gap {
    display: block;
    height: var(--w-action-sheet-cancel-padding-top);
    background: var(--w-action-sheet-cancel-padding-color);
  }

  &__header {
    flex-shrink: 0;
    font-weight: var(--w-font-bold);
    font-size: var(--w-action-sheet-header-font-size);
    line-height: var(--w-action-sheet-header-height);
    text-align: center;
  }

  &__description {
    position: relative;
    flex-shrink: 0;
    padding: 20px var(--w-padding-md);
    color: var(--w-action-sheet-description-color);
    font-size: var(--w-action-sheet-description-font-size);
    line-height: var(--w-action-sheet-description-line-height);
    text-align: center;

    &::after {
      .hairline-bottom(var(--w-border-color), var(--w-padding-md), var(--w-padding-md));
    }
  }

  &__loading-icon .w-loading__spinner {
    width: var(--w-action-sheet-loading-icon-size);
    height: var(--w-action-sheet-loading-icon-size);
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: var(--w-action-sheet-close-icon-padding);
    color: var(--w-action-sheet-close-icon-color);
    font-size: var(--w-action-sheet-close-icon-size);
    line-height: inherit;
  }
}
```
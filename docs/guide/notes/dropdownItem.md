# DropdownItem

## props
```
export const dropdownItemProps = {
  // 当前选中项对应的 value
  modelValue: unknownProp,
  // 菜单项标题
  title: String,
  // 选项数组
  options: makeArrayProp<DropdownItemOption>(),
  // 是否禁用菜单
  disabled: Boolean,
  // 是否在首次展开时才渲染菜单内容
  lazyRender: truthProp,
  // 标题额外类名
  titleClass: [String, Array, Object],
  // 指定挂载的节点，等同于 Teleport 组件的 to 属性
  teleport: [String, Object] as PropType<TeleportProps['to']>
}

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>
```

## emits

```
emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue']
```

## setup

## state
```
const state = reactive({
  showPopup: false,
  transition: true,
  showWrapper: false
})
```

## useParent
- 使用[useParent](hooks.html#useparent-ts)获取父组件信息。
```
const { parent, index } = useParent(DROPDOWN_KEY)
```

## onClickWrapper
- 如果`teleport`阻止默认行为。
```
const onClickWrapper = (event: MouseEvent) => {
  // prevent being identified as clicking outside and closed when using teleport
  if (props.teleport) {
    event.stopPropagation()
  }
}
```

## getEmitter
- 派发事件。
```
const getEmitter = (name: 'open' | 'close' | 'opened') => () => emit(name)
const onOpen = getEmitter('open')
const onClose = getEmitter('close')
const onOpened = getEmitter('opened')
const onClosed = () => {
  state.showWrapper = false
  emit('closed')
}
```

## renderOption
- 渲染列表选项，定义点击行为。
```
const renderOption = (option: DropdownItemOption) => {
  const { activeColor } = parent.props
  const active = option.value === props.modelValue

  const onClick = () => {
    state.showPopup = false

    if (option.value !== props.modelValue) {
      emit('update:modelValue', option.value)
      emit('change', option.value)
    }
  }

  const renderIcon = () => {
    if (active) {
      return (
        <Icon class={bem.e('icon')} color={activeColor} name="success" />
      )
    }
  }

  return (
    <Cell
      v-slots={{ value: renderIcon }}
      role="menuitem"
      key={option.value}
      icon={option.icon}
      title={option.text}
      class={[bem.e('option'), active && bem.em('option', 'active')]}
      style={{ color: active ? activeColor : '' }}
      tabindex={active ? 0 : -1}
      clickable
      onClick={onClick}
    />
  )
}
```
## renderContent
- 获取`parent` 中 `offset` 定位高度。
- 结合`popup` 渲染列表。
```
const renderContent = () => {
const { offset } = parent
const { zIndex, overlay, duration, direction, closeOnClickOverlay } =
  parent.props
const style: CSSProperties = getZIndexStyle(zIndex)
// 根据父组件的direction 和 offset 定位
if (direction === 'down') {
  style.top = `${offset.value}px`
} else {
  style.bottom = `${offset.value}px`
}
// 使用 popup 渲染内容
return (
  <div
    v-show={state.showWrapper}
    style={style}
    class={[bem.b(), bem.m(direction)]}
    onClick={onClickWrapper}
    {...attrs}>
    <Popup
      v-model:show={state.showPopup}
      role="menu"
      class={bem.e('content')}
      overlay={overlay}
      position={direction === 'down' ? 'top' : 'bottom'}
      duration={state.transition ? duration : 0}
      lazyRender={props.lazyRender}
      overlayStyle={{ position: 'absolute' }}
      aria-labelledby={`${parent.id}-${index.value}`}
      closeOnClickOverlay={closeOnClickOverlay}
      onOpen={onOpen}
      onClose={onClose}
      onOpened={onOpened}
      onClosed={onClosed}>
      {props.options.map(renderOption)}
      {slots.default?.()}
    </Popup>
  </div>
)
}
```

## useExpose
- 渲染 title，绑定样式和事件。
```
useExpose
```

## close
- 通过[useExpose](hooks.html#use-expose-ts)暴露`state、toggle、renderTitle`
```
const toggle = (
  show = !state.showPopup,
  options: { immediate?: boolean } = {}
) => {
  if (show === state.showPopup) {
    return
  }

  state.showPopup = show
  state.transition = !options.immediate

  if (show) {
    parent.updateOffset()
    state.showWrapper = true
  }
}

const renderTitle = () => {
  if (slots.title) {
    return slots.title()
  }

  if (props.title) {
    return props.title
  }

  const match = props.options.find(
    option => option.value === props.modelValue
  )

  return match ? match.text : ''
}

useExpose({ state, toggle, renderTitle })
```

## render
```
return () => {
  if (props.teleport) {
    return <Teleport to={props.teleport}>{renderContent()}</Teleport>
  }
  return renderContent()
}
```

## style
``` less
:root {
  --w-dropdown-item-z-index: 10;
}

.w-dropdown-item {
  position: fixed;
  right: 0;
  left: 0;
  z-index: var(--w-dropdown-item-z-index);
  overflow: hidden;

  &__icon {
    display: block;
    line-height: inherit;
  }

  &__option {
    text-align: left;

    &--active {
      color: var(--w-dropdown-menu-option-active-color);

      .w-dropdown-item__icon {
        color: var(--w-dropdown-menu-option-active-color);
      }
    }
  }

  &--up {
    top: 0;
  }

  &--down {
    bottom: 0;
  }

  &__content {
    position: absolute;
    max-height: var(--w-dropdown-menu-content-max-height);
  }
}

```
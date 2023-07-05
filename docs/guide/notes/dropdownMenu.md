# DropdownMenu

## props
```
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
```

## emits

```
emits: ['update:modelValue']
```

## setup

## state
```
// menu ref
const root = ref<HTMLElement>()
// menu bar ref
const barRef = ref<HTMLElement>()
// 生成id
const id = useId()
// menu bar top
const offset = ref(0)
```

## useChildren
- 使用[useChildren](hooks.html#usechildren-ts)关联子组件。
- 父组件通过`linkChildren`把对象`provide`给子组件。
- 需要与[useParent](hooks.html#useparent-ts)搭配使用。
- 子组件中`useParent`，内部通过`inject`获取父组件`provide`的对象。
```
// 关联子组件
const { children, linkChildren } = useChildren(DROPDOWN_KEY)
```

## useScrollParent
- 使用[useScrollParent](hooks.html#usescrollparent)获取可滚动的父级元素。
```
const scrollParent = useScrollParent(root)
```

## opened
- 通过计算函数监控子组件中`state.showWrapper`得到是否展开菜单。
```
const opened = computed(() => children.some(item => item.state.showWrapper))
```

## barStyle
- 通过计算函数监控`opended`和`props.zIndex`每次打开+1
```
const barStyle = computed<CSSProperties | undefined>(() => {
  if (opened.value && isDef(props.zIndex)) {
    return {
      zIndex: +props.zIndex + 1
    }
  }
})
```
## toggleItem
- 传入点击的子组件`index`,通过遍历`children`找到调用子组件`toggle`。
```
const toggleItem = (active: number) => {
  children.forEach((item, index) => {
    if (index === active) {
      item.toggle()
    } else if (item.state.showPopup) {
      item.toggle(false, { immediate: true })
    }
  })
}
```

## renderTitle
- 渲染 title，绑定样式和事件。
```
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
```

## close
- 调用 `children`数组中子组件的`toggle`关闭所有。
```
const close = () => {
  children.forEach(item => item.toggle(false))
}
```

## 监听与导出（重要）
- 使用[useExpose](hooks.html#use-expose-ts) 暴露 `close` 方法。
- `updateOffset` 中通过[useRect](hooks.html#userect)获取`barRef`的属性，赋值给`offset`，用于暴露给子组件定位用。
- 通过[useClickAway](hooks.html#useclickaway)，定义响应函数`onClickAway`关闭。
- 通过[useEventListener](hooks.html#useeventlistener)监听`scroll`事件，定义响应函数`onScroll`调用`updateOffset`。
```
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
```

## render
```
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
```

## style
``` less
:root {
  --w-dropdown-menu-height: 48px;
  --w-dropdown-menu-background: var(--w-background-2);
  --w-dropdown-menu-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
  --w-dropdown-menu-title-font-size: 15px;
  --w-dropdown-menu-title-text-color: var(--w-text-color);
  --w-dropdown-menu-title-active-text-color: var(--w-primary-color);
  --w-dropdown-menu-title-disabled-text-color: var(--w-text-color-2);
  --w-dropdown-menu-title-padding: 0 var(--w-padding-xs);
  --w-dropdown-menu-title-line-height: var(--w-line-height-lg);
  --w-dropdown-menu-option-active-color: var(--w-primary-color);
  --w-dropdown-menu-content-max-height: 80%;
}

.w-dropdown-menu {
  user-select: none;

  &__bar {
    position: relative;
    display: flex;
    height: var(--w-dropdown-menu-height);
    background: var(--w-dropdown-menu-background);
    box-shadow: var(--w-dropdown-menu-shadow);

    &--opened {
      z-index: calc(var(--w-dropdown-item-z-index) + 1);
    }
  }

  &__item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 0; // hack for flex ellipsis

    &--disabled {
      .w-dropdown-menu__title {
        color: var(--w-dropdown-menu-title-disabled-text-color);
      }
    }
  }

  &__title {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: var(--w-dropdown-menu-title-padding);
    color: var(--w-dropdown-menu-title-text-color);
    font-size: var(--w-dropdown-menu-title-font-size);
    line-height: var(--w-dropdown-menu-title-line-height);

    &::after {
      position: absolute;
      top: 50%;
      right: -4px;
      margin-top: -5px;
      border: 3px solid;
      border-color: transparent transparent var(--w-gray-4) var(--w-gray-4);
      transform: rotate(-45deg);
      opacity: 0.8;
      content: '';
    }

    &--active {
      color: var(--w-dropdown-menu-title-active-text-color);

      &::after {
        border-color: transparent transparent currentColor currentColor;
      }
    }

    &--down {
      &::after {
        margin-top: -1px;
        transform: rotate(135deg);
      }
    }
  }
}
```
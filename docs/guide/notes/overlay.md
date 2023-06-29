# Overlay

## props
```
export const overlayProps = {
  // 是否展示遮罩层
  show: Boolean,
  // z-index 层级 default: 1
  zIndex: numericProp,
  // duration 动画时长，单位秒，设置为 0 可以禁用动画 default: 0.3
  duration: numericProp,
  // 自定义类名: 自定义类名
  className: unknownProp,
  // 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 default: 1
  lockScroll: truthProp,
  // 是否在显示时才渲染节点 default: true
  lazyRender: truthProp,
  // 自定义样式
  customStyle: Object as PropType<CSSProperties>
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
```

## setup

## useLazyRender & renderOverlay
- [useLazyRender](hooks.html#use-lazy-render-ts)返回一个函数。
- 这个函数接收一个`JSX.Element`入参的函数，这个函数根据`props.show`执行。
- [getZIndexStyle](utilsFunction.html#getzindexstyle)返回层级。
```
const lazyRender = useLazyRender(() => props.show || !props.lazyRender)

const renderOverlay = lazyRender(() => {
  const style: CSSProperties = extend(
    getZIndexStyle(props.zIndex),
    props.customStyle
  )
  if (isDef(props.duration)) {
    style.animationDuration = `${props.duration}s`
  }
  return (
    <div
      v-show={props.show}
      ref={root}
      style={style}
      class={[bem.b(), props.className]}
    >
      {slots.default?.()}
    </div>
  )
})

```

## onTouchMove & useEventListener
- [useEventListener](hooks.html#useeventlistener),监听`root`的`touchmove`事件。
- 该事件对应的执行函数，如果配置了`lockScroll`,[preventDefault](utilsFunction.html#stoppropagation-preventdefault)不执行默认行为。
```
const root = ref<HTMLElement>()

const onTouchMove = (event: TouchEvent) => {
  if (props.lockScroll) {
    preventDefault(event, true)
  }
}

useEventListener('touchmove', onTouchMove, {
  target: root
})
```

## render
- 使用`Transition`结合`name`属性控制渐变。
```
return () => (
  <Transition v-slots={{ default: renderOverlay }} name="w-fade" appear />
)
```

## style
``` less
// overlay.less
:root {
  --w-overlay-z-index: 1;
  --w-overlay-background: rgba(0, 0, 0, 0.7);
}

.w-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--w-overlay-z-index);
  width: 100%;
  height: 100%;
  background: var(--w-overlay-background);
}
// animation.less
@keyframes w-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes w-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
```
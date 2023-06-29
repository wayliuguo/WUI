# Row

## props
```
export const colProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  span: makeNumericProp(0),
  offset: numericProp
}

export type ColProps = ExtractPropTypes<typeof colProps>
```

## setup

## useParent
- 使用 [useParent](hooks.html#useParent.ts)
- 获取其父组件及该组件下标。
```
const { parent, index } = useParent(ROW_KEY)
```

## style
- 获取父组件中收集的`spaces`
- 根据下标找到对应的样式数值
```
const style = computed(() => {
  if (!parent) {
    return
  }

  const { spaces } = parent

  if (spaces && spaces.value && spaces.value[index.value]) {
    const { left, right } = spaces.value[index.value]
    return {
      paddingLeft: left ? `${left}px` : null,
      paddingRight: right ? `${right}px` : null
    }
  }
  return {}
})
```
## render
- 添加上属性控制的样式
- 把插槽渲染
```
return () => {
  const { tag, span, offset } = props

  return (
    <tag
      style={style.value}
      class={[
        bem.b(),
        bem.m(`${span}`),
        offset && bem.m(`offset-${offset}`)
      ]}
    >
      {slots.default?.()}
    </tag>
  )
}
```
## style
```
.w-col {
  display: block;
  box-sizing: border-box;
  min-height: 1px;
}

.generate-col(24);
.generate-col(@n, @i: 1) when (@i =< @n) {
  .w-col--@{i} {
    flex: 0 0 @i * (100% / 24);
    max-width: @i * (100% / 24);
  }

  .w-col--offset-@{i} {
    margin-left: @i * (100% / 24);
  }

  .generate-col(@n, (@i + 1));
}
```

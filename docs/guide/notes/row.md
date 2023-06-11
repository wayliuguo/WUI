# Row

## props
```
export type RowAlign = 'top' | 'center' | 'bottom'

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'

export const rowProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  // 是否自动换行，默认 true
  wrap: truthProp,
  // 交叉轴对齐方式
  align: String as PropType<RowAlign>,
  // 列间距
  gutter: makeNumericProp(0),
  // 主轴对齐方式
  justify: String as PropType<RowJustify>
}

export type RowProps = ExtractPropTypes<typeof rowProps>
```
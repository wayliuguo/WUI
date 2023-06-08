# 工具函数

## creat.ts
用于实现BEM规范。

### 什么是BEM规范？
即Block(块) Element(元素) Modifier(修饰器)，用来规范css命名。

命名约定模式如下：
```
.block{}
.block__element{}
.block__element--modifier{}
```
对于块，若多个单词，则用 - 连接，如search-form

具体例子：
- 块即模块，如搜索表单 search-form,可以看做一个块
- 这个块内的按钮button、输入框input，为元素
- 元素可以由多种状态，如居中按钮，即修饰

```
<form class="search-form">
	<input class="search-form__input" />
	<button class="search-form__button"></button>
	<button class="search-form__button__primary"></button>
</form>
```

### css样式顺序
1. 定位属性：positon display float left top right bottom overflow clear z-index
2. 自身属性：width height margin padding border background
3. 文字样式：font-family font-size font-style font-weight font-varient
4. 文本属性：text-align vertical-align text-wrap text-transform text-indent text-decoration letter-spacing word-spacing white-space text-overflow
5. css3中新增属性：content box-shadow border-radius transform

### _bem
此函数用于根据入参进行拼接得到类名。
- prefixName: 前缀
- blockSuffix: B
- element: E
- modifier: M

```
function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string | number
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}
```

### createBEM
- 通过_bem生成对应功能的函数
```
function createBEM(prefixName: string) {
  const b = (blockSuffix = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element = '') => (element ? _bem(prefixName, '', element, '') : '')
  const m = (modifier = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (blockSuffix = '', element = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
  const bm = (blockSuffix = '', modifier = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
  const em = (element = '', modifier: string | number = '') =>
    element && modifier ? _bem(prefixName, '', element, modifier) : ''
  const bem = (blockSuffix = '', element = '', modifier = '') =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : ''
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}
```

### createNamespace
- 生成指导前缀的函数并导出。
```
export function createNamespace(name: string) {
  const prefixName = `w-${name}`
  return createBEM(prefixName)
}
```

## props.ts

### numericProp
- 把 pros 指定为 Number | String
```
export const numericProp = [Number, String]
```
### makeStringProp
- 指定属于该泛型的类型，并提供默认值
- Vue3 中属性发生了变化，需要使用`unknown`类型再转为`PropType`类型来实现转换
```
export const makeStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal
})
```

### truthProp
- 指定该`prop` 为 `Boolean`
- 默认值：true
```
export const truthProp = {
  type: Boolean,
  default: true as const
}
```

## format.ts

### addUnit
- 判断是否有值
- 如果值是数字或数字的字符串则拼接`px`，否则直接使用
```
export function addUnit(value?: Numeric): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value)
  }
  return undefined
}
```

### getSizeStyle
```
export function getSizeStyle(
  originSize?: Numeric | Numeric[]
): CSSProperties | undefined {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1])
      }
    }
    const size = addUnit(originSize)
    return {
      width: size,
      height: size
    }
  }
}
```

## validate.ts

### isDef
- 指定 val 属于泛型T类型且 `NonNullable`，返回其是否非 `undefined` | `null`
```
export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null
```
### isNumeric
- 判断传入值是否是数字或者数字字符串
```
export const isNumeric = (val: Numeric): val is string =>
  typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
```

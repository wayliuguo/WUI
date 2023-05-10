# Loading 加载
## 介绍
按钮用于触发一个操作，如提交表单。
# 代码演示

## 按钮类型
按钮支持 `default、primary、success、warning、danger` 五种类型，默认为 default。
<w-button type="primary">主要按钮</w-button>
<w-button type="success">成功按钮</w-button>
<w-button type="default">默认按钮</w-button>
<w-button type="warning">警告按钮</w-button>
<w-button type="danger">危险按钮</w-button>


```vue
<w-button type="primary">主要按钮</w-button>
<w-button type="success">成功按钮</w-button>
<w-button type="default">默认按钮</w-button>
<w-button type="warning">警告按钮</w-button>
<w-button type="danger">危险按钮</w-button>
```
## 朴素按钮
通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
<w-button plain type="primary">朴素按钮</w-button>
<w-button plain type="success">朴素按钮</w-button>

```vue
<w-button plain type="primary">朴素按钮</w-button>
<w-button plain type="success">朴素按钮</w-button>
```
## 细边框
设置 `hairline` 属性可以展示 0.5px 的细边框。
<w-button plain hairline type="primary">细边框按钮</w-button>
<w-button plain hairline type="success">细边框按钮</w-button>

```vue
<w-button plain hairline type="primary">细边框按钮</w-button>
<w-button plain hairline type="success">细边框按钮</w-button>
```
## 禁用状态
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。
<w-button disabled type="primary">禁用状态</w-button>
<w-button disabled type="success">禁用状态</w-button>
```vue
<w-button disabled type="primary">禁用状态</w-button>
<w-button disabled type="success">禁用状态</w-button>
```
## 加载状态
通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 loading-text 设置加载状态下的文字。
<w-button loading type="primary" />
<w-button loading type="primary" loading-type="spinner" />
<w-button loading type="success" loading-text="加载中..." />

```vue
<w-button loading type="primary" />
<w-button loading type="primary" loading-type="spinner" />
<w-button loading type="success" loading-text="加载中..." />
```

## 按钮形状
通过 `square` 设置方形按钮，通过 round 设置圆形按钮。
<w-button square type="primary">方形按钮</w-button>
<w-button round type="success">圆形按钮</w-button>

```vue
<w-button square type="primary">方形按钮</w-button>
<w-button round type="success">圆形按钮</w-button>
```

## 图标按钮
通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。
<w-button icon="plus" type="primary" />
<w-button icon="plus" type="primary">按钮</w-button>
<w-button
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="primary"
>
  按钮
</w-button>

```vue
<w-button icon="plus" type="primary" />
<w-button icon="plus" type="primary">按钮</w-button>
<w-button
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="primary"
>
  按钮
</w-button>
```

## 按钮尺寸
支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。
<w-button type="primary" size="large">大号按钮</w-button>
<w-button type="primary" size="normal">普通按钮</w-button>
<w-button type="primary" size="small">小型按钮</w-button>
<w-button type="primary" size="mini">迷你按钮</w-button>

```vue
<w-button type="primary" size="large">大号按钮</w-button>
<w-button type="primary" size="normal">普通按钮</w-button>
<w-button type="primary" size="small">小型按钮</w-button>
<w-button type="primary" size="mini">迷你按钮</w-button>
```
## 块级元素
按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。
<w-button type="primary" block>块级元素</w-button>
```vue
<w-button type="primary" block>块级元素</w-button>
```
## 自定义颜色
通过 `color` 属性可以自定义按钮的颜色。
<w-button color="#7232dd">单色按钮</w-button>
<w-button color="#7232dd" plain>单色按钮</w-button>
<w-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</w-button>

```vue
<w-button color="#7232dd">单色按钮</w-button>
<w-button color="#7232dd" plain>单色按钮</w-button>
<w-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</w-button>
```


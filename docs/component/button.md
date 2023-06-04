# Button 按钮
# 介绍
按钮用于触发一个操作，如提交表单。
# 代码演示

## 按钮类型
按钮支持 `default、primary、success、warning、danger` 五种类型，默认为 default。
<w-button class="button" type="primary">主要按钮</w-button>
<w-button class="button" type="success">成功按钮</w-button>
<w-button class="button" type="default">默认按钮</w-button>
<w-button class="button" type="warning">警告按钮</w-button>
<w-button class="button" type="danger">危险按钮</w-button>


```vue
<w-button type="primary">主要按钮</w-button>
<w-button type="success">成功按钮</w-button>
<w-button type="default">默认按钮</w-button>
<w-button type="warning">警告按钮</w-button>
<w-button type="danger">危险按钮</w-button>
```
## 朴素按钮
通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
<w-button class="button" plain type="primary">朴素按钮</w-button>
<w-button class="button" plain type="success">朴素按钮</w-button>

```vue
<w-button plain type="primary">朴素按钮</w-button>
<w-button plain type="success">朴素按钮</w-button>
```
## 细边框
设置 `hairline` 属性可以展示 0.5px 的细边框。
<w-button class="button" plain hairline type="primary">细边框按钮</w-button>
<w-button class="button" plain hairline type="success">细边框按钮</w-button>

```vue
<w-button plain hairline type="primary">细边框按钮</w-button>
<w-button plain hairline type="success">细边框按钮</w-button>
```
## 禁用状态
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。
<w-button class="button" disabled type="primary">禁用状态</w-button>
<w-button class="button" disabled type="success">禁用状态</w-button>
```vue
<w-button disabled type="primary">禁用状态</w-button>
<w-button disabled type="success">禁用状态</w-button>
```
## 加载状态
通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 loading-text 设置加载状态下的文字。
<w-button class="button" loading type="primary" />
<w-button class="button" loading type="primary" loading-type="spinner" />
<w-button class="button" loading type="success" loading-text="加载中..." />

```vue
<w-button loading type="primary" />
<w-button loading type="primary" loading-type="spinner" />
<w-button loading type="success" loading-text="加载中..." />
```

## 按钮形状
通过 `square` 设置方形按钮，通过 round 设置圆形按钮。
<w-button class="button" square type="primary">方形按钮</w-button>
<w-button class="button" round type="success">圆形按钮</w-button>

```vue
<w-button square type="primary">方形按钮</w-button>
<w-button round type="success">圆形按钮</w-button>
```

## 图标按钮
通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。
<w-button class="button" icon="plus" type="primary" />
<w-button class="button" icon="plus" type="primary">按钮</w-button>
<w-button class="button"
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="primary"
  plain
>
  按钮
</w-button>

```vue
<w-button icon="plus" type="primary" />
<w-button icon="plus" type="primary">按钮</w-button>
<w-button
  icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
  type="primary"
  plain
>
  按钮
</w-button>
```

## 按钮尺寸
支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。
<w-button class="button" type="primary" size="large">大号按钮</w-button>
<w-button class="button" type="primary" size="normal">普通按钮</w-button>
<w-button class="button" type="primary" size="small">小型按钮</w-button>
<w-button class="button" type="primary" size="mini">迷你按钮</w-button>

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
<w-button class="button" color="#7232dd">单色按钮</w-button>
<w-button class="button" color="#7232dd" plain>单色按钮</w-button>
<w-button class="button" color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</w-button>

```vue
<w-button color="#7232dd">单色按钮</w-button>
<w-button color="#7232dd" plain>单色按钮</w-button>
<w-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</w-button>
```
# API
# Props
| 参数          | 说明                                                  | 类型               | 默认值     |
| ------------- | ----------------------------------------------------- | ------------------ | ---------- |
| type          | 类型，可选值为 `primary` `success` `warning` `danger` | _string_           | `default`  |
| size          | 尺寸，可选值为 `large` `small` `mini`                 | _string_           | `normal`   |
| text          | 按钮文字                                              | _string_           | -          |
| color         | 按钮颜色，支持传入 `linear-gradient` 渐变色           | _string_           | -          |
| icon          | 左侧图标名称或图片链接，等同于 Icon 组件的name 属性   | _string_           | -          |
| icon-prefix   | 图标类名前缀，等同于 Icon 组件的 class-prefix 属性    | _string_           | `w-icon`   |
| icon-position | 图标展示位置，可选值为 `right`                        | _string_           | `left`     |
| tag           | 按钮根节点的 HTML 标签                                | _string_           | `button`   |
| native-type   | 原生 button 标签的 type 属性                          | _string_           | `button`   |
| block         | 是否为块级元素                                        | _boolean_          | `false`    |
| plain         | 是否为朴素按钮                                        | _boolean_          | `false`    |
| square        | 是否为方形按钮                                        | _boolean_          | `false`    |
| round         | 是否为圆形按钮                                        | _boolean_          | `false`    |
| disabled      | 是否禁用按钮                                          | _boolean_          | `false`    |
| hairline      | 是否使用 0.5px 边框                                   | _boolean_          | `false`    |
| loading       | 是否显示为加载状态                                    | _boolean_          | `false`    |
| loading-text  | 加载状态提示文字                                      | _string_           | -          |
| loading-type  | [加载图标类型](loading.html)，可选值为 `spinner`      | _string_           | `circular` |
| loading-size  | 加载图标大小，默认单位为 `px`                         | _number \| string_ | `20px`     |

## Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: MouseEvent_ |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

## Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| icon    | 自定义图标     |
| loading | 自定义加载图标 |

# 主题定制

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                            | 默认值                      | 描述 |
| ------------------------------- | --------------------------- | ---- |
| --w-button-mini-height          | _24px_                      | -    |
| --w-button-mini-padding         | _0 var(--w-padding-base)_   | -    |
| --w-button-mini-font-size       | _var(--w-font-size-xs)_     | -    |
| --w-button-small-height         | _32px_                      | -    |
| --w-button-small-padding        | _0 var(--w-padding-xs)_     | -    |
| --w-button-small-font-size      | _var(--w-font-size-sm)_     | -    |
| --w-button-normal-font-size     | _var(--w-font-size-md)_     | -    |
| --w-button-normal-padding       | _0 15px_                    | -    |
| --w-button-large-height         | _50px_                      | -    |
| --w-button-default-height       | _44px_                      | -    |
| --w-button-default-line-height  | _1.2_                       | -    |
| --w-button-default-font-size    | _var(--w-font-size-lg)_     | -    |
| --w-button-default-color        | _var(--w-text-color)_       | -    |
| --w-button-default-background   | _var(--w-background-2)_     | -    |
| --w-button-default-border-color | _var(--w-gray-4)_           | -    |
| --w-button-primary-color        | _var(--w-white)_            | -    |
| --w-button-primary-background   | _var(--w-primary-color)_    | -    |
| --w-button-primary-border-color | _var(--w-primary-color)_    | -    |
| --w-button-success-color        | _var(--w-white)_            | -    |
| --w-button-success-background   | _var(--w-success-color)_    | -    |
| --w-button-success-border-color | _var(--w-success-color)_    | -    |
| --w-button-danger-color         | _var(--w-white)_            | -    |
| --w-button-danger-background    | _var(--w-danger-color)_     | -    |
| --w-button-danger-border-color  | _var(--w-danger-color)_     | -    |
| --w-button-warning-color        | _var(--w-white)_            | -    |
| --w-button-warning-background   | _var(--w-orange)_           | -    |
| --w-button-warning-border-color | _var(--w-orange)_           | -    |
| --w-button-border-width         | _var(--w-border-width)_     | -    |
| --w-button-radius               | _var(--w-radius-md)_        | -    |
| --w-button-round-radius         | _var(--w-radius-max)_       | -    |
| --w-button-plain-background     | _var(--w-white)_            | -    |
| --w-button-disabled-opacity     | _var(--w-disabled-opacity)_ | -    |
| --w-button-icon-size            | _1.2em_                     | -    |
| --w-button-loading-icon-size    | _20px_                      | -    |

<style scoped lang="less">
.button {
  margin: 5px 10px !important;
  &>div {
    border: 1px solid red;
  }
}
</style>
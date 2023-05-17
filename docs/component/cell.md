# Cell 单元格
## 介绍
单元格为列表中的单个展示项。
# 代码演示

## 基础用法
`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。
<div class="mobile">
  <w-cell-group>
    <w-cell title="单元格" value="内容" />
    <w-cell title="单元格" value="内容" label="描述信息" />
  </w-cell-group>
</div>

```vue
<w-cell-group>
  <w-cell title="单元格" value="内容" />
  <w-cell title="单元格" value="内容" label="描述信息" />
</w-cell-group>
```
## 卡片风格
通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格。
<div class="mobile">
  <w-cell-group inset>
    <w-cell title="单元格" value="内容" />
    <w-cell title="单元格" value="内容" label="描述信息" />
  </w-cell-group>
</div>

```vue
<w-cell-group inset>
  <w-cell title="单元格" value="内容" />
  <w-cell title="单元格" value="内容" label="描述信息" />
</w-cell-group>
```

## 单元格大小
通过 `size` 属性可以控制单元格的大小。
<div class="mobile">
  <w-cell title="单元格" value="内容" size="large" />
  <w-cell title="单元格" value="内容" size="large" label="描述信息" />
</div>

```vue
<w-cell title="单元格" value="内容" size="large" />
<w-cell title="单元格" value="内容" size="large" label="描述信息" />
```

## 展示图标
通过 `icon` 属性在标题左侧展示图标。
<div class="mobile">
  <w-cell title="单元格" icon="location-o" />
</div>

```vue
<w-cell title="单元格" icon="location-o" value="内容" />
```

## 只设置 value
只设置 `value` 时，内容会靠左对齐。
<div class="mobile">
  <w-cell value="内容" />
</div>

```vue
<w-cell value="内容" />
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
  icon="https://fastly.jsdelivr.net/npm/@wt/assets/user-active.png"
  type="primary"
  plain
>
  按钮
</w-button>

```vue
<w-button icon="plus" type="primary" />
<w-button icon="plus" type="primary">按钮</w-button>
<w-button
  icon="https://fastly.jsdelivr.net/npm/@wt/assets/user-active.png"
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
## Props
| 参数          | 说明                                                  | 类型               | 默认值     |
| ------------- | ----------------------------------------------------- | ------------------ | ---------- |
| type          | 类型，可选值为 `primary` `success` `warning` `danger` | _string_           | `default`  |
| size          | 尺寸，可选值为 `large` `small` `mini`                 | _string_           | `normal`   |
| text          | 按钮文字                                              | _string_           | -          |
| color         | 按钮颜色，支持传入 `linear-gradient` 渐变色           | _string_           | -          |
| icon          | 左侧图标名称或图片链接，等同于 Icon 组件的name 属性   | _string_           | -          |
| icon-prefix   | 图标类名前缀，等同于 Icon 组件的 class-prefix 属性    | _string_           | `w-icon` |
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

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: MouseEvent_ |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 按钮内容       |
| icon    | 自定义图标     |
| loading | 自定义加载图标 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonNativeType,
  ButtonIconPosition,
} from 'wt';
```
# 主题定制

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                              | 默认值                        | 描述 |
| --------------------------------- | ----------------------------- | ---- |
| --w-button-mini-height          | _24px_                        | -    |
| --w-button-mini-padding         | _0 var(--w-padding-base)_   | -    |
| --w-button-mini-font-size       | _var(--w-font-size-xs)_     | -    |
| --w-button-small-height         | _32px_                        | -    |
| --w-button-small-padding        | _0 var(--w-padding-xs)_     | -    |
| --w-button-small-font-size      | _var(--w-font-size-sm)_     | -    |
| --w-button-normal-font-size     | _var(--w-font-size-md)_     | -    |
| --w-button-normal-padding       | _0 15px_                      | -    |
| --w-button-large-height         | _50px_                        | -    |
| --w-button-default-height       | _44px_                        | -    |
| --w-button-default-line-height  | _1.2_                         | -    |
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
| --w-button-icon-size            | _1.2em_                       | -    |
| --w-button-loading-icon-size    | _20px_                        | -    |

<style>
.mobile {
  width: 375px;
  padding: 10px;
  background-color: #f7f8fa;
}
</style>
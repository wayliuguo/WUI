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

## 展示箭头
设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。
<div class="mobile">
  <w-cell title="单元格" is-link />
  <w-cell title="单元格" is-link value="内容" />
  <w-cell title="单元格" is-link arrow-direction="down" value="内容" />
</div>

```vue
<w-cell title="单元格" is-link />
<w-cell title="单元格" is-link value="内容" />
<w-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

## 分组标题
通过 `CellGroup` 的 `title` 属性可以指定分组标题。
<div class="mobile">
  <w-cell-group title="分组1">
    <w-cell title="单元格" value="内容" />
  </w-cell-group>
  <w-cell-group title="分组2">
    <w-cell title="单元格" value="内容" />
  </w-cell-group>
</div>

```vue
<w-cell-group title="分组1">
  <w-cell title="单元格" value="内容" />
</w-cell-group>
<w-cell-group title="分组2">
  <w-cell title="单元格" value="内容" />
</w-cell-group>
```

## 使用插槽
如以上用法不能满足你的需求，可以使用插槽来自定义内容。
<div class="mobile">
  <w-cell value="内容" is-link>
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <span class="custom-title">单元格</span>
      <w-tag type="primary">标签</w-tag>
    </template>
  </w-cell>

  <w-cell title="单元格" icon="shop-o">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <w-icon name="search" class="search-icon" />
    </template>
  </w-cell>
</div>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>


```vue
<div class="mobile">
  <w-cell value="内容" is-link>
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <span class="custom-title">单元格</span>
      <w-tag type="primary">标签</w-tag>
    </template>
  </w-cell>

  <w-cell title="单元格" icon="shop-o">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <w-icon name="search" class="search-icon" />
    </template>
  </w-cell>
</div>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

## 垂直居中
通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。
<div class="mobile">
  <w-cell center title="单元格" value="内容" label="描述信息" />
</div>


```vue
<w-cell center title="单元格" value="内容" label="描述信息" />
```

# API

## CellGroup Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| title  | 分组标题               | _string_  | `-`     |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| border | 是否显示外边框         | _boolean_ | `true`  |

## Cell Props

| 参数            | 说明                                                                  | 类型                        | 默认值   |
| --------------- | --------------------------------------------------------------------- | --------------------------- | -------- |
| title           | 左侧标题                                                              | _number \| string_          | -        |
| value           | 右侧内容                                                              | _number \| string_          | -        |
| label           | 标题下方的描述信息                                                    | _string_                    | -        |
| size            | 单元格大小，可选值为 `large`                                          | _string_                    | -        |
| icon            | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](icon.html)     | _string_                    | -        |
| icon-prefix     | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](icon.html#props) | _string_                    | `w-icon` |
| tag             | 根节点对应的 HTML 标签名                                              | _string_                    | `div`    |
| url             | 点击后跳转的链接地址                                                  | _string_                    | -        |
| border          | 是否显示内边框                                                        | _boolean_                   | `true`   |
| replace         | 是否在跳转时替换当前页面历史                                          | _boolean_                   | `false`  |
| clickable       | 是否开启点击反馈                                                      | _boolean_                   | `null`   |
| is-link         | 是否展示右侧箭头并开启点击反馈                                        | _boolean_                   | `false`  |
| required        | 是否显示表单必填星号                                                  | _boolean_                   | `false`  |
| center          | 是否使内容垂直居中                                                    | _boolean_                   | `false`  |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down`                                 | _string_                    | `right`  |
| title-style     | 左侧标题额外样式                                                      | _string \| Array \| object_ | -        |
| title-class     | 左侧标题额外类名                                                      | _string \| Array \| object_ | -        |
| value-class     | 右侧内容额外类名                                                      | _string \| Array \| object_ | -        |
| label-class     | 描述信息额外类名                                                      | _string \| Array \| object_ | -        |

## Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: MouseEvent_ |

## CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

## Cell Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| title      | 自定义左侧标题               |
| value      | 自定义右侧内容               |
| label      | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| right-icon | 自定义右侧图标               |
| extra      | 自定义单元格最右侧的额外内容 |

## 类型定义

组件导出以下类型定义：

```ts
import type {
  CellSize,
  CellProps,
  CellGroupProps,
  CellArrowDirection,
} from 'wt';
```

# 主题定制

## 样式变量

| 名称                               | 默认值                                                                            | 描述 |
| ---------------------------------- | --------------------------------------------------------------------------------- | ---- |
| --w-cell-font-size                 | _var(--w-font-size-md)_                                                           | -    |
| --w-cell-line-height               | _24px_                                                                            | -    |
| --w-cell-vertical-padding          | _10px_                                                                            | -    |
| --w-cell-horizontal-padding        | _var(--w-padding-md)_                                                             | -    |
| --w-cell-text-color                | _var(--w-text-color)_                                                             | -    |
| --w-cell-background                | _var(--w-background-2)_                                                           | -    |
| --w-cell-border-color              | _var(--w-border-color)_                                                           | -    |
| --w-cell-active-color              | _var(--w-active-color)_                                                           | -    |
| --w-cell-required-color            | _var(--w-danger-color)_                                                           | -    |
| --w-cell-label-color               | _var(--w-text-color-2)_                                                           | -    |
| --w-cell-label-font-size           | _var(--w-font-size-sm)_                                                           | -    |
| --w-cell-label-line-height         | _var(--w-line-height-sm)_                                                         | -    |
| --w-cell-label-margin-top          | _var(--w-padding-base)_                                                           | -    |
| --w-cell-value-color               | _var(--w-text-color-2)_                                                           | -    |
| --w-cell-icon-size                 | _16px_                                                                            | -    |
| --w-cell-right-icon-color          | _var(--w-gray-6)_                                                                 | -    |
| --w-cell-large-vertical-padding    | _var(--w-padding-sm)_                                                             | -    |
| --w-cell-large-title-font-size     | _var(--w-font-size-lg)_                                                           | -    |
| --w-cell-large-label-font-size     | _var(--w-font-size-md)_                                                           | -    |
| --w-cell-group-background          | _var(--w-background-2)_                                                           | -    |
| --w-cell-group-title-color         | _var(--w-text-color-2)_                                                           | -    |
| --w-cell-group-title-padding       | _var(--w-padding-md) var(--w-padding-md) var(--w-padding-xs)_                     | -    |
| --w-cell-group-title-font-size     | _var(--w-font-size-md)_                                                           | -    |
| --w-cell-group-title-line-height   | _16px_                                                                            | -    |
| --w-cell-group-inset-padding       | _0 var(--w-padding-md)_                                                           | -    |
| --w-cell-group-inset-radius        | _var(--w-radius-lg)_                                                              | -    |
| --w-cell-group-inset-title-padding | _var(--w-padding-md) var(--w-padding-md) var(--w-padding-xs) var(--w-padding-xl)_ | -    |

<style>
.mobile {
  width: 375px;
  padding: 10px;
  background-color: #f7f8fa;
}
</style>
# Badeg 徽标
## 介绍
在右上角展示徽标数字或小红点。
# 代码演示

## 基础用法
设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 dot 来显示小红点。
<w-badge class='badge' :content="5">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10">
  <div class="child" />
</w-badge>
<w-badge class='badge' content="Hot">
  <div class="child" />
</w-badge>
<w-badge class='badge' dot>
  <div class="child" />
</w-badge>

```vue
<w-badge class='badge' :content="5">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10">
  <div class="child" />
</w-badge>
<w-badge class='badge' content="Hot">
  <div class="child" />
</w-badge>
<w-badge class='badge' dot>
  <div class="child" />
</w-badge>
```

```css
<style>
  .badge {
    margin: 5px 10px;
  }
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

## 最大值
通过 `color` 属性来设置徽标的颜色。
<w-badge class='badge' :content="5" color="#1989fa">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10" color="#1989fa">
  <div class="child" />
</w-badge>
<w-badge class='badge' dot color="#1989fa">
  <div class="child" />
</w-badge>

```vue
<w-badge class='badge' :content="5" color="#1989fa">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10" color="#1989fa">
  <div class="child" />
</w-badge>
<w-badge class='badge' dot color="#1989fa">
  <div class="child" />
</w-badge>
```
## 自定义徽标内容
通过 `content` 插槽可以自定义徽标的内容，比如插入一个图标。
<w-badge class='badge'>
  <div class="child" />
  <template #content>
    <w-icon name="success" class="badge-icon" />
  </template>
</w-badge>
<w-badge class='badge'>
  <div class="child" />
  <template #content>
    <w-icon name="cross" class="badge-icon" />
  </template>
</w-badge>
<w-badge class='badge'>
  <div class="child" />
  <template #content>
    <w-icon name="down" class="badge-icon" />
  </template>
</w-badge>

```vue
<w-badge class='badge'>
  <div class="child" />
  <template #content>
    <w-icon name="success" class="badge-icon" />
  </template>
</w-badge>
<w-badge class='badge'>
  <div class="child" />
  <template #content>
    <w-icon name="cross" class="badge-icon" />
  </template>
</w-badge>
<w-badge class='badge'>
  <div class="child" />
  <template #content>
    <w-icon name="down" class="badge-icon" />
  </template>
</w-badge>
```
## 自定义徽标位置
通过 `position` 属性来设置徽标的位置。
<w-badge class='badge' :content="10" position="top-left">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10" position="bottom-left">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10" position="bottom-right">
  <div class="child" />
</w-badge>

```vue
<w-badge class='badge' :content="10" position="top-left">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10" position="bottom-left">
  <div class="child" />
</w-badge>
<w-badge class='badge' :content="10" position="bottom-right">
  <div class="child" />
</w-badge>
```
## 独立展示
当 Badge 没有子元素时，会作为一个独立的元素进行展示。
<w-badge class='badge' :content="20" />
<w-badge class='badge' :content="200" max="99" />

```vue
<w-badge class='badge' :content="20" />
<w-badge class='badge' :content="200" max="99" />
```

# API

## Props

| 参数      | 说明                                                                                | 类型                                   | 默认值      |
| --------- | ----------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| content   | 徽标内容                                                                            | _number \| string_                     | -           |
| color     | 徽标背景颜色                                                                        | _string_                               | `#ee0a24`   |
| dot       | 是否展示为小红点                                                                    | _boolean_                              | `false`     |
| max       | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效                        | _number \| string_                     | -           |
| offset    | 设置徽标的偏移量，数组的两项分别对应水平向右和垂直向下方向的偏移量，默认单位为 `px` | _[number \| string, number \| string]_ | -           |
| show-zero | 当 content 为数字 0 或字符串 '0' 时，是否展示徽标                                   | _boolean_                              | `true`      |
| position  | 徽标位置，可选值为 `top-left` `bottom-left` `bottom-right`                          | _string_                               | `top-right` |

## Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 徽标包裹的子元素 |
| content | 自定义徽标内容   |


# 主题定制

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                   | 默认值                                                  | 描述 |
| ---------------------- | ------------------------------------------------------- | ---- |
| --w-badge-size         | _16px_                                                  | -    |
| --w-badge-color        | _var(--w-white)_                                        | -    |
| --w-badge-padding      | _0 3px_                                                 | -    |
| --w-badge-font-size    | _var(--w-font-size-sm)_                                 | -    |
| --w-badge-font-weight  | _var(--w-font-bold)_                                    | -    |
| --w-badge-border-width | _var(--w-border-width)_                                 | -    |
| --w-badge-background   | _var(--w-danger-color)_                                 | -    |
| --w-badge-dot-color    | _var(--w-danger-color)_                                 | -    |
| --w-badge-dot-size     | _8px_                                                   | -    |
| --w-badge-font         | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | -    |


<style>
  .badge {
    margin: 5px 10px;
  }
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
  .badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
  }
</style>

# Layout 布局
## 介绍
Layout 提供了 `w-row` 和 `w-col` 两个组件来进行行列布局。
# 代码演示

## 基础用法
Layout 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 `span` 相同。
<div class='layout'>
  <w-row>
    <w-col span="8">span: 8</w-col>
    <w-col span="8">span: 8</w-col>
    <w-col span="8">span: 8</w-col>
  </w-row>

  <w-row>
    <w-col span="4">span: 4</w-col>
    <w-col span="10" offset="4">offset: 4, span: 10</w-col>
  </w-row>

  <w-row>
    <w-col offset="12" span="12">offset: 12, span: 12</w-col>
  </w-row>
</div>



```vue
<w-row>
    <w-col span="8">span: 8</w-col>
    <w-col span="8">span: 8</w-col>
    <w-col span="8">span: 8</w-col>
  </w-row>

  <w-row>
    <w-col span="4">span: 4</w-col>
    <w-col span="10" offset="4">offset: 4, span: 10</w-col>
  </w-row>

  <w-row>
    <w-col offset="12" span="12">offset: 12, span: 12</w-col>
  </w-row>
```
## 设置列元素间距
通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。
<div class='layout'>
  <w-row gutter="20">
    <w-col span="8">span: 8</w-col>
    <w-col span="8">span: 8</w-col>
    <w-col span="8">span: 8</w-col>
  </w-row>
</div>

```vue
<w-row gutter="20">
  <w-col span="8">span: 8</w-col>
  <w-col span="8">span: 8</w-col>
  <w-col span="8">span: 8</w-col>
</w-row>
```
## 对齐方式
通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 `flex` 布局中的 `justify-content` 属性。
<div class='layout'>
  <!-- 居中 -->
  <w-row justify="center">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

  <!-- 右对齐 -->
  <w-row justify="end">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

  <!-- 两端对齐 -->
  <w-row justify="space-between">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

  <!-- 每个元素的两侧间隔相等 -->
  <w-row justify="space-around">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

</div>

```vue
<!-- 居中 -->
  <w-row justify="center">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

  <!-- 右对齐 -->
  <w-row justify="end">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

  <!-- 两端对齐 -->
  <w-row justify="space-between">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>

  <!-- 每个元素的两侧间隔相等 -->
  <w-row justify="space-around">
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
    <w-col span="6">span: 6</w-col>
  </w-row>
```

# API

## Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _number \| string_ | - |
| tag | 自定义元素标签 | _string_ | `div` |
| justify | 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | 交叉轴对齐方式，可选值为 `center` `bottom` | _string_ | `top` |
| wrap | 是否自动换行 | _boolean_ | `true` |

## Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number \| string_ | -      |
| offset | 列元素偏移距离 | _number \| string_ | -      |
| tag    | 自定义元素标签 | _string_           | `div`  |

## Row Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

## Col Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

<style scoped lang="less">
.layout {
  width: 375px;

  .w-col:nth-child(odd) {
    background-color: #39a9ed;
  }

  .w-col:nth-child(even) {
    background-color: #66c6f2;
  }

  .w-col {
    margin-bottom: 10px;
    color: var(--w-white);
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
  }
}
</style>
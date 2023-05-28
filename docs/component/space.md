# Space 间距

## 介绍

设置元素之间的间距，从 版本开始支持。

# 代码演示

## 基础用法

Space 组件会在各个子组件之间设置一定的间距，默认间距为 `8px`。

<div class='space-demo'>
  <w-space>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
</w-space>
</div>

```vue
<w-space>
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
</w-space>
```

## 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

<div class='space-demo'>
  <w-space direction="vertical" fill>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
</w-space>
</div>

```vue
<w-space direction="vertical" fill>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
</w-space>
```

## 自定义间距

通过调整 `size` 的值来控制间距的大小。传入 `number` 类型时，会默认使用 `px` 单位；也可以传入 `string` 类型，比如 `2rem` 或 `5vw` 等带有单位的值。

<div class='space-demo'>
  <w-space :size="20">
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
    <w-button type="primary">按钮</w-button>
  </w-space>
  <w-space size="2rem">
      <w-button type="primary">按钮</w-button>
      <w-button type="primary">按钮</w-button>
      <w-button type="primary">按钮</w-button>
      <w-button type="primary">按钮</w-button>
  </w-space>
</div>

```vue
<!-- 20px -->
<w-space :size="20">
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
</w-space>

<!-- 2rem -->
<w-space size="2rem">
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
  <w-button type="primary">按钮</w-button>
</w-space>
```

## 对齐方式

通过调整 `align` 的值来设置子元素的对齐方式, 可选值为 `start`, `center` ,`end` ,`baseline`，在水平模式下的默认值为 `center`。

<w-radio-group
  v-model="align"
  direction="horizontal"
  style="margin-bottom: 16px"
>
  <w-radio name="start">start</w-radio>
  <w-radio name="center">center</w-radio>
  <w-radio name="end">end</w-radio>
  <w-radio name="baseline">baseline</w-radio>
</w-radio-group>

<w-space :align="align" style="padding: 16px; background: #f3f2f5">
  <w-button type="primary">{{ align }}</w-button>
  <div style="padding: 40px 20px; background: #fff">Block</div>
</w-space>

```vue
<w-radio-group
  v-model="align"
  direction="horizontal"
  style="margin-bottom: 16px"
>
  <w-radio name="start">start</w-radio>
  <w-radio name="center">center</w-radio>
  <w-radio name="end">end</w-radio>
  <w-radio name="baseline">baseline</w-radio>
</w-radio-group>

<w-space :align="align" style="padding: 16px; background: #f3f2f5">
  <w-button type="primary">{{ align }}</w-button>
  <div style="padding: 40px 20px; background: #fff">Block</div>
</w-space>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const align = ref('center');
    return { align };
  },
};
```

## 自动换行

在水平模式下, 通过 `wrap` 属性来控制子元素是否自动换行。

<div class='space-demo'>
  <w-space wrap>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
    <w-button type="primary" block>按钮</w-button>
  </w-space>
</div>

```vue
<w-space wrap>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
  <w-button type="primary" block>按钮</w-button>
</w-space>
```

# API

## Props

| 参数      | 说明                                                                             | 类型                                       | 默认值       |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------------ | ------------ |
| direction | 间距方向                                                                         | _vertical \| horizontal_                   | `horizontal` |
| size      | 间距大小，如 `20px` `2em`，默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | _number \| string \| number[] \| string[]_ | `8px`        |
| align     | 设置子元素的对齐方式                                                             | _start \| end \| center \| baseline_       | -            |
| wrap      | 是否自动换行，仅适用于水平方向排列                                               | _boolean_                                  | `false`      |
| fill      | 是否让 Space 变为一个块级元素，填充整个父元素                                    | _boolean_                                  | `false`      |

## Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 间距组件内容 |

<script setup>
  import { ref } from 'vue'
  const align = ref('center')
</script>

<style lang='less' scoped>
  .space-demo {
    max-width: 375px;
    .w-space {
      margin-top: 10px;
    }
    .w-button {
      width: 100%;
    }
  }
</style>

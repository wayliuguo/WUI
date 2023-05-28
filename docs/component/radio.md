# Radio 单选框

## 介绍

在一组备选项中进行单选。

# 代码演示

## 基础用法

通过 `v-model` 绑定值当前选中项的 name。
<div class='radio-demo'>
  <w-radio-group v-model="radio1">
    <w-radio name="1">单选框 1</w-radio>
    <w-radio name="2">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1">单选框 1</w-radio>
  <w-radio name="2">单选框 2</w-radio>
</w-radio-group>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref('1')
    return { checked }
  }
}
```

## 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

<div class='radio-demo'>
  <w-radio-group v-model="radio2" direction="horizontal">
    <w-radio name="1">单选框 1</w-radio>
    <w-radio name="2">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked" direction="horizontal">
  <w-radio name="1">单选框 1</w-radio>
  <w-radio name="2">单选框 2</w-radio>
</w-radio-group>
```

## 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

<div class='radio-demo'>
  <w-radio-group v-model="radio3" disabled>
    <w-radio name="1">单选框 1</w-radio>
    <w-radio name="2">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked" disabled>
  <w-radio name="1">单选框 1</w-radio>
  <w-radio name="2">单选框 2</w-radio>
</w-radio-group>
```

## 自定义形状

将 `shape` 属性设置为 `square`，单选框的形状会变成方形。

<div class='radio-demo'>
  <w-radio-group v-model="radio4">
    <w-radio name="1" shape="square">单选框 1</w-radio>
    <w-radio name="2" shape="square">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1" shape="square">单选框 1</w-radio>
  <w-radio name="2" shape="square">单选框 2</w-radio>
</w-radio-group>
```

## 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

<div class='radio-demo'>
  <w-radio-group v-model="radio5">
    <w-radio name="1" checked-color="#ee0a24">单选框 1</w-radio>
    <w-radio name="2" checked-color="#ee0a24">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1" checked-color="#ee0a24">单选框 1</w-radio>
  <w-radio name="2" checked-color="#ee0a24">单选框 2</w-radio>
</w-radio-group>
```

## 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

<div class='radio-demo'>
  <w-radio-group v-model="radio6">
    <w-radio name="1" icon-size="24px">单选框 1</w-radio>
    <w-radio name="2" icon-size="24px">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1" icon-size="24px">单选框 1</w-radio>
  <w-radio name="2" icon-size="24px">单选框 2</w-radio>
</w-radio-group>
```

## 自定义图标

通过 `icon` 插槽自定义图标，并通过 `slotProps` 判断是否为选中状态。

<div class='radio-demo'>
  <w-radio-group v-model="radio7">
    <w-radio name="1">
      单选框 1
      <template #icon="props">
        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
      </template>
    </w-radio>
    <w-radio name="2">
      单选框 2
      <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
    </w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1">
    单选框 1
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </w-radio>
  <w-radio name="2">
    单选框 2
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </w-radio>
</w-radio-group>

<style>
  .img-icon {
    height: 20px
  }
</style>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref('1')
    return {
      checked,
      activeIcon:
        'https://fastly.jsdelivr.net/npm/@wt/assets/user-active.png',
      inactiveIcon:
        'https://fastly.jsdelivr.net/npm/@wt/assets/user-inactive.png'
    }
  }
}
```

## 左侧文本

将 `label-position` 属性设置为 `'left'`，可以将文本位置调整到单选框左侧。

<div class='radio-demo'>
  <w-radio-group v-model="radio8">
    <w-radio name="1" label-position="left">单选框 1</w-radio>
    <w-radio name="2" label-position="left">单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1" label-position="left">单选框 1</w-radio>
  <w-radio name="2" label-position="left">单选框 2</w-radio>
</w-radio-group>
```

## 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发单选框切换。

<div class='radio-demo'>
  <w-radio-group v-model="radio9">
    <w-radio name="1" label-disabled>单选框 1</w-radio>
    <w-radio name="2" label-disabled>单选框 2</w-radio>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-radio name="1" label-disabled>单选框 1</w-radio>
  <w-radio name="2" label-disabled>单选框 2</w-radio>
</w-radio-group>
```

## 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

<div class='radio-demo'>
  <w-radio-group v-model="radio10">
    <w-cell title="单选框 1" clickable @click="radio10 = '1'">
      <template #right-icon>
        <w-radio name="1" />
      </template>
    </w-cell>
    <w-cell title="单选框 2" clickable @click="radio10 = '2'">
      <template #right-icon>
        <w-radio name="2" />
      </template>
    </w-cell>
  </w-radio-group>
</div>

```vue
<w-radio-group v-model="checked">
  <w-cell-group inset>
    <w-cell title="单选框 1" clickable @click="checked = '1'">
      <template #right-icon>
        <w-radio name="1" />
      </template>
    </w-cell>
    <w-cell title="单选框 2" clickable @click="checked = '2'">
      <template #right-icon>
        <w-radio name="2" />
      </template>
    </w-cell>
  </w-cell-group>
</w-radio-group>
```

# API

## Radio Props

| 参数           | 说明                                 | 类型               | 默认值    |
| -------------- | ------------------------------------ | ------------------ | --------- |
| name           | 标识符，通常为一个唯一的字符串或数字 | _any_              | -         |
| shape          | 形状，可选值为 `square`              | _string_           | `round`   |
| disabled       | 是否为禁用状态                       | _boolean_          | `false`   |
| label-disabled | 是否禁用文本内容点击                 | _boolean_          | `false`   |
| label-position | 文本位置，可选值为 `left`            | _string_           | `right`   |
| icon-size      | 图标大小，默认单位为 `px`            | _number \| string_ | `20px`    |
| checked-color  | 选中状态颜色                         | _string_           | `#1989fa` |

## RadioGroup Props

| 参数          | 说明                                  | 类型               | 默认值     |
| ------------- | ------------------------------------- | ------------------ | ---------- |
| v-model       | 当前选中项的标识符                    | _any_              | -          |
| disabled      | 是否禁用所有单选框                    | _boolean_          | `false`    |
| direction     | 排列方向，可选值为 `horizontal`       | _string_           | `vertical` |
| icon-size     | 所有单选框的图标大小，默认单位为 `px` | _number \| string_ | `20px`     |
| checked-color | 所有单选框的选中状态颜色              | _string_           | `#1989fa`  |

## Radio Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单选框时触发 | _event: MouseEvent_ |

## RadioGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _name: string_ |

## Radio Slots

| 名称    | 说明       | 参数                                      |
| ------- | ---------- | ----------------------------------------- |
| default | 自定义文本 | -                                         |
| icon    | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |


# 主题定制

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                           | 默认值                   | 描述 |
| ------------------------------ | ------------------------ | ---- |
| --w-radio-size                 | _20px_                   | -    |
| --w-radio-border-color         | _var(--w-gray-5)_        | -    |
| --w-radio-duration             | _var(--w-duration-fast)_ | -    |
| --w-radio-label-margin         | _var(--w-padding-xs)_    | -    |
| --w-radio-label-color          | _var(--w-text-color)_    | -    |
| --w-radio-checked-icon-color   | _var(--w-primary-color)_ | -    |
| --w-radio-disabled-icon-color  | _var(--w-gray-5)_        | -    |
| --w-radio-disabled-label-color | _var(--w-text-color-3)_  | -    |
| --w-radio-disabled-background  | _var(--w-border-color)_  | -    |

<script setup>
  import { ref } from 'vue'
  const radio1 = ref('1')
  const radio2 = ref('2')
  const radio3 = ref('1')
  const radio4 = ref('1')
  const radio5 = ref('1')
  const radio6 = ref('1')
  const radio7 = ref('1')
  const radio8 = ref('1')
  const radio9 = ref('1')
  const radio10 = ref('1')
  const activeIcon = ref('https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png')
    const inactiveIcon = ref('https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png')
</script>

<style lang='less' scoped>
  .radio-demo {
    max-width: 375px;
    .w-radio {
      margin: 0 0 8px 20px;
    }
    .img-icon {
      height: 20px;
    }
  }
</style>

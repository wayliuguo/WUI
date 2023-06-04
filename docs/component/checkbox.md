# Checkbox 复选框

## 介绍

在一组备选项中进行多选。

# 代码演示

## 基础用法

通过 `v-model` 绑定复选框的勾选状态。

<div class="checkbox-demo">
  <w-checkbox v-model="state.checkbox1">复选框</w-checkbox>
</div>

```vue
<w-checkbox v-model="checked">复选框</w-checkbox>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```

## 禁用状态

通过设置 `disabled` 属性可以禁用复选框。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox2" disabled>复选框</w-checkbox>
  <w-checkbox v-model="state.checkbox3" disabled>复选框</w-checkbox>
</div>

```vue
<w-checkbox v-model="checkbox" disabled>复选框</w-checkbox>
```

## 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox4" shape="square">自定义形状</w-checkbox>
</div>

```vue
<w-checkbox v-model="checkbox" shape="square">自定义形状</w-checkbox>
```

## 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox5" checked-color="#ee0a24">自定义颜色</w-checkbox>
</div>

```vue
<w-checkbox v-model="checkbox" checked-color="#ee0a24">自定义颜色</w-checkbox>
```

## 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox6" icon-size="24px">自定义大小</w-checkbox>
</div>

```vue
<w-checkbox v-model="checkbox" icon-size="24px">自定义大小</w-checkbox>
```

## 自定义图标

通过 icon 插槽自定义图标，可以通过 slotProps 判断是否为选中状态。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox7" >
    自定义图标
    <template #icon="props">
      <img class="img-icon" :src="state.checkbox7 ? activeIcon : inactiveIcon" />
    </template>
  </w-checkbox>
</div>

```vue
<w-checkbox v-model="checked">
  自定义图标
  <template #icon="props">
    <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
  </template>
</w-checkbox>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```
```vue
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref(true)
    return {
      checked,
      activeIcon:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactiveIcon:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    }
  }
}
```

## 左侧文本

将 `label-position` 属性设置为 'left'，可以将文本位置调整到复选框左侧。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox8" label-position="left">左侧文本</w-checkbox>
</div>

```vue
<w-checkbox v-model="checkbox" label-position="left">左侧文本</w-checkbox>
```

## 禁用文本点击
设置 `label-disabled` 属性后，点击图标以外的内容不会触发复选框切换。
<div class='checkbox-demo'>
  <w-checkbox v-model="state.checkbox9" label-disabled>禁用文本点击</w-checkbox>
</div>

```vue
<w-checkbox v-model="checkbox" label-disabled>禁用文本点击</w-checkbox>
```
## 复选框组
复选框可以与复选框组一起使用，复选框组通过 `v-model` 数组绑定复选框的勾选状态。
<div class='checkbox-demo'>
  <w-checkbox-group v-model="state.list">
    <w-checkbox name="a">复选框 a</w-checkbox>
    <w-checkbox name="b">复选框 b</w-checkbox>
  </w-checkbox-group>
</div>

```vue
<w-checkbox-group v-model="checked">
  <w-checkbox name="a">复选框 a</w-checkbox>
  <w-checkbox name="b">复选框 b</w-checkbox>
</w-checkbox-group>
```

```vue
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref(['a', 'b'])
    return { checked }
  }
}
```

## 水平排列
将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。
<div class='checkbox-demo'>
  <w-checkbox-group v-model="state.result" direction="horizontal">
    <w-checkbox name="a">复选框 a</w-checkbox>
    <w-checkbox name="b">复选框 b</w-checkbox>
  </w-checkbox-group>
</div>

```vue
<w-checkbox-group v-model="checked" direction="horizontal">
  <w-checkbox name="a">复选框 a</w-checkbox>
  <w-checkbox name="b">复选框 b</w-checkbox>
</w-checkbox-group>
```

```vue
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref(['a', 'b'])
    return { checked }
  }
}
```

## 限制最大可选数
通过 `max` 属性可以限制复选框组的最大可选数。
<div class='checkbox-demo'>
  <w-checkbox-group v-model="state.result2" max="2">
    <w-checkbox name="a">复选框 a</w-checkbox>
    <w-checkbox name="b">复选框 b</w-checkbox>
    <w-checkbox name="c">复选框 c</w-checkbox>
  </w-checkbox-group>
</div>

```vue
<w-checkbox-group v-model="checked" max="2">
  <w-checkbox name="a">复选框 a</w-checkbox>
  <w-checkbox name="b">复选框 b</w-checkbox>
  <w-checkbox name="c">复选框 c</w-checkbox>
</w-checkbox-group>
```

```vue
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref([])
    return { checked }
  }
}
```

## 全选与反选
通过 `CheckboxGroup` 实例上的 toggleAll 方法可以实现全选与反选。
<div class='checkbox-demo'>
  <w-checkbox-group v-model="state.result3" ref="checkboxGroup">
    <w-checkbox name="a">复选框 a</w-checkbox>
    <w-checkbox name="b">复选框 b</w-checkbox>
    <w-checkbox name="c">复选框 c</w-checkbox>
  </w-checkbox-group>
  <w-button type="primary" @click="checkAll">全选</w-button>
  <w-button type="primary" @click="toggleAll">反选</w-button>
</div>

```vue
<w-checkbox-group v-model="checked" ref="checkboxGroup">
  <w-checkbox name="a">复选框 a</w-checkbox>
  <w-checkbox name="b">复选框 b</w-checkbox>
  <w-checkbox name="c">复选框 c</w-checkbox>
</w-checkbox-group>

<w-button type="primary" @click="checkAll">全选</w-button>
<w-button type="primary" @click="toggleAll">反选</w-button>
```
```vue
import { ref } from 'vue'

export default {
  setup() {
    const checked = ref([])
    const checkboxGroup = ref(null)
    const checkAll = () => {
      checkboxGroup.value.toggleAll(true)
    }
    const toggleAll = () => {
      checkboxGroup.value.toggleAll()
    }

    return {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup
    }
  }
}
```

## 搭配单元格组件使用
搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件，并通过 `Checkbox` 实例上的 `toggle` 方法触发切换。

<div class='checkbox-demo'>
  <w-checkbox-group v-model="state.result4">
    <w-cell-group inset>
      <w-cell
        v-for="(item, index) in state.list"
        clickable
        :key="item"
        :title="`复选框 ${item}`"
        @click="toggle(index)"
      >
        <template #right-icon>
          <w-checkbox
            :name="item"
            :ref="el => checkboxRefs[index] = el"
            @click.stop
          />
        </template>
      </w-cell>
  </w-cell-group>
  </w-checkbox-group>
</div>

```vue
<w-checkbox-group v-model="checked">
  <w-cell-group inset>
    <w-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`复选框 ${item}`"
      @click="toggle(index)"
    >
      <template #right-icon>
        <w-checkbox
          :name="item"
          :ref="el => checkboxRefs[index] = el"
          @click.stop
        />
      </template>
    </w-cell>
  </w-cell-group>
</w-checkbox-group>

```
```vue
import { ref, onBeforeUpdate } from 'vue'

export default {
  setup() {
    const checked = ref([])
    const checkboxRefs = ref([])
    const toggle = (index) => {
      checkboxRefs.value[index].toggle()
    }
    onBeforeUpdate(() => {
      checkboxRefs.value = []
    })

    return {
      list: ['a', 'b'],
      toggle,
      checked,
      checkboxRefs
    }
  }
}
```

# API

## Checkbox Props

| 参数           | 说明                                 | 类型               | 默认值    |
| -------------- | ------------------------------------ | ------------------ | --------- |
| v-model        | 是否为选中状态                       | _boolean_          | `false`   |
| name           | 标识符，通常为一个唯一的字符串或数字 | _any_              | -         |
| shape          | 形状，可选值为 `square`              | _string_           | `round`   |
| disabled       | 是否禁用复选框                       | _boolean_          | `false`   |
| label-disabled | 是否禁用复选框文本点击               | _boolean_          | `false`   |
| label-position | 文本位置，可选值为 `left`            | _string_           | `right`   |
| icon-size      | 图标大小，默认单位为 `px`            | _number \| string_ | `20px`    |
| checked-color  | 选中状态颜色                         | _string_           | `#1989fa` |
| bind-group     | 是否与复选框组绑定                   | _boolean_          | `true`    |

## CheckboxGroup Props

| 参数          | 说明                                  | 类型               | 默认值     |
| ------------- | ------------------------------------- | ------------------ | ---------- |
| v-model       | 所有选中项的标识符                    | _any[]_            | -          |
| disabled      | 是否禁用所有复选框                    | _boolean_          | `false`    |
| max           | 最大可选数，`0` 为无限制              | _number \| string_ | `0`        |
| direction     | 排列方向，可选值为 `horizontal`       | _string_           | `vertical` |
| icon-size     | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px`     |
| checked-color | 所有复选框的选中状态颜色              | _string_           | `#1989fa`  |

## Checkbox Events

| 事件名 | 说明                     | 回调参数            |
| ------ | ------------------------ | ------------------- |
| change | 当绑定值变化时触发的事件 | _checked: boolean_  |
| click  | 点击复选框时触发         | _event: MouseEvent_ |

## CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _names: any[]_ |

## Checkbox Slots

| 名称    | 说明       | 参数                                      |
| ------- | ---------- | ----------------------------------------- |
| default | 自定义文本 | -                                         |
| icon    | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |

## CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法。

| 方法名    | 说明                                                               | 参数                          | 返回值 |
| --------- | ------------------------------------------------------------------ | ----------------------------- | ------ |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | -      |

## toggleAll 方法示例

```js
import { ref } from 'vue';
import type { CheckboxGroupInstance } from 'WUI';

const checkboxGroupRef = ref<CheckboxGroupInstance>();

// 全部反选
checkboxGroupRef?.value.toggleAll();
// 全部选中
checkboxGroupRef?.value.toggleAll(true);
// 全部取消
checkboxGroupRef?.value.toggleAll(false);

// 全部反选，并跳过禁用的复选框
checkboxGroupRef?.value.toggleAll({
  skipDisabled: true,
});
// 全部选中，并跳过禁用的复选框
checkboxGroupRef?.value.toggleAll({
  checked: true,
  skipDisabled: true,
});
```

## Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法。

| 方法名 | 说明                                                             | 参数                | 返回值 |
| ------ | ---------------------------------------------------------------- | ------------------- | ------ |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | -      |


# 主题定制

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                              | 默认值                   | 描述 |
| --------------------------------- | ------------------------ | ---- |
| --w-checkbox-size                 | _20px_                   | -    |
| --w-checkbox-border-color         | _var(--w-gray-5)_        | -    |
| --w-checkbox-duration             | _var(--w-duration-fast)_ | -    |
| --w-checkbox-label-margin         | _var(--w-padding-xs)_    | -    |
| --w-checkbox-label-color          | _var(--w-text-color)_    | -    |
| --w-checkbox-checked-icon-color   | _var(--w-primary-color)_ | -    |
| --w-checkbox-disabled-icon-color  | _var(--w-gray-5)_        | -    |
| --w-checkbox-disabled-label-color | _var(--w-text-color-3)_  | -    |
| --w-checkbox-disabled-background  | _var(--w-border-color)_  | -    |

<script setup>
  import { reactive, ref, onBeforeUpdate } from 'vue'
    const state = reactive({
      checkbox1: true,
      checkbox2: true,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      result4: []
    })
    const activeIcon = ref('https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png')
    const inactiveIcon = ref('https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png')

    // CheckboxGroup ref
    const checkboxGroup = ref(null)
    const checkAll = () => {
      checkboxGroup.value.toggleAll(true)
    }
    const toggleAll = () => {
      checkboxGroup.value.toggleAll()
    }

    const checkboxRefs = ref([])
    const toggle = (index) => {
      checkboxRefs.value[index].toggle()
    }
    onBeforeUpdate(() => {
      checkboxRefs.value = []
    })
</script>

<style lang='less' scoped>
  .checkbox-demo {
    max-width: 375px;
    .w-checkbox {
      margin: 0 0 8px 20px;
    }
    .w-button {
      margin: 5px 10px !important;
    }
    .img-icon {
      height: 20px;
    }
  }
</style>

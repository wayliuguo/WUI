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

<script setup>
  import { reactive, ref } from 'vue'
    const state = reactive({
      checkbox1: true,
      checkbox2: true,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkboxShape: true,
      checkboxLabel: true,
      checkboxIcon: true,
      leftLabel: false,
      list: ['a', 'b'],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
    })
    const activeIcon = ref('https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png')
    const inactiveIcon = ref('https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png')
</script>

<style lang='less' scoped>
  .checkbox-demo {
    max-width: 375px;
    .w-checkbox {
      margin: 0 0 8px 20px;
    }
    .img-icon {
      height: 20px;
    }
  }
</style>

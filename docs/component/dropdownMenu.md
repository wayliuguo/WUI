# DropdownMenu 下拉菜单

## 介绍

向下弹出的菜单列表。

## 引入

通过以下方式来全局注册组件。

```js
import { createApp } from 'vue';
import { DropdownMenu, DropdownItem } from 'w-view';

const app = createApp();
app.use(DropdownMenu);
app.use(DropdownItem);
```

# 代码演示

## 基础用法
<w-dropdown-menu>
  <w-dropdown-item v-model="value1" :options="option1" />
  <w-dropdown-item v-model="value2" :options="option2" />
</w-dropdown-menu>

```vue
<w-dropdown-menu>
  <w-dropdown-item v-model="value1" :options="option1" />
  <w-dropdown-item v-model="value2" :options="option2" />
</w-dropdown-menu>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value1 = ref(0);
    const value2 = ref('a');
    const option1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];

    return {
      value1,
      value2,
      option1,
      option2,
    };
  },
};
```

## 自定义菜单内容

通过插槽可以自定义 `DropdownItem` 的内容，此时需要使用 `DropdownMenu` 实例上的 `close` 或指定 `DropdownItem` 的 `toggle` 方法手动控制菜单的显示。

<w-dropdown-menu ref="menuRef">
  <w-dropdown-item v-model="value" :options="options" />
  <w-dropdown-item title="筛选" ref="itemRef">
    <w-cell center title="包邮">
      <template #right-icon>
        <w-switch v-model="switch1" />
      </template>
    </w-cell>
    <w-cell center title="团购">
      <template #right-icon>
        <w-switch v-model="switch2" />
      </template>
    </w-cell>
    <div style="padding: 5px 16px;">
      <w-button type="primary" block round @click="onConfirm">
        确认
      </w-button>
    </div>
  </w-dropdown-item>
</w-dropdown-menu>

```vue
<w-dropdown-menu ref="menuRef">
  <w-dropdown-item v-model="value" :options="options" />
  <w-dropdown-item title="筛选" ref="itemRef">
    <w-cell center title="包邮">
      <template #right-icon>
        <w-switch v-model="switch1" />
      </template>
    </w-cell>
    <w-cell center title="团购">
      <template #right-icon>
        <w-switch v-model="switch2" />
      </template>
    </w-cell>
    <div style="padding: 5px 16px;">
      <w-button type="primary" block round @click="onConfirm">
        确认
      </w-button>
    </div>
  </w-dropdown-item>
</w-dropdown-menu>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const menuRef = ref(null);
    const itemRef = ref(null);
    const value = ref(0);
    const switch1 = ref(false);
    const switch2 = ref(false);
    const options = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const onConfirm = () => {
      itemRef.value.toggle();
      // 或者
      // menuRef.value.close();
    };

    return {
      menuRef,
      itemRef,
      value,
      switch1,
      switch2,
      options,
      onConfirm,
    };
  },
};
```

## 自定义选中态颜色

通过 `active-color` 属性可以自定义菜单标题和选项的选中态颜色。

<w-dropdown-menu active-color="#ee0a24">
  <w-dropdown-item v-model="value1" :options="option1" />
  <w-dropdown-item v-model="value2" :options="option2" />
</w-dropdown-menu>

```vue
<w-dropdown-menu active-color="#ee0a24">
  <w-dropdown-item v-model="value1" :options="option1" />
  <w-dropdown-item v-model="value2" :options="option2" />
</w-dropdown-menu>
```

## 向上展开

将 `direction` 属性值设置为 `up`，菜单即可向上展开。

<w-dropdown-menu direction="up">
  <w-dropdown-item v-model="value1" :options="option1" />
  <w-dropdown-item v-model="value2" :options="option2" />
</w-dropdown-menu>

```vue
<w-dropdown-menu direction="up">
  <w-dropdown-item v-model="value1" :options="option1" />
  <w-dropdown-item v-model="value2" :options="option2" />
</w-dropdown-menu>
```

## 禁用菜单
<w-dropdown-menu>
  <w-dropdown-item v-model="value1" disabled :options="option1" />
  <w-dropdown-item v-model="value2" disabled :options="option2" />
</w-dropdown-menu>

```vue
<w-dropdown-menu>
  <w-dropdown-item v-model="value1" disabled :options="option1" />
  <w-dropdown-item v-model="value2" disabled :options="option2" />
</w-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active-color | 菜单标题和选项的选中态颜色 | _string_ | `#1989fa` |
| direction | 菜单展开方向，可选值为`up` | _string_ | `down` |
| z-index | 菜单栏 z-index 层级 | _number \| string_ | `10` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.2` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项对应的 value | _number \| string_ | - |
| title | 菜单项标题 | _string_ | 当前选中项文字 |
| options | 选项数组 | _Option[]_ | `[]` |
| disabled | 是否禁用菜单 | _boolean_ | `false` |
| lazy-render | 是否在首次展开时才渲染菜单内容 | _boolean_ | `true` |
| title-class | 标题额外类名 | _string \| Array \| object_ | - |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | - |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数 |
| ------ | ----------------------------- | -------- |
| change | 点击选项导致 value 变化时触发 | value    |
| open   | 打开菜单栏时触发              | -        |
| close  | 关闭菜单栏时触发              | -        |
| opened | 打开菜单栏且动画结束后触发    | -        |
| closed | 关闭菜单栏且动画结束后触发    | -        |

### DropdownItem Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 菜单内容         |
| title   | 自定义菜单项标题 |

### DropdownMenu 方法

通过 ref 可以获取到 DropdownMenu 实例并调用实例方法。

| 方法名 | 说明                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| close  | 关闭所有菜单的展示状态 | -    | -      |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法。
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换菜单展示状态，传 `true` 为显示，`false` 为隐藏，不传参为取反 | _show?: boolean_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  DropdownMenuProps,
  DropdownItemProps,
  DropdownItemOption,
  DropdownItemInstance,
  DropdownMenuInstance,
  DropdownMenuDirection,
} from 'vant';
```

`DropdownMenuInstance` 和 `DropdownItemInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { DropdownMenuInstance, DropdownItemInstance } from 'vant';

const dropdownMenuRef = ref<DropdownMenuInstance>();
const dropdownItemRef = ref<DropdownItemInstance>();

dropdownMenuRef.value?.close();
dropdownItemRef.value?.toggle();
```

### Option 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| text | 文字 | _string_ |
| value | 标识符 | _number \| string_ |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](icon.html#props) | _string_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --w-dropdown-menu-height | _48px_ | - |
| --w-dropdown-menu-background | _var(--w-background-2)_ | - |
| --w-dropdown-menu-shadow | _0 2px 12px fade(var(--w-gray-7), 12)_ | - |
| --w-dropdown-menu-title-font-size | _15px_ | - |
| --w-dropdown-menu-title-text-color | _var(--w-text-color)_ | - |
| --w-dropdown-menu-title-active-text-color | _var(--w-primary-color)_ | - |
| --w-dropdown-menu-title-disabled-text-color | _var(--w-text-color-2)_ | - |
| --w-dropdown-menu-title-padding | _0 var(--w-padding-xs)_ | - |
| --w-dropdown-menu-title-line-height | _var(--w-line-height-lg)_ | - |
| --w-dropdown-menu-option-active-color | _var(--w-primary-color)_ | - |
| --w-dropdown-menu-content-max-height | _80%_ | - |
| --w-dropdown-item-z-index | _10_ | - |

<script lang="ts" setup>
  import { ref } from 'vue'
  const value1 = ref(0)
  const value2 = ref('a')
  const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 }
  ]
  const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' }
  ]
  const menuRef = ref(null);
  const itemRef = ref(null);
  const value = ref(0);
  const switch1 = ref(false);
  const switch2 = ref(false);
  const options = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ];
  const onConfirm = () => {
    itemRef.value.toggle();
  };
</script>

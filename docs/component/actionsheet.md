# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

通过以下方式来全局注册组件。

```js
import { createApp } from 'vue';
import { ActionSheet } from 'w-view';

const app = createApp();
app.use(ActionSheet);
```

# 代码演示

## 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

<w-cell is-link title="基础用法" @click="showBasic = true" />
<w-action-sheet v-model:show="showBasic" :actions="actionsBasic" @select="onSelectBasic" />

```vue
<w-cell is-link title="基础用法" @click="show = true" />
<w-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
```

```js
import { ref } from 'vue'
import { showToast } from 'w-view'

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' },
    ];
    const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      show.value = false;
      showToast(item.name);
    };

    return {
      show,
      actions,
      onSelect,
    };
  },
};
```

## 展示取消按钮

设置 `cancel-text` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `cancel` 事件。

<w-cell is-link title="展示取消按钮" @click="showCancel = true" />
<w-action-sheet
  v-model:show="showCancel"
  :actions="actionsCancel"
  cancel-text="取消"
  close-on-click-action
  @cancel="onCancelCancel"
/>

```vue
<w-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="取消"
  close-on-click-action
  @cancel="onCancel"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'w-view';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' },
    ];
    const onCancel = () => showToast('取消');

    return {
      show,
      actions,
      onCancel,
    };
  },
};
```

## 展示描述信息

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息。

<w-cell is-link title="展示描述信息" @click="showDescription = true" />
<w-action-sheet
  v-model:show="showDescription"
  :actions="actionsDescription"
  cancel-text="取消"
  description="这是一段描述信息"
  close-on-click-action
/>

```vue
<w-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="取消"
  description="这是一段描述信息"
  close-on-click-action
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三', subname: '描述信息' },
    ];

    return {
      show,
      actions,
    };
  },
};
```

## 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过`color`设置选项的颜色

<w-cell is-link title="选项状态" @click="showState = true" />
<w-action-sheet
  v-model:show="showState"
  :actions="actionsState"
  cancel-text="取消"
  close-on-click-action
/>

```vue
<w-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="取消"
  close-on-click-action
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const actions = [
      { name: '着色选项', color: '#ee0a24' },
      { name: '禁用选项', disabled: true },
      { name: '加载选项', loading: true },
    ];

    return {
      show,
      actions,
    };
  },
};
```

## 自定义面板

通过插槽可以自定义面板的展示内容，同时可以使用`title`属性展示标题栏

<w-cell is-link title="自定义面板" @click="showCustom = true" />
<w-action-sheet v-model:show="showCustom" title="标题">
  <div class="content">内容</div>
</w-action-sheet>

```vue
<w-action-sheet v-model:show="show" title="标题">
  <div class="content">内容</div>
</w-action-sheet>

<style>
  .content {
    padding: 16px 16px 160px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否显示动作面板 | _boolean_ | `false` |
| actions | 面板选项列表 | _ActionSheetAction[]_ | `[]` |
| title | 顶部标题 | _string_ | - |
| cancel-text | 取消按钮文字 | _string_ | - |
| description | 选项上方的描述信息 | _string_ | - |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| close-icon | 关闭图标名称或图片链接，等同于 Icon 组件的 [name 属性](icon.html#props) | _string_ | `cross` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| z-index | 将面板的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| round | 是否显示圆角 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| close-on-click-action | 是否在点击选项后关闭 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `true` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | - |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| name      | 标题                     | _string_                    |
| subname   | 二级标题                 | _string_                    |
| color     | 选项文字颜色             | _string_                    |
| className | 为对应列添加额外的 class | _string \| Array \| object_ |
| loading   | 是否为加载状态           | _boolean_                   |
| disabled  | 是否为禁用状态           | _boolean_                   |
| callback  | 点击时触发的回调函数     | _action: ActionSheetAction_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 点击选项时触发，禁用或加载状态下不会触发 | _action: ActionSheetAction, index: number_ |
| cancel | 点击取消按钮时触发 | - |
| open | 打开面板时触发 | - |
| close | 关闭面板时触发 | - |
| opened | 打开面板且动画结束后触发 | - |
| closed | 关闭面板且动画结束后触发 | - |
| click-overlay | 点击遮罩层时触发 | _event: MouseEvent_ |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义面板的展示内容 | - |
| description | 自定义描述文案 | - |
| cancel | 自定义取消按钮内容 | - |
| action | 自定义选项内容 | _{ action: ActionSheetAction, index: number }_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { ActionSheetProps, ActionSheetAction } from 'w-view';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --w-action-sheet-max-height | _80%_ | - |
| --w-action-sheet-header-height | _48px_ | - |
| --w-action-sheet-header-font-size | _var(--w-font-size-lg)_ | - |
| --w-action-sheet-description-color | _var(--w-text-color-2)_ | - |
| --w-action-sheet-description-font-size | _var(--w-font-size-md)_ | - |
| --w-action-sheet-description-line-height | _var(--w-line-height-md)_ | - |
| --w-action-sheet-item-background | _var(--w-background-2)_ | - |
| --w-action-sheet-item-font-size | _var(--w-font-size-lg)_ | - |
| --w-action-sheet-item-line-height | _var(--w-line-height-lg)_ | - |
| --w-action-sheet-item-text-color | _var(--w-text-color)_ | - |
| --w-action-sheet-item-disabled-text-color | _var(--w-text-color-3)_ | - |
| --w-action-sheet-subname-color | _var(--w-text-color-2)_ | - |
| --w-action-sheet-subname-font-size | _var(--w-font-size-sm)_ | - |
| --w-action-sheet-subname-line-height | _var(--w-line-height-sm)_ | - |
| --w-action-sheet-close-icon-size | _22px_ | - |
| --w-action-sheet-close-icon-color | _var(--w-gray-5)_ | - |
| --w-action-sheet-close-icon-padding | _0 var(--w-padding-md)_ | - |
| --w-action-sheet-cancel-text-color | _var(--w-gray-7)_ | - |
| --w-action-sheet-cancel-padding-top | _var(--w-padding-xs)_ | - |
| --w-action-sheet-cancel-padding-color | _var(--w-background)_ | - |
| --w-action-sheet-loading-icon-size | _22px_ | - |

<script setup>
  import { ref } from 'vue'
  import { showToast } from '@w-ui/components/Toast'
  // 基础用法
  const showBasic = ref(false)
  const actionsBasic = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' }
  ]
  const onSelectBasic = (item) => {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    showBasic.value = false
    showToast(item.name)
  };
  // 展示取消按钮
  const showCancel = ref(false)
  const actionsCancel = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' }
  ]
  const onCancelCancel = () => {
    showToast('取消')
  }
  // 展示描述信息
  const showDescription = ref(false)
  const actionsDescription = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' }
  ]
  // 选项状态
  const showState = ref(false)
  const actionsState = [
    { name: '着色选项', color: '#ee0a24' },
    { name: '禁用选项', disabled: true },
    { name: '加载选项', loading: true }
  ]
  // 自定义面板
  const showCustom = ref(false)
</script>
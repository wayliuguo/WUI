# Toast 轻提示

## 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

# 代码演示

## 文字提示

<div class="toast-demo">
  <w-cell title="文字提示" is-link @click="onShowToastBasic" />
</div>

```js
import { showToast } from 'wui';

showToast('提示内容');
```

## 加载提示

使用 `showLoadingToast` 方法展示加载提示，通过 `forbidClick` 选项可以禁用背景点击。

<div class="toast-demo">
  <w-cell title="加载提示" is-link @click="onShowLoadingToast" />
</div>

```js
import { showLoadingToast } from 'wui';

showLoadingToast({
  message: '加载中...',
  forbidClick: true
});
```

## 成功/失败提示

使用 `showSuccessToast` 方法展示成功提示，使用 `showFailToast` 方法展示失败提示。

<div class="toast-demo">
  <w-cell title="成功提示" is-link @click="onShowSuccessToast" />
  <w-cell title="失败提示" is-link @click="onShowFailToast" />
</div>

```js
import { showSuccessToast, showFailToast } from 'wui';

showSuccessToast('成功文案');
showFailToast('失败文案');
```

## 自定义图标

通过 `icon` 选项可以自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](icon.html#props)。

<div class="toast-demo">
  <w-cell title="自定义图标" is-link @click="onShowToastIcon" />
  <w-cell title="自定义图片" is-link @click="onShowToastImg" />
</div>

```js
import { showToast } from 'wui';

showToast({
  message: '自定义图标',
  icon: 'like-o',
});

showToast({
  message: '自定义图片',
  icon: 'https://fastly.jsdelivr.net/npm/@wui/assets/logo.png',
});
```

通过`loadingType` 属性可以自定义加载图标类型。

```js
import { showLoadingToast } from 'wui';

showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

## 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

<div class="toast-demo">
  <w-cell title="顶部展示" is-link @click="onShowToastTop" />
  <w-cell title="底部展示" is-link @click="onShowToastBottom" />
</div>

```js
import { showToast } from 'wui';

showToast({
  message: '顶部展示',
  position: 'top',
});

showToast({
  message: '底部展示',
  position: 'bottom',
});
```

## 文字换行方式

通过 `wordBreak` 选择可以控制 Toast 中的文字过长时的截断方式，默认值为 `break-all`，可选值为 `break-word` 和 `normal`。

<div class="toast-demo">
  <w-cell title="换行时截断单词" is-link @click="onShowToastBreakAll" />
  <w-cell title="换行时不截断单词" is-link @click="onShowToastWordBreak" />
</div>

```js
import { showToast } from 'wui';

// 换行时截断单词
showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-all',
});

// 换行时不截断单词
showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-word',
});
```

## 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `message` 属性可以实现动态更新提示的效果。

<div class="toast-demo">
  <w-cell title="动态更新提示" is-link @click="onShowToastDynamic" />
</div>

```js
import { showLoadingToast, closeToast } from 'wui';

const toast = showLoadingToast({
  duration: 0,
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    closeToast();
  }
}, 1000);
```

## 单例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：

```js
import { showToast, showSuccessToast, allowMultipleToast } from 'wui';

allowMultipleToast();

const toast1 = showToast('第一个 Toast');
const toast2 = showSuccessToast('第二个 Toast');

toast1.close();
toast2.close();
```

## 修改默认配置

通过 `setToastDefaultOptions` 函数可以全局修改 `showToast` 等方法的默认配置。

```js
import { setToastDefaultOptions, resetToastDefaultOptions } from 'wui';

setToastDefaultOptions({ duration: 2000 });

setToastDefaultOptions('loading', { forbidClick: true });

resetToastDefaultOptions();

resetToastDefaultOptions('loading');
```

## 使用 Toast 组件

如果需要在 Toast 内嵌入组件或其他自定义内容，可以直接使用 Toast 组件，并使用 message 插槽进行定制。使用前需要通过 `app.use` 等方式注册组件。

<div class="toast-demo">
  <w-cell title="使用 Toast 组件" is-link @click="showToastCom=true" />
</div>
<w-toast v-model:show="showToastCom" style="padding: 0">
  <template #message>
    <div>使用 Toast 组件</div>
  </template>
</w-toast>

```html
<w-toast v-model:show="show" style="padding: 0">
  <template #message>
    <div>使用 Toast 组件</div>
  </template>
</w-toast>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    return { show };
  },
};
```

# API

## 方法

Vant 中导出了以下 Toast 相关的辅助函数：

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showToast | 展示提示 | `ToastOptions \| string` | toast 实例 |
| showLoadingToast | 展示加载提示 | `ToastOptions \| string` | toast 实例 |
| showSuccessToast | 展示成功提示 | `ToastOptions \| string` | toast 实例 |
| showFailToast | 展示失败提示 | `ToastOptions \| string` | toast 实例 |
| closeToast | 关闭提示 | `closeAll: boolean` | `void` |
| allowMultipleToast | 允许同时存在多个 Toast | - | `void` |
| setToastDefaultOptions | 修改默认配置，影响所有的 `showToast` 调用。<br>传入 type 可以修改指定类型的默认配置 | `type \| ToastOptions` | `void` |
| resetToastDefaultOptions | 重置默认配置，影响所有的 `showToast` 调用。<br>传入 type 可以重置指定类型的默认配置 | `type` | `void` |

## ToastOptions 数据结构

调用 `showToast` 等方法时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `html` | _ToastType_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _ToastPosition_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` |
| wordBreak | 文本内容的换行方式，可选值为 `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | 自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](icon.html#props) | _string_ | - |
| iconSize | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `36px` |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](icon.html#props) | _string_ | `w-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](loading.html), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| onOpened | 完全展示后的回调函数 | _Function_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |
| transition | 动画类名，等价于 [transition](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 的`name`属性 | _string_ | `w-fade` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |

## Slots

使用 `Toast` 组件时，支持以下插槽：

| 名称    | 说明           |
| ------- | -------------- |
| message | 自定义文本内容 |

## 类型定义

组件导出以下类型定义：

```ts
import type {
  ToastType,
  ToastProps,
  ToastOptions,
  ToastPosition,
  ToastWordBreak,
} from 'wui';
```

# 主题定制

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --w-toast-max-width | _70%_ | - |
| --w-toast-font-size | _var(--w-font-size-md)_ | - |
| --w-toast-text-color | _var(--w-white)_ | - |
| --w-toast-loading-icon-color | _var(--w-white)_ | - |
| --w-toast-line-height | _var(--w-line-height-md)_ | - |
| --w-toast-radius | _var(--w-radius-lg)_ | - |
| --w-toast-background | _fade(var(--w-black), 70%)_ | - |
| --w-toast-icon-size | _36px_ | - |
| --w-toast-text-min-width | _96px_ | - |
| --w-toast-text-padding | _var(--w-padding-xs) var(--w-padding-sm)_ | - |
| --w-toast-default-padding | _var(--w-padding-md)_ | - |
| --w-toast-default-width | _88px_ | - |
| --w-toast-default-min-height | _88px_ | - |
| --w-toast-position-top-distance | _20%_ | - |
| --w-toast-position-bottom-distance | _20%_ | - |

<script setup>
  import { showToast, showLoadingToast, showSuccessToast, showFailToast, closeToast } from '@w-ui/components/Toast'
  import { ref } from 'vue'
  const onShowToastBasic = () => {
    showToast('提示内容')
  }
  const onShowLoadingToast = () => {
    showLoadingToast({
      message: '加载中...',
      forbidClick: true
    })
  }
  const onShowSuccessToast = () => {
    showSuccessToast('成功文案')
  }
  const onShowFailToast = () => {
    showFailToast('失败文案')
  }
  const onShowToastIcon = () => {
    showToast({
      message: '自定义图标',
      icon: 'like-o'
    })
  }
  const onShowToastImg = () => {
    showToast({
      message: '自定义图片',
      icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png'
    })
  }
  const onShowToastTop = () => {
    showToast({
      message: '顶部展示',
      position: 'top',
    })
  }
  const onShowToastBottom = () => {
    showToast({
      message: '底部展示',
      position: 'bottom',
    })
  }
  const onShowToastBreakAll = () => {
    showToast({
      message: 'This message will contain a incomprehensibilities long word.',
      wordBreak: 'break-all'
    })
  }
  const onShowToastWordBreak = () => {
    showToast({
      message: 'This message will contain a incomprehensibilities long word.',
      wordBreak: 'break-word'
    })
  }
  const onShowToastDynamic = () => {
    const toast = showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: '倒计时 3 秒'
    })

    let second = 3
    const timer = setInterval(() => {
      second--
      if (second) {
        toast.message = `倒计时 ${second} 秒`
      } else {
        clearInterval(timer)
        closeToast()
      }
    }, 1000)
  }
  const showToastCom = ref(false)
</script>

<style lang='less' scoped>
  .toast-demo {
    max-width: 375px;
    padding: 10px;
    background-color: #f7f8fa;
  }
</style>
# Overlay 遮罩层

## 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 引入
通过以下方式来全局注册组件。
```
import { createApp } from 'vue';
import { Overlay } from 'w-view';

const app = createApp();
app.use(Overlay);
```

# 代码演示

## 基础用法

通过 `v-model` 绑定值当前选中项的 name。
<w-button type="primary" text="显示遮罩层" @click="show = true" />
<w-overlay :show="show" z-index="9999" @click="show = false" />

```vue
<w-button type="primary" text="显示遮罩层" @click="show = true" />
<w-overlay :show="show" @click="show = false" />
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)
    return { show }
  }
}
```

## 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

<w-button type="primary" text="显示遮罩层" @click="showSlot = true" />
<w-overlay :show="showSlot" @click="showSlot = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</w-overlay>


```vue
<w-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</w-overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

# API

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| z-index | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| class-name | 自定义类名 | _string_ | - |
| custom-style | 自定义样式 | _object_ | - |
| lock-scroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示时才渲染节点 | _boolean_ | `true` |

## Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

## Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |


# 主题定制

## 样式变量

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --w-overlay-z-index    | _1_                  | -    |
| --w-overlay-background | _rgba(0, 0, 0, 0.7)_ | -    |


<script setup>
import { ref } from 'vue'

const show = ref(false)
const showSlot = ref(false)
</script>

<style lang='less' scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>

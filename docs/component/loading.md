# Loading 加载
## 介绍
加载图标，用于表示加载中的过渡状态。
# 代码演示

## 加载类型
通过 type 属性可以设置加载图标的类型，默认为 circular，可选值为 spinner。
<w-loading />
<w-loading type="spinner" />

```vue
<w-loading />
<w-loading type="spinner" />
```
## 自定义颜色
通过 color 属性设置加载图标的颜色。
<w-loading color="#1989fa" />
<w-loading type="spinner" color="#1989fa" />
```vue
<w-loading color="#1989fa" />
<w-loading type="spinner" color="#1989fa" />
```
## 自定义大小
通过 size 属性设置加载图标的大小，默认单位为 px。
<w-loading size="48" />
<w-loading type="spinner" size="48px" />
```vue
<w-loading size="48" />
<w-loading type="spinner" size="48px" />
```
## 加载文案
可以使用默认插槽在图标的右侧插入加载文案。
<w-loading size="24px">加载中...</w-loading>
```vue
<w-loading size="24px">加载中...</w-loading>
```
## 垂直排列
设置 vertical 属性后，图标和文案会垂直排列。
<w-loading size="24px" vertical>加载中...</w-loading>
```vue
<w-loading size="24px" vertical>加载中...</w-loading>
```

## 自定义文案颜色
通过 color 或者 text-color 属性设置加载文案的颜色。
<w-loading  color="#0094ff">加载中...</w-loading>
<w-loading  text-color="#0094ff">加载中...</w-loading>
```vue
<!-- 可修改文案和加载图片的颜色 -->
<w-loading  color="#0094ff">加载中...</w-loading>
<!-- 只修改文案颜色 -->
<w-loading  text-color="#0094ff">加载中...</w-loading>
```

## 自定义图标
通过 icon 插槽可以自定义加载图标。
<w-loading vertical>
  <template #icon>
    <w-icon name="star-o" size="30" />
  </template>
  加载中...
</w-loading>

# API
## Props

| 参数       | 说明                          | 类型                 | 默认值     |
| ---------- | ----------------------------- | -------------------- | ---------- |
| color      | 颜色                          | **string**           | `#c9c9c9`  |
| type       | 类型，可选值为 `spinner`      | **string**           | `circular` |
| size       | 加载图标大小，默认单位为 `px` | **number \| string** | `30px`     |
| text-size  | 文字大小，默认单位为`px`      | **number \| string** | `14px`     |
| text-color | 文字颜色                      | **string**           | `#c9c9c9`  |
| vertical   | 是否垂直排列图标和文字内容    | **boolean**          | `false`    |

## Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 加载文案       |
| icon    | 自定义加载图标 |

# 主题定制
## 样式变量
| 名称                           | 默认值                    | 描述 |
| ------------------------------ | ------------------------- | ---- |
| --w-loading-text-color       | _var(--w-text-color-2)_ | -    |
| --w-loading-text-font-size   | _var(--w-font-size-md)_ | -    |
| --w-loading-spinner-color    | _var(--w-gray-5)_       | -    |
| --w-loading-spinner-size     | _30px_                    | -    |
| --w-loading-spinner-duration | _0.8s_                    | -    |


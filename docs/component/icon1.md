# Icon 图标
## 介绍
基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。
# 代码演示

## 基础用法
通过 name 属性来指定需要使用的图标，WUI 内置了一套图标库，可以直接传入对应的名称来使用。
<w-icon name="chat-o" />

```vue
<w-icon name="chat-o" />
```
## 使用图片 URL
你也可以直接在 `name` 属性中传入一个图片 URL 来作为图标。
<w-icon name="https://fastly.jsdelivr.net/npm/@wt/assets/icon-demo.png" />

```vue
<w-icon name="https://fastly.jsdelivr.net/npm/@wt/assets/icon-demo.png" />
```
## 徽标提示
设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。
<w-icon name="chat-o" dot />
<w-icon name="chat-o" badge="9" />
<w-icon name="chat-o" badge="99+" />

```vue
<w-icon name="chat-o" dot />
<w-icon name="chat-o" badge="9" />
<w-icon name="chat-o" badge="99+" />
```
## 图标颜色
通过 `color` 属性来设置图标的颜色。
<w-icon name="cart-o" color="#1989fa" />
<w-icon name="fire-o" color="#ee0a24" />

```vue
<w-icon name="cart-o" color="#1989fa" />
<w-icon name="fire-o" color="#ee0a24" />
```
## 自定义图标
如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。
```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```
```vue
<!-- 通过 class-prefix 指定类名为 my-icon -->
<w-icon class-prefix="my-icon" name="extra" />
```


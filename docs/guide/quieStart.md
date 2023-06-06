# 快速开始

## 通过 CDN 安装
使用 `WUI` 最简单的方法是直接在 HTML 文件中引入 CDN 链接，之后你可以通过全局变量 `WUI` 访问到所有组件。

```html
<head>
  <!-- 引入样式文件 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/w-view/dist/index.css" />
</head>

<body>
  <div id="app">
  </div>

  <!-- 引入 Vue 和 Vant 的 JS 文件 -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/w-view/dist/index.umd.js"></script>
  <script>
    // 在 #app 标签下渲染一个按钮组件
    const app = Vue.createApp({
      template: `<w-button type="success">按钮</w-button>`,
    });
    app.use(WUI.Button);

    // 调用工具函数，弹出一个 Toast
    WUI.showToast('提示');

    app.mount('#app');
  </script>
</body>
```

## 完整引入
```
import { createApp } from 'vue'
import App from './App.vue'

import wView from 'w-view'
import 'w-view/dist/index.css'

createApp(App).use(wView).mount('#app')
```

## 按需引入
```
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入
import { Button } from 'w-view'

// 样式按需引入
import 'w-view/theme/button.css'

createApp(App).use(Button).mount('#app')
```
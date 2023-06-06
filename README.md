<h1 align="center">w-view</h1>

<p align="center">A lightweight, customizable Vue UI library for mobile web apps.</p>

---

## Install

Using `npm` to install:

```bash
npm i w-view

Using `yarn` or `pnpm`:

```bash
# with yarn
yarn add w-view

# with pnpm
pnpm add w-view
```

## Quickstart

```js
import { createApp } from 'vue';
// 1. Import the components you need
import { Button } from 'w-view';
// 2. Import the components style
import 'w-view/dist/index.css';

const app = createApp();

// 3. Register the components you need
app.use(Button);
```

See more in [Quickstart](https://wayliuhaha.gitee.io/wui/guide/quieStart.html).

## Browser Support

w-view supports modern browsers and Chrome >= 51、iOS >= 10.0 (same as Vue 3).

## LICENSE

w-view is [MulanPSL-2.0](https://gitee.com/wayliuhaha/wui/blob/main/LICENSE) licensed.

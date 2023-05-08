import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@w-ui/theme-chalk/index.less'
import Loading from '@w-ui/components/Loading'
import Icon from '@w-ui/components/Icon'
import Badge from '@w-ui/components/Badge'
import Button from '@w-ui/components/Button'
const plugins = [Loading, Icon, Badge, Button]

const app = createApp(App)

plugins.forEach(plugin => app.use(plugin)) // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app')

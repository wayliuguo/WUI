import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import '@w-ui/theme-chalk/index.less'
import Loading from '@w-ui/components/Loading'

const plugins = [Loading]

const app = createApp(App)

plugins.forEach(plugin => app.use(plugin)) // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app')

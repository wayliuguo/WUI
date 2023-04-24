import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持 Less 中的 JavaScript 表达式
      }
    }
  }
})

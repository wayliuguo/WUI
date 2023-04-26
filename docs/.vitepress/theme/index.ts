import DefaultTheme from 'vitepress/theme'

import WLoading from '@w-ui/components/Loading'
import '@w-ui/theme-chalk/index.less'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WLoading)
  }
}

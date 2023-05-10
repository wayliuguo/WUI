import DefaultTheme from 'vitepress/theme'

import WLoading from '@w-ui/components/Loading'
import WBadge from '@w-ui/components/Badge'
import WICON from '@w-ui/components/Icon'
import WButton from '@w-ui/components/Button'
import '@w-ui/theme-chalk/index.less'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WLoading).use(WBadge).use(WICON).use(WButton)
  }
}
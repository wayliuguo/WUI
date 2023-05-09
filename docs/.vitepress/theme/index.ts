import DefaultTheme from 'vitepress/theme'

import WLoading from '@w-ui/components/Loading'
import WBadge from '@w-ui/components/Badge'
import WICON from '@w-ui/components/Icon'
import '@w-ui/theme-chalk/index.less'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WLoading)
    app.use(WBadge)
    app.use(WICON)
  }
}

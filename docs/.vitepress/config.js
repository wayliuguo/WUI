module.exports = {
  title: 'W-UI',
  description: 'W-UI',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present WELL'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quieStart' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [{ text: 'Button 按钮', link: '/component/button' }]
        },
        {
          text: '反馈组件',
          items: [{ text: 'Loading 加载', link: '/component/loading' }]
        },
        {
          text: '展示组件',
          items: [
            {
              text: 'Badge 徽标',
              link: '/component/badge'
            }
          ]
        }
      ]
    }
  }
}
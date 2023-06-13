module.exports = {
  title: 'W-UI',
  description: 'W-UI',
  base: '/wui/',
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
      {
        text: '组件',
        link: '/component/button',
        activeMatch: '/component/button'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quieStart' }
          ]
        },
        {
          text: "笔记",
          items: [
            {
              text: '工程搭建', link: '/guide/notes/project'
            },
            {
              text: 'vue', link: '/guide/notes/vue'
            },
            {
              text: '工具函数', link: '/guide/notes/utilsFunction'
            },
            {
              text: 'hooks', link: '/guide/notes/hooks'
            },
            {
              text: 'Loading 加载', link: '/guide/notes/loading'
            },
            {
              text: 'Badge 徽标', link: '/guide/notes/badge'
            },
            {
              text: 'Icon 图标', link: '/guide/notes/icon'
            },
            {
              text: 'Button 按钮', link: '/guide/notes/button'
            },
            {
              text: 'Cell 单元格', link: '/guide/notes/cell'
            },
            {
              text: 'Space 间距', link: '/guide/notes/space'
            },
            {
              text: 'Layout Row ', link: '/guide/notes/row'
            },
            {
              text: 'Layout Col', link: '/guide/notes/col'
            },
            {
              text: 'Checker', link: '/guide/notes/checker'
            },
            {
              text: 'Radio', link: '/guide/notes/radio'
            },
            {
              text: 'RadioGroup', link: '/guide/notes/radioGroup'
            }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/component/button'
            },
            {
              text: 'Cell 单元格',
              link: '/component/cell'
            },
            {
              text: 'Icon 图标',
              link: '/component/icon'
            },
            {
              text: 'Layout 布局',
              link: '/component/layout'
            },
            {
              text: 'Space 间距',
              link: '/component/space'
            },
            {
              text: 'Popup 弹窗',
              link: '/component/popup'
            },
            {
              text: 'Toast 轻提示',
              link: '/component/toast'
            }
          ]
        },
        {
          text: '表单组件',
          items: [
            {
              text: 'Radio 单选框',
              link: '/component/radio'
            },
            {
              text: 'Checkbox 复选框',
              link: '/component/checkbox'
            }
          ]
        },
        {
          text: '反馈组件',
          items: [
            {
              text: 'Loading 加载',
              link: '/component/loading'
            }
          ]
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

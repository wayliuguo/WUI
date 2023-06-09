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
            },
            {
              text: 'Checkbox', link: '/guide/notes/checkbox'
            },
            {
              text: 'CheckboxGroup', link: '/guide/notes/checkboxGroup'
            },
            {
              text: 'Overlay', link: '/guide/notes/overlay'
            },
            {
              text: 'Popup', link: '/guide/notes/popup'
            },
            {
              text: 'Toast', link: '/guide/notes/toast'
            },
            {
              text: 'ActionSheet', link: '/guide/notes/actionsheet'
            },
            {
              text: 'Barrage', link: '/guide/notes/barrage'
            },
            {
              text: 'DropdownMenu', link: '/guide/notes/dropdownMenu'
            },
            {
              text: 'DropdownItem', link: '/guide/notes/dropdownItem'
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
            },
            {
              text: 'Overlay 遮罩层',
              link: '/component/overlay'
            },
            {
              text: 'ActionSheet 动作面板',
              link: '/component/actionsheet'
            },
            {
              text: 'Barrage 弹幕',
              link: '/component/barrage'
            },
            {
              text: 'DropdownMenu 下拉菜单',
              link: '/component/dropdownMenu'
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

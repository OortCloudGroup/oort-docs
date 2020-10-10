const nav = require('./navigator')
const sidebar = require('./sidebar')

module.exports = {
  base: '/oort-docs/',   // github 以及gitlab静态站点部署
  // base: '/oort/oortcloud-frontservice/oort-docs/',   // 部署到公司环境
  title: '奥尔特云开放平台',
  description: '奥尔特云开放平台',
  dest: 'public',
  themeConfig:{
    repo: 'OortCloudGroup/oort-docs',
    logo: '',
    displayAllHeaders: false,
    nav: nav,
    sidebarDepth: 1,
    sidebar: sidebar,
    docsRepo: 'OortCloudGroup/oort-docs',
    docsDir: 'docs',
    smoothScroll: true,
    lastUpdated: '更新时间',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true
  },
  markdown: {
    lineNumbers: true,
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#'
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).fromNow()
        }
      }
    ],
    ['@vuepress/medium-zoom']
  ]
}

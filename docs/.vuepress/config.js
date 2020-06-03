const nav = require('./navigator')
const sidebar = require('./sidebar')

module.exports = {
  base: '/oortcloud-docs/',
  title: '奥尔特云开放平台',
  description: '奥尔特云开放平台',
  dest: 'public',
  themeConfig:{
    logo: '',
    displayAllHeaders: true,
    nav: nav,
    sidebarDepth: 1,
    sidebar: sidebar,
    smoothScroll: true,
    lastUpdated: '更新时间',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ]
}

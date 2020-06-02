const nav = require('./navigator')
const sidebar = require('./sidebar')

module.exports = {
  base: '/oortcloud-docs/',
  title: '',
  description: '奥尔特云开发平台',
  dest: 'public',
  themeConfig:{
    logo: '',
    displayAllHeaders: true,
    nav: nav,
    sidebarDepth: 1,
    sidebar: sidebar,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ]
}

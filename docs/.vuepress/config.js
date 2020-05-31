const nav = require('./navigator')
const sidebar = require('./sidebar')

module.exports = {
  base: '/oortcloud-docs/',
  title: '奥尔特云开发平台',
  description: '奥尔特云开发平台',
  dest: 'public',
  themeConfig:{
    logo: '/logo.png',
    displayAllHeaders: true,
    nav: nav,
    sidebarDepth: 1,
    sidebar: sidebar,
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
}
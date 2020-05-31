const nav = require('./navigator')
const sidebar = require('./sidebar')

module.exports = {
  base: '/oortcloud-docs/',
  title: '奥尔特云文档中心',
  description: '奥尔特云文档中心',
  dest: 'public',
  themeConfig:{
    logo: '/logo.png',
    displayAllHeaders: true,
    nav: nav,
    sidebarDepth: 2,
    sidebar: sidebar,
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
}
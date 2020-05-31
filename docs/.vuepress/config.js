const nav = require('./navigator')
const sidebar = require('./sidebar')

module.exports = {
  base: '/oort_vuepress/',
  title: 'oort_vuepress',
  description: 'oort_vuepress',
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
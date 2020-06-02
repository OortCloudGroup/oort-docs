// module.exports = 'auto'

module.exports = {
      '/guide/overview/': getOverviewSidebar('概述', '应用', '服务', '其他'),
      '/guide/docs/': getDocsSidebar('开始之前', '文档中心'),
      '/guide/UIUE/': getUIUESidebar('概述', 'IOS', 'Android', 'PC'),
      '/guide/application/': getAppSidebar('开始之前', '应用开发规范', '应用开发Demo'),
      '/guide/services/': getServiceSidebar('开始之前', '服务开发规范', '服务开发Demo')
}


function getDocsSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '/',
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'docsIndex'
      ]
    }
  ]
}

function getOverviewSidebar(groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '/guide/overview/index',
        '/guide/overview/quickStart'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '/guide/overview/appIndex',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        '/guide/overview/serviceIndex',
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        '/guide/overview/otherIndex',
      ]
    }
  ]
}

function getUIUESidebar(groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '/',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'IOSIndex',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'androidIndex',
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        'PCIndex',
      ]
    }
  ]
}

function getAppSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '/'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'docs',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'demo',
      ]
    }
  ]
}

function getServiceSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '/'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'docs',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'demo',
      ]
    }
  ]
}
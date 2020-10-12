// module.exports = 'auto'

module.exports = {
      '/guide/overview/': getOverviewSidebar('概述', '应用', '服务', '其他'),
      '/guide/docs/': getDocsSidebar('开始之前', '名词解释', '文档规范', '前端规范', '用户手册'),
      '/guide/UIUE/': getUIUESidebar('开始之前', 'IOS', 'Android', '屏幕尺寸'),
      '/guide/application/': getAppSidebar('开始之前', '应用开发规范', '应用开发Demo'),
      '/guide/services/': getServiceSidebar('开始之前', '服务开发规范', '服务开发Demo')
}


function getDocsSidebar(groupA, groupB, groupC, groupD, groupE) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'docsIndex'
      ]
    },
    {
      title: groupC,
      collapsable: true,
      children: [
        'writeGuide/title',
        'writeGuide/text',
        'writeGuide/number',
        'writeGuide/marks',
        'writeGuide/structure',
        'writeGuide/reference'
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        "frontGuide/guide",
        {
          title: 'html规范',
          collapsable: true,
          children: [
            "frontGuide/html/code",
            "frontGuide/html/note",
            "frontGuide/html/template",
            "frontGuide/html/webapp",
          ]
        },
        {
          title: '图片规范',
          collapsable: true,
          children: [
            "frontGuide/image/format",
            "frontGuide/image/size",
            "frontGuide/image/quality",
            "frontGuide/image/import",
          ]
        },
        {
          title: 'CSS规范',
          collapsable: true,
          children: [
            "frontGuide/css/code",
            "frontGuide/css/note",
            "frontGuide/css/sass",
            "frontGuide/css/reset",
            "frontGuide/css/query",
            "frontGuide/css/webkit",
          ]
        },
        {
          title: '命名规范',
          collapsable: true,
          children: [
            "frontGuide/name/dir",
            "frontGuide/name/image",
            "frontGuide/name/htmlcss",
            "frontGuide/name/classname",
            "frontGuide/js/code",
            "frontGuide/js/language"
          ]
        },
        {
          title: 'JS规范',
          collapsable: true,
          children: [
            "frontGuide/js/code",
            "frontGuide/js/language"
          ]
        },

      ]
    },
    {
      title: groupE,
      collapsable: false,
      children: [
        'appHelpGuide/helpIndex'
      ]
    },
  ]
}

function getOverviewSidebar(groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'quickStart'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'appIndex',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'serviceIndex',
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        'otherIndex',
      ]
    }
  ]
}

function getUIUESidebar(groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
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
        'screenSize',
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
        ''
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
        ''
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

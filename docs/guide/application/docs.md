# 应用开发指南

## jssdk 文档

### 说明
		本文主要说明外部应用如何使用奥尔特云H5标准接口。
### 编写目的

为开发人员提供参考。

### 名称解释

- H5   	特指基于HTML5技术的交互网页应用

- VUE  	一套用于构建用户界面的渐进式JavaScript框架

- JS		JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言

- API		API（Application Programming Interface，应用程序接口）是一些预先定义的函数，或指软件系统不同组成部分衔接的约定。这里特指JS编程接口

- APP		主要指安装在智能手机上的软件

- TOKEN   令牌,交互会话中唯一身份标识符

### 使用方式

1. 在index.html 模板中引入

```js    <script src="./androidFunUtils.js"></script>```

2. 在vue.config.js设置

```jsconfigureWebpack: {    externals: 	{    'androidFunUtils':'androidFunUtils'    }},```

3. 使用

```jsimport androidFunUtils from 'androidFunUtils'```

(注意： 所有的api 都是promise异步的)


## JS 接口列表

### 获取配置

方法	androidFunUtils.getItem(key)

输入参数	key string 

返回参数	Value string

```javascript
// 从本地获取key value
      function getItem() {
        androidFunUtils.getItem('test').then(function(res){
          alert(res)
        })
      }
```


###  保存配置

方法 |  androidFunUtils.setItem(key, vlaue)

输入参数 |	key string 

Value |  string

返回参数 |	无

```javascript
// 保存key value 到本地
      function setItem() {
        androidFunUtils.setItem('test', 'tttt')
      }
```

###  扫描身份证

方法	| androidFunUtils.OcrFunc()

输入参数|	无

返回参数| 	{
  msg: '',
   code: '',
   error: '',
     name: '', //姓名
     sex: '', //性别
     flok: '', // 民族
      birthday: '',//出生日期
      address: '',// 地址
      idcard: '',// 身份证号
      issue: '',// 发证机关
      period: ''//有效期
     }

```javascript
function OcrFunc() {
        androidFunUtils.OcrFunc()
      }
```



###  扫描二维码

方法	 | androidFunUtils.BarcodeScan()

输入参数	| 无

返回参数	 | {
cancelled： false,    // 用户是否取消
text: ''   // 扫描的内容（内容和编码的方案有关）
}

```javascript
// 二维码扫描
      function BarcodeScan() {
        androidFunUtils.BarcodeScan()
      }
```

###  获取当前app登陆的网关地址

方法	| androidFunUtils.getGateway()

输入参数	| 无

返回参数	url string
```javascript
 // 获取当前appd登陆的网关地址
      function getGateway() {
        androidFunUtils.getGateway().then(function(res) {
          alert(res)
        })
      }
```

### 获取当前app登陆的token

方法 |	androidFunUtils.getToken()

输入参数	| 无

返回参数	| token string

```javascript
// 获取当前appd登陆的token
      function getToken() {
        androidFunUtils. getToken().then(function(res) {
          alert(res)
        })
      }
```
 


###  开启调试界面

方法	 | androidFunUtils.startDebug()

输入参数	| 无

返回参数	| 无

```javascript
//  打开调试模式
      function startDebug () {
        androidFunUtils.startDebug().then(function(res) {
          alert(res)
        })
      }
```
 

### 获取当前版本信息

方法	 | androidFunUtils.getAppVersion()

输入参数	| 无

返回参数	| 无

```javascript
//  获取当前apk版本信息
      function getAppVersion () {
        androidFunUtils.getAppVersion ().then(function(res) {
          alert(res)
        })
      }
```


###  退出应用

方法	| androidFunUtils.appExit()

输入参数	| 无

返回参数	| 无

```javascript
//  退出当前应用
      function appExit() {
        androidFunUtils.appExit().then(function(res) {
          alert(res)
        })
      }
```
 


###  获取gps 

方法	| androidFunUtils.getLocation()

输入参数	| 无

返回参数	| {

address: '' //  地址详细
latitude: '' // 经度
longitude:  ''// 纬度
}{

```javascript
//  获取当前地理位置信息
      function getLocation () {
        androidFunUtils.getLocation().then(function(res) {
          alert(res)
        })
      }

```

### 打开应用 

方法	| androidFunUtils.runApp()

输入参数	| apppackage   string   应用编码

返回参数	| 无

```javascript
//  打开应用
      function runApp() {
        androidFunUtils.runApp('com.xiaobangshou.oort').then(function(res) {
          alert(res)
        })
      }
```


###  运行h5链接

方法	| androidFunUtils.runH5App()

输入参数	| url   string   链接地址

返回参数	| 无

```javascript
//  运行h5链接
      function runH5App () {
        androidFunUtils. runH5App ('http://www.baidu.com').then(function(res) {
          alert(res)
        })
      }
```


###  打开应用市场

方法	 | androidFunUtils.startAppStore()

输入参数	| 无

返回参数	| 无

```javascript
//  运行h5链接
      function startAppStore () {
        androidFunUtils.startAppStore().then(function(res) {
          alert(res)
        })
      }
```


###  app token 失效触发

方法	| androidFunUtils.tokenOverdue()

输入参数	| 无

返回参数	| 无

```javascript
//  当前app 用户token失效触发
      function startAppStore () {
        androidFunUtils.tokenOverdue().then(function(res) {
          alert(res)
        })
      }
```


### 返回桌面

方法	| androidFunUtils.goHome()

输入参数	| 无

返回参数	| 无
 ```javascript
 //  返回桌面
      function goHome() {
        androidFunUtils.goHome().then(function(res) {
          alert(res)
        })
      }
```


###  是否允许下拉刷新

方法	| androidFunUtils.canRefresh()

输入参数	| canRefresh  string  // 1 可以刷新  0 不刷新

返回参数	| 无

```javascript
//  应用页面是否允许下拉刷新（一般在应用首页做控制）
      function canRefresh () {
        androidFunUtils.canRefresh().then(function(res) {
          alert(res)
        })
      }
```


###  打开设备默认浏览器（外部浏览器）

方法	| androidFunUtils.InAppwserOpen()

输入参数| 	[
  'http://yunshi.cetccloud.com/download.html',
  '_system',
  'location=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭'
]

返回参数| 	无

 ```javascript
//  打开设备默认浏览器
      function InAppwserOpen (arr) {
        androidFunUtils.InAppwserOpen().then(function(res) {
          alert(res)
        })
      }
```


###  打开直播

方法 | 	androidFunUtils.startLive()

输入参数	| 无

返回参数	| 无

```javascript
//  打开直播
      function startLive () {
        androidFunUtils.startLive().then(function(res) {
          alert(res)
        })
      }
```


### 打开视频播放器

方法	| androidFunUtils.runPlayer()

输入参数	| videoUrl  stirng  // 播放视频链接

返回参数	| 无

```javascript
//  打开直播
      function runPlayer (arr) {
        androidFunUtils.runPlayer(arr).then(function(res) {
          alert(res)
        })
      }
```

### 获取打开的应用信息

方法	| androidFunUtils.getAppInfo()

输入参数	| 五

返回参数	| appInfo   Object 

```javascript
//  获取打开的应用信息
      function getAppInfo () {
        androidFunUtils.getAppInfo().then(function(res) {
          alert(res)
        })
      }
```


## js 事件列表

### 容器完成初始化时触发

```javascript
document.addEventListener('deviceready', function () {
    console.info("容器完成初始化时触发");
}, false);
```

### 设备物理返回或者返回键触发事件

```javascript
document.addEventListener('backbutton', function () {
    console.info("后退键被点击");
}, false);
```

### 应用退到后台或者挂起触发

```javascript
document.addEventListener('pause', function () {
    console.info("Cordova应用被挂起时触发");
}, false);
```

### 应用转到前台触发

```javascript
document.addEventListener('resume', function () {
    console.info("在被挂起的应用转到前台时触发");
}, false);
```


### 设备失去网络连接时触发

```javascript
document.addEventListener(‘offline’, function () {
    console.info("在被挂起的应用转到前台时触发");
}, false);
```

###  设备失去网络连接转换为连接状态触发

```javascript
document.addEventListener('online', function () {
    console.info("在被挂起的应用转到前台时触发");
}, false);
```

# 名词解释


## **A**



### **AES**

高级加密标准（Advanced Encryption Standard，缩写：AES），是目前对称密钥加密中比较通用的一种加密方式。速度快，安全级别高，支持128、192、256、512位密钥的加密。



请参考 [AES 加密说明](https://docs.open.alipay.com/common/104567)。





### **Android**

安卓（Android）是一种基于 Linux 的自由及开放源代码的操作系统。主要使用于移动设备，如智能手机和平板电脑，由 Google 公司和开放手机联盟领导及开发。



API 在 Android 与 iOS 系统中兼容的问题，请参考 [兼容](https://opendocs.alipay.com/mini/framework/compatibility)。





### **API**

API（Application Programming Interface，应用程序接口）是一些预先定义的函数，或指软件系统不同组成部分衔接的约定。目的是提供应用程序与开发人员基于某软件得以访问一组例程的能力，而又无需访问原码，或理解内部工作机制的细节。





### **APPID**

支付宝分配给开发者的应用 ID，是应用的唯一标示，只有应用创建后才可以获取，详见 [查看 APPID](https://opendocs.alipay.com/open/200/105310#查看 APPID)。



### **app_auth_code**

第三方应用授权码，用于换取 app_auth_token，详见 [第三方应用授权](https://opendocs.alipay.com/isv/10467/xldcyq)。





### **app_auth_token**

第三方应用授权获取的 token，用于 ISV 代商户发起请求，详见 [第三方应用授权](https://opendocs.alipay.com/isv/10467/xldcyq)。

### **auth_code**

临时授权码，一次有效，auth_code 有效期为 3 分钟到 24 小时（开放平台规则会根据具体的业务场景动态调整 auth_code 的有效期，但是不会低于 3 分钟，同时也不会超过 24 小时），超过有效期的 auth_code 即使未使用也将无法使用。

用户的每次授权动作都会生成一个新的 auth_code。



## **B**



### **B2C**

商对客电子商务模式（Business-to-Consumer）是指电子商务的一种模式，也是直接面向消费者销售产品和服务商业零售模式。



### **BaaS**

后端即服务（Backend as a Service），向开发者提供后端基础功能，通过 API 方式进行调用。例如文件存储、数据库、消息等。



### **Base64**

一种基于 64 个可打印字符来表示二进制数据的方法。





### **白名单**

对用户状态进行标识的方式。与“黑名单”相对的概念，当用户被设置在白名单内的时候，该用户能够通过；反之，则不能通过。





## **C**



### **C2C**

个人与个人之间的电子商务（customer to customer）。例如，淘宝网。





### **CDN**

内容分发网络（Content Delivery Network）。CDN 是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。





### **CSS**

层叠样式表（Cascading Style Sheets）是一种用来表现 HTML（标准通用标记语言的一个应用）或 XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS 不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

支付宝小程序提供的 ACSS 语言是 CSS 语言基础上的扩充。





## **D**



### **DOM**

文档对象模型，是 W3C 制定的标准接口规范，是一种处理 HTML 和 XML 文件的标准 API。DOM 提供了对整个文档的访问模型，将文档作为一个树形结构，树的每个结点表示了一个 HTML 标签或标签内的文本项。DOM 树结构精确地描述了 HTML 文档中标签间的相互关联性。将 HTML 或 XML 文档转化为DOM树的过程称为解析（parse）。HTML 文档被解析后，转化为 DOM 树，因此对 HTML 文档的处理可以通过对 DOM 树的操作实现。DOM 模型不仅描述了文档的结构，还定义了结点对象的行为，利用对象的方法和属性，可以方便地访问、修改、添加和删除 DOM 树的结点和内容 。





### **DEBUG**

DEBUG 是 IDE 中供开发者使用的程序调试工具，可以用它检查内存中任何地方的字节以及修改任何地方的字节。它可以用于逐指令执行某个程序以验证程序运行的正确性，也可以追踪执行过程、比较一个指令执行前后的值以及比较与移动内存中数据的范围，读写文件与磁盘扇区。





### **decryptKey**

AES 解密密钥，用于解密获取到的会员手机号，详见 [AES 密钥解密](https://opendocs.alipay.com/open/common/104567#响应报文解密)。



### **第三方应用**

支付宝开放平台提供给系统服务商（ISV）的一种应用类型，ISV 通过创建第三方应用代替没有开发能力的商户接入支付宝开放平台的多种业务能力：代替商户开发小程序、生活号；代替商户的网页应用和移动应用调用支付宝开放平台提供的服务端接口（OpenAPI），详见 [第三方应用概念详解](https://opendocs.alipay.com/isv/00ph2h#第三方应用)。

### **断点调试**

编辑器中常见调试方法，在程序的某一行设置一个断点，调试时，程序运行到这一行就会停住，然后可以一步一步往下调试，调试过程中可以看各个变量当前的值，出错的话，调试到出错的代码行即显示错误，停下。









## **F**



### **FaaS**

函数即服务（Function as a Service），允许开发者直接将程序部署到平台上，以函数作为最小单元，通过 API 方式进行调用。



### **服务市场**

系统服务商（ISV）在支付宝开放平台开发应用功能，并将功能包装为服务进行发布，发布后服务会进入 [服务市场 ](http://myfw.alipay.com/commodity/v2/ant/merchandise/index.htm)进行售卖。服务市场的服务可供蚂蚁金服商家订购，详见 [服务市场介绍](https://opendocs.alipay.com/open/207/105253)。





## **G**



### **国密**

国家密码局认定的国产密码算法，即商用密码。支付宝开放平台开发助手使用的是国密 SM3WithSM2 算法。





### **公钥证书**

支付宝开放平台提供对 X.509 格式证书的支持，开发者上传证书后，后续在和支付宝开放平台交互过程中支付宝会尝试使用该证书进行报文验签；资金类接口必须使用公钥证书模式加签。详见 [生成公钥证书说明](https://opendocs.alipay.com/open/291/105971#公钥证书方式)。





## **H**



### **花呗分期**

小程序的能力之一，花呗分期是蚂蚁金服推出的消费金融产品，用户在商家端网站或线下门店购物时使用花呗分期支付，订单全额实时支付到商家支付宝账户中，用户分期偿还花呗。



请参考 [花呗分期](https://opendocs.alipay.com/mini/introduce/antcreditpay-istallment)。





## **I**



### **IDE**

集成开发环境（Integrated Development Environment ）是用于提供程序开发环境的应用程序，一般包括代码编辑器、编译器、调试器和图形用户界面等工具。

支付宝小程序文档中的 IDE 通常指的是支付宝小程序开发者工具。



请参考 [开发工具](https://opendocs.alipay.com/mini/ide)。





### **iOS**

iOS 是由苹果公司开发的移动操作系统 。苹果公司最早于 2007 年 1 月 9 日的 Macworld 大会上公布这个系统，最初是设计给 iPhone 使用的，后来陆续套用到 iPod touch 、iPad 以及 Apple TV 等产品上。





### **IoT**

物联网（The Internet of Things，缩写 IOT，IoT）。是互联网基础上的延伸和扩展的网络，将各种信息传感设备与互联网结合起来而形成的一个巨大网络，实现在任何时间、任何地点，人、机、物的互联互通。



了解更多关于支付宝 IoT 小程序的介绍，请参考 [支付宝 IoT 小程序](https://opendocs.alipay.com/mini/multi-platform/vcs0fv) 。





### **IoT 大屏自助设备小程序**

IoT 大屏自助设备小程序是指可在 [支付宝认证的大屏自助设备](https://opendocs.alipay.com/open/00g3k1) 上开发的 IoT 小程序。





### **IoT 蜻蜓小程序**

IoT 蜻蜓小程序是指为 蜻蜓系列设备开发的[ IoT 小程序](https://opendocs.alipay.com/mini/multi-platform/vcs0fv)。根据蜻蜓系列设备的单屏和双屏分为 IoT 单屏蜻蜓小程序和 IoT 双屏蜻蜓小程序。



请参考[ IoT 蜻蜓小程序开发](https://opendocs.alipay.com/mini/multi-platform/iot-dragonfly)。





### **IoT 设备所有者**

IoT 设备所有者指具备设备签约关系的角色，设备所有者具备对分发小程序到设备的权限。



### **IoT 如意小程序**

IoT 如意小程序是支付宝 IoT 小程序在如意设备（支付宝盒 R0：[点击购买](https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-21563735518.34.55797303LgxG0c&id=603245815822&rn=4a480c8051d82abfb09df68ebab1fdd5&abbucket=6&skuId=4392223994258)；支付宝盒 R0 生态版：[点击购买](https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.61c0687dSBpyBi&id=608659359682)）上的实现。

### **IoT 双屏小程序**

IoT 双屏小程序是指针对具有前后两个交互屏幕的蜻蜓设备开发的小程序，需要同时开发前屏和后屏两个小程序，分别推送到前后两个屏幕上。



请参考 [IoT 双屏小程序开发](https://opendocs.alipay.com/mini/008wna)。





### **IoT 双屏蜻蜓小程序**

IoT 双屏蜻蜓小程序是指针对具有前后两个交互屏幕的蜻蜓设备开发的小程序，需要同时开发前屏和后屏两个小程序，分别推送到前后两个屏幕上。目前支持 **IoT 双屏蜻蜓小程序** 的设备有**支付宝盒 F4 Plus** 机型。



请参考[ IoT 双屏蜻蜓小程序开发](https://opendocs.alipay.com/mini/008wna)。



### **IoT 双屏桌面收银机小程序**

IoT 双屏桌面收银机小程序是指可在 [支付宝认证的双屏桌面收银机设备](https://opendocs.alipay.com/open/00g3k1) 上开发的小程序，需要同时开发商户屏和顾客屏两个小程序，分别推送到前后两个屏幕上。



### **IoT 小程序**

支付宝 **IoT 小程序** 是实现 IoT 设备二次开发的一种方法。类似支付宝小程序，IoT 小程序开放了一系列的 [API](https://opendocs.alipay.com/mini/multi-platform/iftqqu) 和 [组件](https://opendocs.alipay.com/mini/multi-platform/vh69pt)，并且 IoT 小程序与支付宝小程序共享一个容器和一套消息，共享大部分组件。开发者可以快速开发一个 IoT 小程序，定制 IoT 设备功能，满足各行业个性化的需求。

IoT 系列设备的详细介绍请参考 [IoT 官网](https://iot.open.alipay.com/)。

**IoT 小程序**：IoT 小程序分为 IoT 单屏小程序和 IoT 双屏小程序，分别对应只有一个显示屏幕和具有前后两个屏幕的 IoT 设备。

目前支持 IoT 小程序开发的有蜻蜓系列设备，更多开发内容请参考：[IoT 蜻蜓小程序开发](https://opendocs.alipay.com/mini/multi-platform/iot-dragonfly) 和 [IoT 双屏蜻蜓小程序开发](https://opendocs.alipay.com/mini/008wna)。



### **IoT 小程序 API**

IoT 小程序 API 是指 IoT 小程序特有的 API，IoT 小程序的 API 是以 my.ix 开头，对于支付宝小程序或其他端的应用不适用。

IoT 小程序 API 根据开放的能力进行分类，分为基础能力、支付能力、会员能力、语音能力、连接收银机能力和外设接入能力。



请参考 [IoT 小程序 API 概述](https://opendocs.alipay.com/mini/multi-platform/iftqqu)。





### **IPv6**

互联网协议第6版（Internet Protocol Version 6），互联网工程任务组（IETF）设计的用于替代IPv4的下一代IP协议。





### **ISV**

ISV（Independent Software Vendors） ，意为“独立软件开发商”或“系统服务商”。在小程序中，ISV 通常扮演代理商户开发或运营生活号，小程序和 网页&移动应用 的角色。





## **J**



### **JavaScript**

JavaScript 是一种属于网络的脚本语言，已经被广泛用于 Web 应用开发，常用来为网页添加各式各样的动态功能，为用户提供更流畅美观的浏览效果。





### **JSAPI**

原生 API（JSAPI）按实现的功能分类，可分为界面、多媒体、缓存、文件、位置、网络、设备、数据安全、分享、收藏、自定义通用菜单、小程序当前运行版本类型、自定义分析、更新管理等 14 个大类。



请参考[ API 概览](https://opendocs.alipay.com/mini/api)。





### **JSON**

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式。易于人阅读和编写，同时也易于机器解析和生成。





### **接口代调用**

主要应用于三方业务中商户将应用授权给系统服务商（ISV），ISV 代替商户进行某些接口的调用，详见 “代商户调用接口”。





## **K**



### **开发者模式**

开发者模式是指蜻蜓设备的开发调试模式，进入该模式后，蜻蜓设备可以被 IDE 识别为在线状态，IoT 小程序可以推送到设备上进行调试。



请参考 [IoT 小程序开发调试](https://opendocs.alipay.com/mini/multi-platform/vdkmxa)。



### **开放能力**

商户的应用在接入支付宝开放平台后实现的业务功能。支付宝开放平台通过官方的 SDK（软件开发包）、API（接口，包含服务端接口 OpenAPI 和 JSAPI）和开放平台控制台等技术基础设施，将支付宝的一些业务功能开放给外部的商户，入当面付，小程序支付，小程序视频播放。商户在接入支付宝的能力后，即可在自己的应用中实现这些功能。详见 [能力概念详解](https://opendocs.alipay.com/isv/00ph2h#能力%26能力列表)。

### **开放平台**

[支付宝开放平台](https://open.alipay.com/platform/home.htm)，致力于为开发者提供支付、理财、信用、口碑开店、安全、营销、社交等各类能力及行业解决方案,在这里可以找到开发者、服务商、渠道商需要的各种能力等。





### **可视化编程面板**

小程序 IDE 引入了设计模式，提供了可视化设计面板，让开发者可以通过拖拽的方式快速进行界面布局，同时支持代码和设计布局进行双向实时同步，使得小程序开发更加迅捷、简单和灵活。我们称之为可视化辅助编程，因为我们的目标不是取代编码本身，而是减少非必要的和重复的手工编码工作。可视化设计面板支持支付宝小程序所有的基础组件、扩展组件和自定义组件，供开发者灵活选择与使用。





### **控制台**

也称“应用控制台”，通常是指开放平台的应用管理中心，开发者可以在应用管理中心中查看并管理应用的功能开发等信息。





## **L**



### **LBS**

基于位置的服务（Location Based Services，LBS），利用各类型的定位技术来获取定位设备当前的所在位置，通过移动互联网向定位设备提供信息资源和基础服务。





## **M**



### **Mustache**

Mustache 是一个简单强大的 JavaScript 模板引擎。通过用户预定义的 AXML 模板动态构建页面，避免了页面全局刷新，给用户更好的体验。





### **模板消息**

小程序的能力之一，商家可以使用模板消息功能消息高效触达用户，把交易状态变更、物流进度更新等消息通知给用户。当用户在小程序内完成支付，或者当用户在小程序内提交表单后，商家可以在 7 天内给用户发送不超过3条的模板消息通知（目前仅支持文字消息）。模板消息会发送到支付宝app首页的服务提醒中，模板消息可以关联小程序的指定页面，通过用户点击消息回访小程序进而查看更多内容。



请参考 [模板消息](https://opendocs.alipay.com/mini/introduce/message)。





## **N**



### **Native**

Native 是一个计算机函数，一个 Native Method 就是一个 Java 调用非 Java 代码的接口。方法的实现由非 Java 语言实现，比如 C 或 C++。





## **O**



### **OAuth2.0**

OAuth2.0（开放授权）是一个关于授权的开放的网络协议。允许用户让第三方应用访问该用户在某一网站上存储的的资源（如：照片，视频，联系人列表），而无需将用户名和密码提供给第三方应用。





### **Open API**

开放能力 API（Open API）是支付宝开放平台封装在标准的 SDK 中；通过 OpenAPI，商户或者 ISV 的服务端和支付宝的服务端实现交互，以实现多种开放平台提供的业务功能，如支付，营销和各行业中的业务场景

点击了解更多各类丰富的 [Open API](https://docs.open.alipay.com/api) 。





## **P**



### **PID**

合作者身份ID（PID）是商户与支付宝签约后，商户获得的支付宝商户唯一识别码。





### **POI 级别**

Point of Interest，兴趣点，在地理信息系统中，一个 POI 可以是一栋房子、一个商铺、一个邮筒、一个公交站等。





## **Q**



### **轻会员**

轻会员是一款轻量级的差异化会员营销工具，可让用户“先享受权益，后支付会员费”，体验作为轻会员和普通会员之间的差异化服务，使商家会员经营更简单，促进会员留存和复购。



请参考 [轻会员](https://opendocs.alipay.com/mini/introduce/newmember)。





### **蜻蜓独立收银模式和连接收银机模式**

蜻蜓独立收银模式和连接收银机模式就是蜻蜓设备在 [分发](https://opendocs.alipay.com/mini/multi-platform/iot-service-delivery) IoT 小程序之前具有的两种收银功能。这两种模式可以直接绑定收款账户，通过蜻蜓刷脸或扫码完成收银。

请参考 [蜻蜓设备和 IoT 小程序与收款账户之间的关系](https://opendocs.alipay.com/mini/00db9u)。



### **蜻蜓电子海报**

商家可以通过蜻蜓屏幕，实时生成电子海报或视频，并可以分分钟在后台推动到门店的蜻蜓设备上，可以大幅度提高商家物料的下发速度以及内部沟通成本，同时蜻蜓屏幕在收银台位置，可以帮助商家更好的传递到用户商家活动信息。



请参考 [poster 电子海报](https://opendocs.alipay.com/mini/multi-platform/vh69pt)。





### **蜻蜓开发机**

蜻蜓开发机是指开发 IoT 小程序时作为小程序功能调试的蜻蜓设备。蜻蜓设备通过小程序容器开发者模式绑定 APPID 后，则被视为蜻蜓开发机。



请参考 [IoT 小程序开发调试](https://opendocs.alipay.com/mini/multi-platform/vdkmxa)。





### **蜻蜓设备系统**

蜻蜓设备系统 是蜻蜓设备的基本运行系统，蜻蜓设备系统在 2.1.0.20190727XXXXXX 及以上版本集成了 小程序容器。小程序容器 是用于支持 IoT 小程序在蜻蜓系统内运行的 APP。蜻蜓设备在开机联网状态下会自动下载最新的系统软件包。设备在开机和重启时，检测到已下载完成的系统包将自动进入安装升级流程。此外，每日凌晨，处于开机状态的设备会自动进入安装升级流程。自动升级暂不支持手动关闭。

 请参考 [IoT 蜻蜓小程序开发](https://opendocs.alipay.com/mini/multi-platform/iot-dragonfly)。





### **蜻蜓系列设备**

支付宝盒-F1、支付宝盒-F4、蚂里奥刷脸设备T1A、商米刷脸设备T3B00 、支付宝盒F4H、支付宝盒F4 plus等，统称为蜻蜓系列设备。



请参考 [IoT 蜻蜓小程序开发](https://opendocs.alipay.com/mini/multi-platform/iot-dragonfly)。





### **蜻蜓小指令**

蜻蜓小指令是实现蜻蜓与其他收银设备联动的一种方法。其他收银设备可以向蜻蜓发送小指令唤起对应的程序，同时蜻蜓可以通过小指令发送数据到其他收银设备。



请参考 [蜻蜓小指令接入指南](https://opendocs.alipay.com/mini/multi-platform/crtlbn)。





### **蜻蜓应用**

蜻蜓应用是承载蜻蜓标准收银（包括独立收银和连接收银机收银）和电子海报等功能的 APP。



请参考 [蜻蜓应用版本说明](https://opendocs.alipay.com/mini/multi-platform/snf6v6)。





## **R**



### **ROM**

只读存储器（Read-Only Memory），是一种只能读出事先所存数据的固态半导体存储器。其特性是一旦储存资料就无法再将之改变或删除。通常用在不需经常变更资料的电子或电脑系统中，并且资料不会因为电源关闭而消失。



### **RSA**

RSA 签名算法是一种非对称算法，RSA 密钥包括公钥和私钥两部分，公钥是公开信息，私钥是保密信息。在开放平台，开发者的私钥由开发者自己保存；开发者的公钥可对外公开。私钥用于签名，公钥用于验签。开发者保存自己的私钥，并对发给支付宝的信息进行签名，支付宝通过使用开发者的公钥进行验签；（支付宝端类似），通过这种方式保证信息传输的完整性以及发送者身份的真实性。 目前支付宝开放平台新建的应用仅支持 RSA2 的签名方式，原使用 RSA 密钥的应用可以更换密钥进行升级；点击了解更多 [RSA2 和 RSA 的区别](https://opendocs.alipay.com/open/291/106115)。



### **热启动**

当用户打开已经关闭但仍处于后台运行的小程序时，称为热启动。在这种情况下，小程序并不会被销毁后重启，而仅是从后台切换到前台，此时，[onShow](https://opendocs.alipay.com/mini/framework/page-detail#Page(object%3A Object)) 函数会触发，[onLaunch](https://opendocs.alipay.com/mini/framework/page-detail#Page(object%3A Object)) 回调函数不会被触发。





## **S**



### **SDK**

软件开发工具包（Software Development Kit），是为特定的软件包、软件框架、硬件平台、操作系统等建立应用软件时的开发工具的集合；开放平台为广大开发者提供了标准的封装好的 SDK，详见 [SDK&Demo](https://opendocs.alipay.com/open/54/103419) 文档。





### **Serverless**

Serverless 是指由第三方负责后端的基础架构和设施，以服务的方式向开发者提供所需功能。开发者不再需要考虑服务器的问题，计算资源作为服务而不是服务器的概念出现，开发者只需要专注于代码和业务，快速迭代，更快速地开发软件。



Serverless 包含了以下领域：

• BaaS：后端即服务（Backend as a Service），向开发者提供后端基础功能作为服务，通过 API 方式进行调用。比如：文件存储、数据库、消息等。

• FaaS：函数即服务（Function as a Service），允许开发者直接将程序部署到平台上，以函数作为最小单元，通过 API 方式进行调用。





### **SJS**

SJS（safe/subset javascript）是小程序一套自定义脚本语言，可以在 AXML 中使用其构建页面结构。

SJS 是 JavaScript 语言的子集，与 JavaScript 是不同的语言，其语法并不与 JavaScript 一致，请勿将其等同于 JavaScript。

请参考 [SJS 介绍](https://opendocs.alipay.com/mini/framework/sjs)。





### **SPI**

Service Provider Interface，外部服务商接口 ，支付宝开放平台调用第三方系统服务提供的接口，实现和不同软件服务商的协同，扩展更多的生态场景，丰富开放平台提供的产品能力。





### **商户会员卡**

小程序的能力之一，会员卡产品是商户营销的基础能力，满足商户对于持有会员卡用户的营销需求。



请参考 [商户会员卡](https://opendocs.alipay.com/mini/introduce/card)。





### **刷脸核身**

刷脸核身是指通过刷脸获取用户的支付宝 user_id 来核实用户身份的功能。

刷脸核身为 IoT 小程序容器 10.1.60.20-18 版本开始提供支持，且要求蜻蜓应用 2.8.1 及以上版本。



请参考 [my.ix.faceVerify](https://opendocs.alipay.com/mini/multi-platform/is88c6)。





### **刷脸认证**

通过设备扫描使用者面部信息进行身份验证，目前该功能已升级为支付宝身份验证。



请参考 [支付宝身份验证](https://opendocs.alipay.com/open/20181012100420932508/intro)。





### **生命周期**

生命周期就是一个对象的生老病死，通常指程序从创建、开始、暂停、唤起、停止、卸载的过程。

小程序的生命周期又可分为应用生命周期和页面的生命周期。





### **事件监听型 API**

事件监听型 API 以 my.on 开头，用于监听某个系统事件是否触发。

事件监听型 API 接受一个 callback 回调函数作为参数。当具体事件触发时，会触发 callback 函数调用。该 callback 函数可以传给对应以 my.off 开头的同名 API 来解除监听关系，如果直接调用以 my.off 开头的同名 API 则解除所有监听关系。

以上为通用说明，特定 API 的入参及返回值以 API 文档为准。



请参考 [API 概览](https://opendocs.alipay.com/mini/api)。





### **沙箱环境**

蚂蚁沙箱环境（Beta） 是协助开发者进行接口功能开发及主要功能联调的辅助环境。沙箱环境模拟了开放平台部分产品的主要功能和主要逻辑（当前沙箱支持产品请参考“[沙箱支持产品列表](https://docs.open.alipay.com/200/105311/#s2)”）。



请参考 [沙箱环境使用说明](https://docs.open.alipay.com/200/105311/)。





### **收银台**

收银台是 IoT 小程序集成刷脸支付和扫码支付功能的主要 API，要求 蜻蜓应用 2.8.1 及以上版本。



请参考 [my.ix.startApp（刷脸支付/扫码支付）](https://opendocs.alipay.com/mini/multi-platform/ltz60x)。





### **收银台操作指令**

收银台操作指令是指控制在收银台界面上刷脸、扫码等功能开关的指令。



请参考 [收银台操作指令](https://opendocs.alipay.com/mini/multi-platform/ltz60x#收银台操作指令)。





## **T**



### **同步型功能 API**

功能型 API 是不以 my.on 或 my.off 开头的 API，用于实现某个特定功能。功能型 API 可分为异步型 API 和同步型 API。以 Sync 结尾的 API 都是同步型功能 API，例如 [my.setStorageSync](https://opendocs.alipay.com/mini/api/cog0du)、[my.getBatteryInfoSync ](https://opendocs.alipay.com/mini/api/vf7vn3)等。



同步型功能 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常：



JavaScript

- [JavaScript](javascript: void 0)
- [ACSS](javascript: void 0)
- [AXML](javascript: void 0)
- [JSON](javascript: void 0)
- [JAVA](javascript: void 0)
- [PHP](javascript: void 0)
- [C#](javascript: void 0)
- [Shell](javascript: void 0)
- [Python](javascript: void 0)

```undefined
try {  my.setStorageSync('key', 'value')} catch (e) {  console.error(e)}
```

以上为通用说明，特定 API 的入参及返回值以详细 API 文档为准。





### **调试器**

小程序 IDE 调试器用于模拟器调试、真机调试、性能调试，可分为 Console、Sources、AXML、Storage、Network、Data、Performance 七个模块。小程序 IDE 调试器支持断点调试。





## **U**



### **UGC**

User Generated Content，用户在使用小程序过程产生用户原创内容。





### **user-id**

同一用户在支付宝产品中的user_id都是一样的，以2088开头的16位数字，是用户在支付宝的唯一标识 。





### **uni-app**

uni-app 跨平台开发扩展支持在阿里云小程序开发者工具中将 uni-app 工程编译为微信小程序，并同时打开微信开发者工具。



请参考 [uni-app 跨平台开发扩展](https://opendocs.alipay.com/mini/ide/uni-app)。





### **user_token**

UID 弹窗发券中用于当次发券的临时 token 令牌值，对应用户确认领券时会生成并回传给商家。





### **UTC**

在国际无线电通信场合，为了统一，使用同一时间，称为通用协调时（UTC, Universal Time Coordinated）。





## **W**



### **WebAssembly**

WebAssembly 是一个新的 Web 标准，它定义了网页中的可执行代码的二进制格式和相应的类似汇编语言格式。他的目标是使执行代码几乎与本地机器代码一样快，它被用来作为 JavaScript 的补充，以加速 Web 应用程序的性能关键部分。





### **WebView**

网络视图，能加载并显示网页，可以将其视为一个浏览器。主要用于展示网络请求后的内容，就是将网络地址请求的内容展示在里面。

支付宝小程序提供 web-view 组件来实现该功能。



请参考 [web-view H5 页面承载](https://opendocs.alipay.com/mini/component/web-view)。





### **worker**

worker 是小程序运行架构的一部分。小程序运行架构分为 webview 和 worker 两个部分，worker 则负责存储数据和执行业务逻辑。





## **X**



### **小程序二维码**

小程序的能力之一，在用户扫一扫小程序二维码后，可以打开小程序并跳转到二维码指定的页面。商家在线上和线下推广业务时，可以把小程序二维码加入到用于传播的广告图、海报或商品上，引导用户进入小程序体验服务。



请参考 [小程序二维码](https://opendocs.alipay.com/mini/introduce/qrcode)。





### **小程序胶囊按钮**

小程序页面中右上角胶囊状的按钮。左部分包含关于、分享、帮助等功能的菜单；右部分是关闭小程序的按钮。

胶囊按钮不支持自定义修改。





### **小程序框架**

小程序提供了一套简单高效的开发框架，让开发者可以在支付宝中开发具有原生 App 体验的服务。

整个小程序框架系统分为两部分：逻辑层（App Service）和 视图层（View）。小程序提供了自己的视图层描述语言 AXML 和 ACSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。





### **小程序基础库**

小程序基础库是负责框架的加载的容器，提供小程序框架需要的标准组件和标准 API 接口。



请参考 [基础库](https://opendocs.alipay.com/mini/framework/lib)。



### **小程序模板**

系统服务商（ISV）在 “模板开发**”** 模式 下，代替商户开发小程序的基础，是商户小程序实例化之前的状态。在 “模板开发**”** 模式 下，ISV 通过 第三方应用 和 小程序模板 代替商户开发小程序，两者都是 ISV 代商家实现开发的桥梁，详见 [小程序模板图解](https://opendocs.alipay.com/isv/00ph2h#小程序模板)。

### **小程序容器**

小程序容器 是用于支持 IoT 小程序在蜻蜓系统内运行的 APP，蜻蜓设备开机、重启或闲置30分钟后会自动检查最新软件版本并下载安装。自动升级暂不支持手动关闭。可以通过 my.ix.getVersion查询当前设备小程序容器版本。



请参考 [小程序容器版本说明](https://opendocs.alipay.com/mini/multi-platform/wwmkpy) 。





### **小程序云**

小程序云是阿里云面向小程序场景提供的一站式云服务，帮助开发者实现一云多端的业务战略。开发者可通过小程序云支撑各类小程序前端，在一朵云内实现统一的资源管理、统一的数据运营和统一的业务设计。



请参考 [开通小程序云](https://opendocs.alipay.com/mini/cloudservice/aban9r)。





### **小程序支付**

小程序的能力之一，用户可以在小程序内唤起支付宝收银台进行支付。



请参考 [小程序支付](https://opendocs.alipay.com/mini/introduce/pay)。





### **小程序组件**

小程序视图控件，开发者可以通过组合组件进行业务开发。





### **小额免密支付**

小额支付无须密码和消费者签名即可完成，每笔小于等于 1000 元的订单可以“免密支付”。





### **小蚂哥**

小蚂哥是支付宝开放平台提供的 24 小时智能问答机器人，打开 [小蚂哥](https://cschannel.alipay.com/newPortal.htm?scene=kfpthzgl&token=&pointId=&enterurl=https%3A%2F%2Fdocs.open.alipay.com%2F300%2Fsq053e%3Fmode%3Drt) 聊天界面，输入中文提问，即可获得智能推荐的回答。





## **Y**



### **异步通知**

商家或系统服务商（ISV）在接入支付和部分其他功能（如转账和红包功能）时，当商户完成请求部分 API 后，支付宝会将该操作的变更信息（如订单信息的变更），沿着商户在接口请求参数中所传入的异步通知地址 notify_url，通过 POST 请求的形式将结果作为参数通知到商户系统。

不同的产品会有不同的异步通知，详情可参见具体接入文档。以当面付能力为例，参考[当面付的异步通知](https://opendocs.alipay.com/open/194/103296)；您还可以参考[更多异步通知的说明](https://opensupport.alipay.com/support/helpcenter/193/201602472200?ant_source=zsearch)。



### **云服务**

每个 Basement 服务空间都会有独立的部署在云端的功能服务，称之为云服务。可以在客户端中通过关联或配置配置文件匹配某个空间的服务。





### **云函数**

云函数支持使用 Node.js 进行开发。开发者可以将代码提交到云端运行，在客户端使用 Basement 提供的 API 进行调用，还可以在云函数中直接通过 API 调用数据存储和文件存储的服务资源。





### **预审核**

通常指 “小程序预审核”，能够帮助开发者在小程序正式提审前全面检测小程序审核指标、更多地暴漏小程序功能及性能等问题，提高审核通过率。预审核任务触发时，小程序云将自动申请一台免费真机测试设备，模拟用户的操作方式对小程序进行智能遍历。预审核任务在上传小程序时并发执行，不阻塞其他操作。



请参考 [预审核](https://opendocs.alipay.com/mini/ide/pretest)。





### **页面生命周期**

小程序的页面生命周期是指程序内部某个页面从进入到离开或某个页面到另一个页面的过程。



请参考 [页面生命周期](https://opendocs.alipay.com/mini/framework/page-detail#页面生命周期)。





### **页面栈**

小程序框架通过一个页面栈的设计来管理所有的界面，可以使用 getCurrentPages().length 查看当前页面栈页面深度，小程序规定最多不能超过 10 层页面栈。



请参考 [getCurrentPages 方法](https://opendocs.alipay.com/mini/framework/getcurrentpages)。





### **云应用**

小程序云应用是面向小程序应用场景，为开发者提供的一键构建后端应用运行环境、后端服务部署、运维监控等能力的一站式小程序部署服务。



请参考 [小程序云应用产品介绍](https://opendocs.alipay.com/mini/cloudservice/zwixbr)。





### **应用**

开发者以软件形式向用户提供的特定场景或行业解决方案。具备开发能力的商户或系统服务商（ISV）入驻开放平台后，需要通过创建应用的方式接入支付宝的各种能力（如当面付、开店、发券、服务窗、余利宝等）并进行开发，基于对行业及业务场景的理解，创造能够满足市场需要的解决方案，以应用的形式服务用户。详情请参考 [创建应用](https://docs.open.alipay.com/200/105310/)。

支付宝开放平台目前支持四种应用类型接入：网页&移动应用、生活号、小程序和第三方应用。



### **应用生命周期**

应用生命周期指得是应用本身的初始化加载、方法以及最终被销毁的过程，如小程序的生命周期可参考 [小程序生命周期](https://opendocs.alipay.com/mini/006kyi#小程序快速开始)。





### **应用网关**

即 notify_url，用于接收支付宝异步通知，例如口碑开店中，需要配置此网关来接收开发者门店被动通知。





## **Z**



### **支付宝根证书SN**

支付宝根证书SN（alipay_root_cert_sn），支付宝根证书文件路径必须为商户在小程序后台中上传公钥后，在“接口加密方式”中的“支付宝根证书”位置，点击“下载证书”。





### **支付宝卡包**

小程序的能力之一，支付宝卡包（Alipass），是支付宝公司推出的一款可以管理电子凭证的产品；该产品聚合来自各类生活服务的票据凭证，包括优惠券、折扣券、代金券、换购券、电影票、演出票、火车票、机票。



蜻蜓采用全新3D结构光摄像头，立体扫描+AI算法，轻松实现99.99%金融级安全识别度；超大广角采集人脸，无论逆光侧光，同样清晰；识别速度快如闪电，人脸1秒识别，条码与二维码更不在话下。



蜻蜓超薄机身，小巧底座，即插即用，只要有USB接口，便无需改造商家ERP系统；扫脸扫商品，一屏全搞定，CRM运营一机掌握；软硬件结合开展会员身份运营，前景更广阔。

蜻蜓不仅省去了用户掏出手机扫描二维码的步骤，甚至用户前往经常出没的场景如便利店、超市，系统均可通过智能算法支持消费者直接刷脸支付，解决了忘带手机、手机没电等窘迫环境下的支付问题。





### **真机调试**

真机调试指的是模拟小程序在真实手机上运行，用各种手段进行查错和排错，以测试小程序功能开发的完成。



小程序 IDE 提供远程真机调试功能，利用这个功能，您可以：

• 在 IDE 中断点调试远程小程序

• 在 IDE 中查看远程界面的 AXML 结构与样式

• 在 IDE 中查看手机 Network & Storage 等信息


请参考 [真机调试](https://opendocs.alipay.com/mini/ide/remote-debug)。





### **真机云测**

真机云测是支付宝开放平台免费提供的一套完整的小程序云真机自动化检测方案，能够帮助开发者全面地检测小程序缺陷，评估产品质量，提高审核通过率。

在小程序交付到真实用户之前，您可以通过 IDE 申请云测试，执行测试后查看自动生成的测试报告，检测小程序缺陷。



请参考 [真机云测](https://opendocs.alipay.com/mini/ide/rpvau0)。





### **智能客服**

小程序智能客服是基于蚂蚁金服“人工智能技术+支付宝15年客服经验”沉淀，针对小程序商家进行定制的一站式客智能客服体系，围绕“沟通”和“运营”能力进行重点打造，帮助商家轻松提供7*24小时随时随地的服务。



请参考 [智能客服](https://opendocs.alipay.com/mini/operation/custom-service)。
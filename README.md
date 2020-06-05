## 奥尔特云资源中心文档

### 项目描述

奥尔特云资源中心文档项目意在提供一个vue 组合 markdown 驱动的静态网站生成器，以 Markdown 为中心的项目结构，以最少的配置帮助你专注于文档输出。
项目采用vuepress 开源工程，VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

项目使用gitlab pages 以及github pages 部署

[访问 gitlab pages](https://oortgroup.gitlab.io/oortcloud-docs/)

[访问 github pages](https://oortcloudgroup.github.io/oort-docs)

### 项目结构


```js
├── .github                              # github action 自动话部署相关文件
├── docs
│   ├── .vuepress                        #  用于存放全局的配置、组件、静态资源等。
│   │   ├── components                   # 该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── images                       # 自定义组件布局vue 的资源文件 
│   │   ├── public                       # 页静态资源目录
│   │   ├── style                        # 用于存放样式相关的文件
│   │   │   ├── index.styl               # 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级
│   │   │   ├── palette.styl             # 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── config.js                    # 配置文件的入口文件，也可以是 YML 或 toml
│   │   ├── navigator.js                 # 导航栏配置
│   │   ├── sidebar.js                   # 侧边滑动框配置
│   ├── guide                            # markdown 文件夹
│   ├── index.md                         # 项目首页
├── .gitignore.js                        # git 忽略文件配置
├── .gitlab-ci.yml                       # git 忽略文件配置
├── package.json                       

     
```

### 项目运行(使用yarn包依赖管理)

#### 开发（文档编写）

```

yarn docs:dev

```
#### 生成静态文件

默认情况下，文件将会被生成在 .vuepress/dist，当然，你也可以通过 .vuepress/config.js 中的 dest 字段来修改

```

yarn docs:build

```


yarn docs:build # 或者：npm run docs:build
默认情况下，文件将会被生成在 .vuepress/dist，当然，你也可以通过 .vuepress/config.js 中的 dest 字段来修改

###  项目约定

 遵循 “约定优于配置” 的原则，
 
 #### 默认的页面路由
 
 此处我们把 `docs` 目录作为 `targetDir` （参考 [命令行接口](https://www.vuepress.cn/api/cli.html#基本用法)），
 下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：
 
 ```json
 {
   "scripts": {
     "dev": "vuepress dev docs",
     "build": "vuepress build docs"
   }
 }
 ```
 
 对于上述的目录结构，默认页面路由地址如下：
 
 | 文件的相对路径     | 页面路由地址   |
 | ------------------ | -------------- |
 | `/README.md`       | `/`            |
 | `/guide/README.md` | `/guide/`      |
 | `/config.md`       | `/config.html` |
 


### 部署  

#### gitlab 

.gitlab-ci.yml 配置，现已经配置好了，只推送代码到gitlab 就会自动构建 更新gitlab pages 

#### github 

通过 github action  只推送代码到gitlab 就会自动构建 更新github pages 

注意： 自己的账号需要设置secrets


### 编写文档

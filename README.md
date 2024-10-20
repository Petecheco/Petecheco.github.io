# ssk-mainpage-v3

## 简介

Vue3使用MVVM开发模式，相比传统开发模式，Vue更倾向于使用数据，而不是预先定义好的样式来渲染页面内容。本网站使用纯静态页面，将编译后的文件放入Github Pages目录下即可推送。

## 我该编辑什么？

下面，我就所有可以编辑的内容一一说明：

### 导航栏

定义导航栏的文件为：[navBar.vue](./src/components/navBar.vue "navBar")

你可以修改这些内容：导航栏文本、导航栏图标

导航栏文本位于该文件的第60行，`menuOptions` 中，该变量（常量）为一个 `MenuOption[]` 类型的引用，修改某一项的名称可以直接修改 label 项中的文本。

> 如果不知道修改的后果，请不要修改 key 值

导航栏图标可以在 [此页面](https://www.xicons.org/ "xicons") 查询到，选择ionicons5，搜寻到你想要的图标后，复制图标的名字，修改导航栏文件的第25行的 `import`，在 `import` 中加上刚才复制的名字一项，就可以在 `menuOptions` 的 `icon` 中修改引入图标的名称了。

对于其他需要修改图标的场景，所需要的修改都是近似的，即可以通过 查询图标名->引入->插入、修改图标名 的方式进行引入，后文不再赘述。

如果想要删除某一项，可以直接删除 `menuOptions` 数组中某一项，但是如果想要插入某一项，不仅仅需要修改此值，还需要创建一个新的View（路径位于/src/views），并且根据填入的 key 值，修改 [index.ts](./src/router/index.ts) 中 `routes` 的值，才能实现新页面的跳转。

### 文章

与导航栏类似，文章数据需要去 [articleVIew.vue](./src/views/articleView.vue) 这一文件中修改，在此文件的第68行中，很容易就可以发现 `articleList` 存放了所有数据的值，添加新项、删除项、修改项的结果将会反馈在页面上，不需要其他特殊操作，但是，添加的项必须满足下面的格式：

```
{
    title: '',
    journal: '',
    date: '',
    link: '',
    cover: CoverImage,
    abstract: '',
    tags: []
}
```

其中，比较特殊的项是 cover，为了能够显示图像，需要提前将图片文件放入 /assets/articleCovers 文件夹中，并且通过类似 [articleVIew.vue](./src/views/articleView.vue) 文件第65和66行的方式，将图片导入进页面中，才能赋值到 `cover` 项，并且显示在页面上。

tags 是一个由字符串构成的数组，只需要参考样例添加内容即可。

### 新闻

修改新闻数据的方式和修改文章数据接近，但更为简单，仅需打开 [newsView.vue](./src/views/newsView.vue)，找到第28行的 `newsList` 并且修改其中的 `title` 以及 `time` 项即可。

### 联系方式

与新闻的修改方式近似，打开 [contactView.vue](./src/views/contactView.vue)，找到第26行的 `contactList` 并且修改其中的 `label` 以及 `value` 项即可。

## 我该如何调试网站？

首先，下载 [Node.js](https://nodejs.org/)，选择任意高于18的版本安装。

安装完成后，在项目目录打开终端，输入 `npm install` 并且稍作等待，即可安装所有的依赖项。

> 如果由于网络问题下载失败，运行下面的命令即可将 npm 修改成国内镜像：
>
> `npm config set registry https://registry.npmmirror.com`

如果一切如常，安装过程结束后，输入 `npm run dev` 即可开启项目调试服务器。

## 我该如何部署网站？

显然，你无法在 Github Pages 上运行 Node.js Server，因此你需要编译 Vue 项目为原生 HTML、CSS、JavaScript 项目，幸运的是，这一个过程可以全自动完成。

仅需在项目目录输入 `npm run build`，项目就会自动被打包成在./dist路径下的单 index.html 页面，不过，由于 CORS 跨域访问的限制，无法直接使用浏览器预览网站，如果想要开启一个临时服务器，仅需在终端输入 `npm i -g serve` 即可安装一个轻量化的 WebServer 服务，安装结束后，在dist目录下运行 serve 即可预览页面。

编译完成后，将dist目录传到 Github Pages 所在的 repo 即可。

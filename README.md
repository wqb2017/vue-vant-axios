# vue+vantui+vue-router+axios+vuex

## demo
  ![](./dosc/images/1.gif)

## 使用

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

```bash
$ npm install -g vue-cli
$ vue init wqb2017/ec-vue-cli my-project-name
$ cd my-project-name
$ npm install
$ npm run dev
```

## 技术栈

1. 主技术栈

* [vue](https://github.com/vuejs/vue)
* [vue-router](https://github.com/vuejs/vue-router)
* [vuex](https://github.com/vuejs/vuex)
* [es6](https://github.com/bevacqua/es6)
* [es6 中文文档](https://github.com/ruanyf/es6tutorial)

2. UI 技术栈

* [pc 端 element-ui](https://github.com/ElemeFE/element)
* [移动端 vant](https://github.com/youzan/vant)
* axios

3. 图标

* [fontawesome](http://fontawesome.dashgame.com/)

## 前端规范

* [eslint standard](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)

## IDE

* [vscode](https://code.visualstudio.com/Download)
* [vscode 常用插件和配置](https://github.com/wqb2017/vscode-plugins)

## 项目结构

```js
|-项目名
    |-build
    |-config
    |-src
      |-components //公共组件
      |-assets //公共模块
      |-directives //自定义指令
      |-filters //过滤器
      |-mixins //mixins
      |-router
      |-store
      |-views
        |-components //业务公共组件
          |-button
            |-index.vue //入口
            |-style.scss //样式
            |-images //图片
        |-home //首页
          |-entry
            |-index.vue 模块入口
            |-style.scss
            |-images
          |-lists
            |-index.vue // 列表页
            |-style.scss
            |-images
      |-static //第三方插件
```

# 历史记录

## v0.0.1

* 搭建 vue-vant-axios 项目，使用 vue-template-webpack 模板

## v1.0.0

* 安装插件 vant

```js
// ./src/main.js
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
```

* 引入移动端适配方案 rem
* 删除无用文件 HolleWord.vue 等
* 新增页面 views/home views 包含所有的逻辑页面

```js
|——src
  |——views
    |——home
      |——index.vue
      |——style.scss
```

* 使用 css 处理器 scss

  安装依赖 style-loader css-loader sass-loader node-sass

  $ npm install style-loader css-loader sass-loader node-sass --save-dev

  这里需要注意的是，有可能 node-sass 安装失败，这时候用淘宝的 cnpm 安装就能解决这个问题

  即

  $ cnpm install node-sass --save-dev

  如果报以下错误

  ![](./dosc/images/1.scss.png)

  解决办法是，删除 node_modules package-lock.json，并重新安装依赖

  npm install

* 路由按需加载

```js
// ./src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import _import from './_import'; // ./src/router/_import.js

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import('home')
    }
  ]
});
```

结果对比

![](./dosc/images/2.router.png)

* babel-polyfill

1. 安装

$ npm install babel-polyfill --save

2. 引入

```js
// ./build/webpack.base.conf.js
  entry: {
    app: ['babel-polyfill','./src/main.js'],
  },
```

* px 转 rem

1. 安装

$ npm install postcss-pxtorem --save-dev

[rem在移动端实战](https://github.com/wqb2017/vue-vant-axios/blob/master/dosc/2.md)

2. 引入

```js
// ./.postcssrc.js
"plugins": {
  // to edit target browsers: use "browserslist" field in package.json
  'autoprefixer': {
    browsers: ['Android >= 4.0', 'iOS >= 7']
  },
  'postcss-pxtorem': {
    rootValue: 37.5,
    propList: ['*']
  }
}
```

## v1.1.0

* 封装 axios，设置默认参数并能在this中使用
```js
// ./src/assets/js/createRequest
import axios from 'axios';
/**
 * 前后端请求
 *
 * @export
 * @param {any} URL 地址
 * @param {any} params 参数
 * @returns
 */
export default function createRequestHttp (URL, params) {
  return new Promise(function (resolve, reject) {
    let instance = axios.create();
    instance.defaults.baseURL = window.CONFIG.baseURL;
    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    instance.defaults.withCredentials = true;
    instance.defaults.transformRequest = [
      function (data) {
        let newData = [];
        for (let k in data) {
          newData.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
        }
        return newData.join('&');
      }
    ];
    instance.defaults.transformResponse = [
      function (res) {
        res = JSON.parse(res);
        if (res.state !== 1) {
          throw Error('请求失败');
        }
        return res.data;
      }
    ];
    instance.post(URL, params)
      .then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
  });
}

// ./main.js
import createRequestHttp from '@/assets/js/createRequest';
Vue.prototype.$createRequestHttp = createRequestHttp;
```

* vuex

1. 安装vuex

  npm install vuex --save

2. 使用vuex

```js
// ./main.js
import store from './store';
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

// ./src/store
export default {
  state: {
    // 每日推荐列表-列表类型
    goodsProducttype: 1
  }
};

//使用
// ./src/views/home/tabbar.index.vue
this.$store.state.home.goodsProducttype
```

## 也许这些对您有帮助

* css 文件引入

  当我们要引入不是其本文件跟目录下的 css 文件时，记得使用 '~@文件名' 来简化 './../../....'这些相对路径

```js
@import './../../../assets/css/mixin.scss';
//简化成功
@import '~@/assets/css/mixin.scss';
```

* css常用相同模块内容可以提mixin提供多处使用，如：
```css
//省略号
@mixin omit{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
//清除浮动
@mixin clearfix{
  zoom: 1;
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
}
```

* 标题或者其他个性化的内容并且每个页面都会用到的内容可以在 router 路由的 mate 属性中设置，如：

```js
{
  path: '/home',
  name: 'Home',
  component: _import('home'),
  meta: {
    title: '首页'//标题
  }
},
{
  path: '/mime',
  name: 'Mime',
  component: _import('mime'),
  meta: {
    title: '个人中心'
  }
}
```

* 关于css大小设定问题，其实每个团队或者是设计师都有自己的见解，但是我个人用的最多的，也是觉得最友好的是用8的整数倍数做基准设定大小是很好的一个约定。当然了字体大小就没有必要一定是8的整数倍了。但是最好还是用双数设定大小。

比方说：

8px 16px 32px 40px 48px 56px 64px ... 谁用谁知道，这样的比例不但好看，关键是对布局很是友好。


## License

[MIT](https://opensource.org/licenses/MIT)

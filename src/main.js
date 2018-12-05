// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vant/lib/index.css';
import './assets/css/index.scss';
import './assets/js/screen-adaptation';

import * as directives from './directives';
import * as filters from './filters';
import * as mixins from './mixins';

import App from './App';
import Vant from 'vant';
import Vue from 'vue';
import components from './components';
import router from './router';
import store from './store';

Vue.use(Vant);

// 全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});
// 引入全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
// 引入全局指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});
// 引入全局mixins
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key]);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

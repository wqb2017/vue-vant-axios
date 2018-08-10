// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/index.css';
import './assets/js/rem';
import Vue from 'vue';
import App from './App';
import createRequestHttp from '@/assets/js/createRequest';
import router from './router';
// vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
// 前后端请求
Vue.prototype.$createRequestHttp = createRequestHttp;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

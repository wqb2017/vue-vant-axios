// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/index.css';
import './assets/js/rem';
import './assets/js/createRequest';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

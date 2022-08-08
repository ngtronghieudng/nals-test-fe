import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import webApiPlugin from '@/plugins/web-api';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

import '@/plugins/vee-validate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

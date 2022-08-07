import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import webApiPlugin from '@/plugins/web-api';
import 'bootstrap';

Vue.config.productionTip = false;
Vue.use(webApiPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

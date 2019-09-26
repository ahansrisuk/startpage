import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import '@/assets/icons/weather/flaticon.css';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount('#app');

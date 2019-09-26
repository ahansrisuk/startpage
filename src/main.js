import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';
import '@/assets/icons/weather/flaticon.css';

Vue.config.productionTip = false;

const vm = new Vue({
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import auth from '../auth.js';
import VueGoogleApi from 'vue-google-api';
import '@/assets/icons/weather/flaticon.css';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

const config = {
  apiKey: auth.api_key,
  clientId: auth.client_id,
  scope: auth.scopes
}


Vue.prototype.$http = axios;
Vue.use(VueGoogleApi, config);


const vm = new Vue({
  render: h => h(App),
}).$mount('#app');

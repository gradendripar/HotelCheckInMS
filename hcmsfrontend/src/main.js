import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:8000";

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

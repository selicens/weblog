import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import qs from 'qs'      //引入qs


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.use(mavonEditor)
Vue.prototype.$qs = qs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

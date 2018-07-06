// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import constant from '@/util/constant'
import http from '@/util/http'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(constant)
Vue.use(http)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

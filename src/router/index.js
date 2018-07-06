import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/layout.vue'], resolve)
    },
    {
    	path: '/401',
    	component: resolve => require(['@/views/error/401.vue'], resolve)
    },
    {
    	path: '*',
    	component: resolve => require(['@/views/error/404.vue'], resolve)
    }
  ]
})

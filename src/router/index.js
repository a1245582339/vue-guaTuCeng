import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import view from '@/views/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: view
    }
  ]
})

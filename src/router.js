import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '',
          name: 'Index',
          component: () => import('./views/Index/Main.vue')
        },
        {
          path: '/competition',
          name: 'Competition',
          component: () => import('./views/Index/Competition.vue')
        },
        {
          path: '/pm5',
          name: 'Pm5',
          component: () => import('./views/Index/Pm5.vue')
        },
        {
          path: '/classify',
          name: 'Classify',
          component: () => import('./views/Index/Classify.vue')
        },
        {
          path: '/liveBroadcast',
          name: 'LiveBroadcast',
          component: () => import('./views/Index/LiveBroadcast.vue')
        },
      ]
    },
   
  ]
})

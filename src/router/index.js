import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'Introduction',
        path: '',
        component: () => import(/* webpackChunckName: "introduction"*/ '../views/Introduction.vue')
      },
      {
        name: 'NotFound',
        path: '/404',
        component: () => import(/* webpackChunckName: "introduction"*/ '../views/NotFound.vue')
      }
    ]
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import(/* webpackChunkName: "credits" */ '../views/Credits.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

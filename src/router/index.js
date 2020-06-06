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
        name: 'Níveis de Máquina',
        path: '/niveis-de-maquina',
        component: () => import(/*webpackChuckName: "niveis_de_maquina"*/ '../views/Niveis.vue')
      },
      {
        name: 'Uma Arquitetura Simples',
        path: '/arquitetura-simples',
        component: () => import(/*webpackChuckName: "niveis_de_maquina"*/ '../views/Arquitetura.vue')
      },
      {
        name: 'O que faz o cérebro da máquina?',
        path: '/cerebro-faz',
        component: () => import(/*webpackChuckName: "niveis_de_maquina"*/ '../views/CerebroFaz.vue')
      },
      {
        name: 'Como funciona o cérebro da máquina?',
        path: '/cerebro-como',
        component: () => import(/*webpackChuckName: "niveis_de_maquina"*/ '../views/CerebroComo.vue')
      },
      {
        name: 'Agora você sabe!',
        path: '/end',
        component: () => import(/*webpackChuckName: "niveis_de_maquina"*/ '../views/End.vue')
      },
      {
        name: 'NotFound',
        path: '/404',
        component: () => import(/* webpackChunckName: "introduction"*/ '../views/NotFound.vue')
      }
    ]
  },
  {
    path:'/',
    redirect: ''
  },
  {
    path: '/simulator',
    name: 'Simulator',
    component: () => import(/* webpackChunkName: "simulator" */ '../views/Simulator.vue')
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
  routes,
  scrollBehavior (){
    return {y: 0}
  }
})

export default router

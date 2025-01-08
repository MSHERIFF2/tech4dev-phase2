import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthView from '@/views/AuthView.vue'

import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'AuthView',
    component: AuthView
  }
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

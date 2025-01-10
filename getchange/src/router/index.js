import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import DashBoard from '@/views/DashBoard.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: DashBoard
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/',
    name: 'AuthLayout',
    component: AuthLayout
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

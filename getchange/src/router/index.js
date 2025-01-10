import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import DashBoard from '@/views/DashBoard.vue'
import SignUp from '@/views/SignUp.vue'
import SignUpContinue from '@/views/SignUpContinue.vue'
import Onboard from '@/views/Onboard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/SignUpContinue',
    name: 'SignUpContinue',
    component: SignUpContinue
  },
  {
    path: '/',
    name: 'SignUp',
    component: SignUp,
  },
 
  {
    path: '/Onboard',
    name: 'Onboard',
    component: Onboard,
  },
  {
    path: '/DasBboard',
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn,
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

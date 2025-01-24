import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import DashBoard from '@/views/DashBoard.vue'
import SignUp from '@/views/SignUp.vue'
import SignUpContinue from '@/views/SignUpContinue.vue'
import Onboard from '@/views/Onboard.vue'
import Profile from '@/views/Profile.vue'
import MyCard from '@/views/MyCard.vue'
import Cart from '@/components/Cart.vue'


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
    path: '/app/DashBoard',
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    path: '/app/Profile',
    name: 'Profile',
    component: Profile,
  },
  
  {
    path: '/app/MyCard',
    name: 'MyCard',
    component: MyCard,
  },
  {
    path: '/app/Cart',
    name: 'Cart',
    component: Cart,
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

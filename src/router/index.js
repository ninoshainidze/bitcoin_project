import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buybitcoin',
    name: 'BuyBitcoin',
    component: () => import('../views/BuyBitcoin.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login/Login.vue')

  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../components/SignUp/SignUp.vue')

  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})

export default router

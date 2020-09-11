import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
redirect:'/home'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/tc',
    name: 'Tc',
    component: () => import( '../views/Tc.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

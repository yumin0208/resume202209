import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    chName:'首頁',
    component: HomeView
  },
  {
    path: '/Shop/:productID(\\d+)',
    name: 'Shop',
    chName:'商品',
    component: ShopView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

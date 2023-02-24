import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/conversion-btc',
      name: 'conversion Rp to BTC',
      component: () => import('../views/ConversBTC.vue')
    },
    {
      path: '/conversion-rp',
      name: 'conversion BTC to Rp',
      component: () => import('../views/ConversRp.vue')
    }
  ]
})

export default router

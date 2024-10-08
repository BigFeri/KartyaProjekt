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
      path: '/kartyak',
      name: 'kartyak',
      component: () => import('../views/Kartyak.vue'),
      meta: {title: 'kartyak'}
    },
    {
      path: '/tablazat',
      name: 'tablazat',
      component: () => import('../views/Tablazat.vue'),
      meta: {title: 'tablazat'}
    }
  ]
})

export default router

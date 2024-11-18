import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'fade' },
      
    },
    {
      path: '/PersonalProject',
      name: 'PersonalProject',
      component: () => import('../views/PersonalProjectView.vue'),
      meta: { transition: 'fade' },
    },
    {
      path: '/PartyProject',
      name: 'PartyProject',
      component: () => import('../views/PartyProjectView.vue'),
      meta: { transition: 'fade' },
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
      meta: { transition: 'fade' },
      
    },
  ],
})

export default router

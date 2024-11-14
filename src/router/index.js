import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/PersonalProject',
      name: 'PersonalProject',
      component: () => import('../views/PersonalProjectView.vue'),
    },
    {
      path: '/PartyProject',
      name: 'PartyProject',
      component: () => import('../views/PartyProjectView.vue'),
    },
  ],
})

export default router

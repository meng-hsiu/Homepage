import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PersonalProjectView from '../views/PersonalProjectView.vue'
import PartyProjectView from '../views/PartyProjectView.vue'
import ContactView from '../views/ContactView.vue'

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
      // component: () => import('../views/AboutView.vue'),
      component: AboutView,
      meta: { transition: 'fade' },
      
    },
    {
      path: '/personalProject',
      name: 'personalProject',
      // component: () => import('../views/PersonalProjectView.vue'),
      component: PersonalProjectView,
      meta: { transition: 'fade' },
    },
    {
      path: '/partyProject',
      name: 'partyProject',
      // component: () => import('../views/PartyProjectView.vue'),
      component: PartyProjectView,
      meta: { transition: 'fade' },
    },
    {
      path: '/contact',
      name: 'contact',
      // component: () => import('../views/ContactView.vue'),
      component:ContactView,
      meta: { transition: 'fade' },
      
    },
  ],
})

// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length
//   const fromDepth = from.path.split('/').length
//   console.log(toDepth,fromDepth)
//   to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'fade'
// })

export default router

import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projects'
      }
    }
  ],
})

/* Update Page title */
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'JardyCodes'
})




export default router

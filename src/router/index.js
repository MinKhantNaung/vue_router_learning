import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cars/:id',
      name: 'car',
      component: CarView,
      children: [
        {
          path: 'contact',
          component: ContactView
          // it doesn't need '/' like this [path: '/contact']
        }
      ]
    }
  ]
})

export default router

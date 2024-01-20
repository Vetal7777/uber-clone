import Home from '@/views/Home.vue'
import Services from '@/views/Services.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterName, RouterPath } from './types'

const routes = [
  {
    path: RouterPath.home,
    name: RouterName.home,
    component: Home
  },
  {
    path: RouterPath.services,
    name: RouterName.services,
    component: Services
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterName, RouterPath } from './types'

const routes = [
  {
    path: RouterPath.home,
    name: RouterName.home,
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

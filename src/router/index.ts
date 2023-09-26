import DirectionsView from '@/views/DirectionsView.vue'
import HomeView from '@/views/HomeView.vue'
import MapView from '@/views/MapView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/directions',
    name: 'directions',
    component: DirectionsView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

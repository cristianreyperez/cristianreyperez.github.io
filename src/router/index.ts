import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // add more routes here
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

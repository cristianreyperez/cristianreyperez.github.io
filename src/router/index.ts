import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // add more routes here
  {
    path: '/about-me',
    name: 'AboutMe',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

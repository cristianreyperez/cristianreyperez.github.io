import { createRouter, createWebHistory } from 'vue-router'

// Views
import Home from '../views/Home.vue'
// import AboutMe from '../views/AboutMe.vue'
// import Skills from '../views/Skills.vue'
// import Portfolio from '../views/Portfolio.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about-me',
  //   name: 'AboutMe',
  //   // component: AboutMe,
  // },
  // {
  //   path: '/skills',
  //   name: 'Skills',
  //   // component: Skills,
  // },
  // {
  //   path: '/portfolio',
  //   name: 'Portfolio',
  //   // component: Portfolio,
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   // component: Contact,
  // },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

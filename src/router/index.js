import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: '',
    component:()=> import('@/components/HomePage.vue')
  },
  {
    path: '/poemas',
    name: 'poema',
    component:()=> import('@/components/PoemasPage.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component:()=> import('@/components/HomePage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

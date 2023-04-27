import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/GettingInvolved',
      name: 'GettingInvolved',
      component: () => import('../views/GettingInvolved.vue')
    },
    {
      path: '/FrequentQuestions',
      name: 'FrequentQuestions',
      component: () => import('../views/FrequentQuestions.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue')
    }
  ]
})

export default router

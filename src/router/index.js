import { createRouter, createWebHistory } from 'vue-router'
import LetterView from '../views/LetterView.vue'

const routes = [
  {
    path: '/',
    name: 'letter',
    component: LetterView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

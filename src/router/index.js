import { createRouter, createWebHistory } from 'vue-router'
import LetterScreen from '../components/LetterScreen.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LetterScreen,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

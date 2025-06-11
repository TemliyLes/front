import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/person/PersonList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: List,
    },

  ],
})
export default router
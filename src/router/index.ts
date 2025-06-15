import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/pages/PersonList.vue'
import Main from '../components/pages/Main.vue'
import OPN from '../components/pages/OPN.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/main',
      component: Main,
    },
    {
      path: '/persons',
      component: List,
    },
    {
      path: '/opn',
      component: OPN,
    },

  ],
})
export default router
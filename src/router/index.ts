import { createRouter, createWebHistory } from 'vue-router'
import mainView from '@/views/mainView.vue'
import articleView from '@/views/articleView.vue'
import contactView from '@/views/contactView.vue'
import newsView from '@/views/newsView.vue'
import aboutView from '@/views/aboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainView
    },
    {
      path: '/article',
      name: 'article',
      component: articleView
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactView
    },
    {
      path: '/news',
      name: 'news',
      component: newsView
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView
    },
  ]
})

export default router

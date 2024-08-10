import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutView from '../views/AboutView.vue'
import ProfileView from '../views/ProfileView.vue'
import AuthenticationPage from '@/views/AuthenticationPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/auth",
    name: "auth",
    component:AuthenticationPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFoundPage,
  },
  ]
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProfileView from "../views/ProfileView.vue";
import AboutView from "@/views/AboutView.vue";
import AuthenticationPage from "../views/AuthenticationPage.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

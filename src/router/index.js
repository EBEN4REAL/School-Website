import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home"
import About from "@/views/About"

Vue.use(VueRouter);

let routes = [
  {
    name: 'homePage',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;

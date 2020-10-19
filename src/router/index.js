import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home"

Vue.use(VueRouter);

let routes = [
  {
    name: 'homePage',
    path: '/',
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;

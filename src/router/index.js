import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home"
import About from "@/views/About"
import BlogPosts from "@/views/BlogPosts"
import Post from "@/views/Post"
import Pace from "@/views/Pace"
import Rewards from "@/views/Rewards"
import Contact from "@/views/contact"

Vue.use(VueRouter);

let routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'blogPosts',
    path: '/blog-posts',
    component: BlogPosts
  },
  {
    name: 'post',
    path: '/post',
    component: Post
  },
  {
    name: 'pace',
    path: '/pace',
    component: Pace
  },
  {
    name: 'rewardsAndSanctions',
    path: '/rewards&sanctions',
    component: Rewards
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home"
import About from "@/views/About"
import BlogPosts from "@/views/BlogPosts"
import Post from "@/views/Post"
import Reports from "@/views/Reports"
import Pace from "@/views/Pace"
import Rewards from "@/views/Rewards"
import Contact from "@/views/contact"
import Policies from "@/views/Policies"
import Uniform from "@/views/Uniform"
import Development from "@/views/Development"
import Curriculum from "@/views/Curriculum"
import SchoolHours from "@/views/SchoolHours"
import Admission from "@/views/Admission"
import KidzoneLinks from "@/views/kidzoneLinks"
import Homework from "@/views/Homework"
import Gallery from "@/views/gallery"

Vue.use(VueRouter);

let routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'homework',
    path: '/homework',
    component: Homework
  },
  {
    name: 'KidzoneLinks',
    path: '/kidzone-links',
    component: KidzoneLinks
  },
  {
    name: 'admission',
    path: '/Admission',
    component: Admission
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
    name: 'reports',
    path: '/reports',
    component: Reports
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
    name: 'policies',
    path: '/policies',
    component: Policies
  },
  {
    name: 'uniform',
    path: '/uniform',
    component: Uniform
  },
  {
    name: 'development',
    path: '/development',
    component: Development
  },
  {
    name: 'curriculum',
    path: '/curriculum',
    component: Curriculum
  },
  {
    name: 'schoolHours',
    path: '/school-hours',
    component: SchoolHours
  },
   {
    name: 'gallery',
    path: '/gallery',
    component: Gallery
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  },
];
// console.log(routes.length)
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;

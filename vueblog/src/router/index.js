import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../views/Header'
import Swiper from "../views/Swiper";
import Backstage from "../views/Backstage";
import Article from "../views/Article";
import Details from "../views/Details";
import Footer from "../views/Footer";

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  { path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: 'header',
    component:Header
  },
  {
    path: '/footer',
    name: 'footer',
    component:Footer
  },
  {
    path: '/swiper',
    name: 'swiper',
    component:Swiper
  },
  {
    path: '/backstage',
    name: 'backstage',
    component: Backstage
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

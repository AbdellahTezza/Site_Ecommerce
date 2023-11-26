import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/User/HomeView.vue";
import BlogView from "../views/User/BlogView.vue";
import AboutView from "../views/User/AboutView.vue";
import ContactView from "../views/User/ContactView.vue";
import ShopView from "../views/User/ShopView.vue";
import CartItemView from "../views/User/CartItemView.vue";
import CartView from "../views/User/CartView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/cart/:id',
    name: 'cart',
    component: CartItemView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

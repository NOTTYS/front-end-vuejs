import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import user from '../views/users'
import Login from '../components/loginForm.vue'
import product from "../views/product.vue"
import addProduct from "../components/addProduct.vue"
import register from "../components/registerForm.vue"
import Chat from "../components/Chat.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }

  }
  , {
    path: "/user",
    name: 'user',
    component: user
  }
  , {
    path: "/product",
    name: 'product',
    component: product
  } 
  , {
    path: "/addProduct",
    name: 'addProduct',
    component: addProduct
  }, {
    path: "/register",
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

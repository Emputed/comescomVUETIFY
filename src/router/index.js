import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sesion',
    name: 'sesion',
    component: () => import(/* webpackChunkName: "sesion" */ '../views/Sesion.vue')
  },
  {
    path:'/registro',
    name: 'registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/ingredientes',
    name: 'ingredientes',
    component: () => import('../views/Ingredientes.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

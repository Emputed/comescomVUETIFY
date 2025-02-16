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
    path: '/ingredientes',
    name: 'ingredientes',
    component: () => import('../views/Ingredientes.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/proponerReceta',
    name: 'proponerReceta',
    component: () => import('../views/ProponerReceta.vue')
  },
  {
    path: '/recetas',
    name: 'recetas',
    component: () => import('../views/Recetas.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

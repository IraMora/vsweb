import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/historia',
      name: 'historia'
      // component: Historia
    },
    {
      path: '/manga',
      name: 'manga',
      component: () => import(/* webpackChunkName: "about" */ './views/Manga.vue')
    },
    {
      path: '/anime',
      name: 'anime'
      // component: Historia
    },
    {
      path: '/musica',
      name: 'musica'
      // component: Historia
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import GameList from '../views/GameList'
import Game from '../views/Game'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/games',
    name: 'GameList',
    component: GameList
  },
  {
    path: '/games/new',
    name: 'GameNew',
    component: () => import('../views/GameForm')
  },
  {
    path: '/games/:gameId/edit',
    name: 'GameEdit',
    component: () => import('../views/GameForm')
  },
  {
    path: '/games/:gameId',
    name: 'Game',
    component: Game
  },

  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login-in.vue'
import Registration from "./views/registration.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ]
})
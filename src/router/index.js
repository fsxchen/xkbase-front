import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Account from '@/views/Account'

Vue.use(Router)


const ifAuthenticated = (to, from, next) => {
  // if (store.getters.isAuthenticated) {
    if (0) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/account', component: Account, beforeEnter: ifAuthenticated},
  ]
})

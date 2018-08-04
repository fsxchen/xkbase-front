import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Account from '@/views/Account'

import store from '../store/index'
Vue.use(Router)


const ifAuthenticated = (to, from, next) => {
  console.log(store.state, "user_state")
  store.commit('GET_USERINFO')
  if (store.state.user.isAuthorized) {
    // if (0) {
    next()
    return
  }
  console.log(to)
  next('/login' + '?next='+to.path)
}

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/account', component: Account, beforeEnter: ifAuthenticated},
  ]
})

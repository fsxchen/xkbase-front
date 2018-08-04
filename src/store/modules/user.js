import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const GET_USERINFO = 'GET_USERINFO'

export default {
    state: {
        userInfo: {

        },
        isAuthorized: false
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            localStorage.setItem('user', JSON.stringify(user))
            state.userInfo = user
            state.isAuthorized = true
            console.log(state, "修改了哦")

        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        },
        [GET_USERINFO](state) {
            if (state.isAuthorized) {
                return GET_USERINFO
            } else if (localStorage.getItem("user")) {
                state.userInfo = JSON.parse(localStorage.getItem("user"))
                state.isAuthorized = true
            } else return
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}
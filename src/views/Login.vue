<template>
  <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit" @click="login()">Login</button>
   </form>
 </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import store from '../store/index'
import router from '../router'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState ({
      // user: state => state.user.
    })
  },
   methods: {
    ...mapMutations({
      userLongin: 'user/USER_SIGNIN'
    }),

    login() {
      store.commit('USER_SIGNIN', {username: this.username, password: this.password})
      router.push("/account")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="#/login">登陆</a></li>
        <li><a href="#/account">账户</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

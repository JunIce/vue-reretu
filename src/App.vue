<template>
  <div id="app">
    <router-view></router-view>
    <nav class="navFix">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/find">发现</router-link></li>
      <li><router-link to="/message/actions">消息</router-link></li>
      <li><router-link to="/me/panels">个人中心</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{font-size: 62.5%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
body{overflow: hidden;}
body.modal-open{position:fixed;width:100%}
*{margin:0;padding:0;}
li{list-style: none;}
a{text-decoration: none;}
.fl{float: left;}
.fr{float: right;}
.cl{content: '';clear: both;overflow: hidden;}
.navFix{position: fixed;bottom: 0;left: 0;width: 100%;}
.navFix ul{display: flex;justify-content: space-around;background-color: #fff;border-top:1px solid #eee;}
.navFix li{width: 25%;text-align: center;}
.navFix a{font-size:1.4rem;padding:1rem 0;display: block;color:#666;}
</style>

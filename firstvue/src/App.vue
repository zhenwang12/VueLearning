<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="fn">
    <div class="box">你好</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    fn() {alert('Hello')}
  }
}
</script>

<!--让style支持less：
1.给style加上 “lang=less”
2.安装依赖包：less less-load
  yarn add less less-loader -D
-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* less */
  .box {
    color: #42b983;
  }
}
</style>

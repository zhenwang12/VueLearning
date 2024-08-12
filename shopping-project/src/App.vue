<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
  width: 300px;
  height: 300px;
  background: pink;
}
</style>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      active: 2
    }
  }
}
</script>

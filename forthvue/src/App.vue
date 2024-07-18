<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- router-view的位置，在上或下 -->
        <div>
            <router-view></router-view>
        </div>
        <div>
            <a href="#/find">发现</a>
            <a href="#/mine">我的</a>
            <a href="#/home">首页</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
a {
    margin-right: 20px;
}
</style>

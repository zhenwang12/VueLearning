<template>
    <div id="app">
        <!-- 会缓存所有一级路由 Homepage和ArticleDetail  -->
        <!--        <keep-alive :exclude="['ArticleDetail']">-->
        <keep-alive :include="['HomePage']">
            <router-view class="container"></router-view>
        </keep-alive>
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

.container {
    width: 100%;
    height: 80%;
    background: #FAFAFA;
}
</style>

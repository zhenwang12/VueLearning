<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- router-view的位置，在上或下 -->
        <div>
            <router-view></router-view>
        </div>
        <div class="footer_wrap">
            <!--动态路由 /find/任意传递的内容-->
            <router-link to="/find/动态find!">发现</router-link>
            <!-- ?参数名 -->
            <router-link to="/mine?key=mine">我的</router-link>
            <router-link to="/home?key=home">首页</router-link>
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
.footer_wrap {
    background-color: green;
}
/*
a.router-link-active 自动改选中的背景颜色  模糊匹配
to='./find' => 地址栏可以是： /find, find/one. find/two

a.router-link-exact-active精准匹配
to='./find' => 地址栏只能是： /find
*/
.footer_wrap a.exact-active {
    background-color: purple;
}
</style>

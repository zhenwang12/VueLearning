<script>
</script>

<template>
    <div>
        <div class="layout">内容
            <!-- 二级路由出口 -->
            <router-view></router-view>
        </div>
        <div class="container">
            <router-link to="/article">文章</router-link>
            <router-link to="/collect">收藏</router-link>
            <router-link to="/likes">喜欢</router-link>
            <router-link to="/mine">我的</router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.layout {
    width: 100%;
    height: 80%;
    background: #FFFFFF;
}
a {
    background: purple;
}
a.router-link-active {
    background: green;
}
</style>

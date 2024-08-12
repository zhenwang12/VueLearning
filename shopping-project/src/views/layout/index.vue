<script>
export default {
  name: 'LayoutPage',
  components: {

  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <van-tabbar route v-model="active" active-color="red" inactive-color="black">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<style scoped lang="less">

</style>

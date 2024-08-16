<template>
  <div class="order">
    <van-nav-bar title="我的订单" left-arrow @click-left="$router.go(-1)"/>
    <van-tabs v-model="active">
      <van-tab name="all" title="全部"></van-tab>
      <van-tab name="payment" title="待支付"></van-tab>
      <van-tab name="delivery" title="待发货"></van-tab>
      <van-tab name="received" title="待收货"></van-tab>
      <van-tab name="comment" title="待评价"></van-tab>
    </van-tabs>
    <OrderListItem :order-item="item" v-for="item in this.orderList" :key="item.order_id"></OrderListItem>
  </div>
</template>
<script>
import OrderListItem from '@/components/OrderListItem.vue'
import { getMyOrders } from '@/api/order'

export default {
  name: 'OrderPage',
  components: {
    OrderListItem
  },
  data () {
    return {
      active: this.$route.query.dataType || 'all',
      page: 1,
      orderList: []
    }
  },
  methods: {
    async getOrderList () {
      const res = await getMyOrders(this.active, this.page)
      console.log(res)
      this.orderList = res.data.list.data
      console.log(this.orderList)
    }
  },
  created () {
    this.getOrderList()
  }
}
</script>
<style lang="less" scoped>
.order {
  background-color: #fafafa;
}

.van-tabs {
  position: sticky;
  top: 0;
}
</style>

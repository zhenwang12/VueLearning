<template>
  <div class="order-list-item">
    <div class="tit">
      <div class="time">{{ orderItem.create_time }}</div>
      <div class="status">
        <span>{{ orderItem.state_text }}</span>
      </div>
    </div>
    <div class="list">
      <div class="list-item" v-for="item in orderItem.goods" :key="item.order_goods_id">
        <div class="goods-img">
          <img :src="item.goods_image" alt="">
        </div>
        <div class="goods-content text-ellipsis-2">
          {{ item.goods_name }}
        </div>
        <div class="goods-trade">
          <p>¥ {{ item.goods_price }}</p>
          <p>x {{ item.total_num }}</p>
        </div>
      </div>
    </div>
    <div class="total">
      共{{ getTotalCount }}件商品，总金额 ¥{{ orderItem.total_price }}
    </div>
    <div class="actions">
      <div v-if="orderItem.order_status === 10">
        <span v-if="orderItem.pay_status === 10">立刻付款</span>
        <span v-else-if="orderItem.delivery_status === 10">申请取消</span>
        <span v-else-if="orderItem.delivery_status === 20 || orderItem.delivery_status === 30">确认收货</span>
      </div>
      <div v-if="orderItem.order_status === 30">
        <span>评价</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    getTotalCount () {
      return this.orderItem.goods.reduce((sum, item) => sum + item.total_num, 0)
    }
  },
  props: {
    orderItem: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.order-list-item {
  margin: 10px auto;
  width: 94%;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, .05);
  border-radius: 8px;
  color: #333;
  font-size: 13px;

  .tit {
    height: 24px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .status {
      color: #fa2209;
    }
  }

  .list-item {
    display: flex;

    .goods-img {
      width: 90px;
      height: 90px;
      margin: 0px 10px 10px 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .goods-content {
      flex: 2;
      line-height: 18px;
      max-height: 36px;
      margin-top: 8px;
    }

    .goods-trade {
      flex: 1;
      line-height: 18px;
      text-align: right;
      color: #b39999;
      margin-top: 8px;
    }
  }

  .total {
    text-align: right;
  }

  .actions {
    text-align: right;

    span {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      color: #383838;
      border: 0.5px solid #a8a8a8;
      font-size: 14px;
      padding: 0 15px;
      border-radius: 5px;
      margin: 10px 0;
    }
  }
}
</style>

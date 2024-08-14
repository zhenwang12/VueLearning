import { deleteCartItem, getCartList, updateCart } from '@/api/cart'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, val) {
      state.cartList = val
    },
    toggleCheck (state, id) {
      const goods = state.cartList.find(item => item.goods_id === id)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, checked) {
      state.cartList.forEach(item => {
        item.isChecked = checked
      })
    },
    changeCount (state, obj) {
      const goods = state.cartList.find(item => item.goods_id === obj.id)
      goods.goods_num = obj.num
    }
  },
  actions: {
    async getCartList (context) {
      const { data: { list } } = await getCartList()
      list.forEach(item => {
        item.isChecked = true
      })
      console.log(list)
      context.commit('setCartList', list)
    },
    async changeCount (context, obj) {
      const {
        num,
        id,
        skuid
      } = obj
      context.commit('changeCount', { id, num })
      const res = await updateCart(id, num, skuid)
      console.log(res)
    },
    async deleteCartItem (context) {
      const selectCartList = context.getters.checkedCartList
      const ids = selectCartList.map(item => item.id)
      const res = await deleteCartItem(ids)
      console.log(res)
      Toast('删除成功')
      // 重新获取购物车数据
      context.dispatch('getCartList')
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    checkedCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    checkedCount (state, getter) {
      return getter.checkedCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    checkoutTotal (state, getter) {
      return getter.checkedCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}

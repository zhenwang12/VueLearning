import { setInfo, getInfo } from '@/util/storage'

export default {
  namespaced: true,
  state () {
    return {
      userinfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, userinfo) {
      state.userinfo = userinfo
      setInfo(userinfo)
    }
  },
  actions: {
    logout (context) {
      context.commit('setUserInfo', {})
      // 跨模块调用mutation => cart
      // root: true 全局模式
      context.commit('cart/setCartList', [], { root: true })
    }
  },
  getters: {}
}

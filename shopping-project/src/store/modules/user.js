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
  actions: {},
  getters: {}
}

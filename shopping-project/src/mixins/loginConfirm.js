import { Dialog } from 'vant'

export default {
  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    loginDialog () {
      if (!this.$store.getters.getUserToken) {
        Dialog.confirm({
          title: '温馨提示',
          message: '需要先登录',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        }).then(() => {
          // 跳转完再回来 this.$route.fullPath(会包含查询参数）
          this.$router.replace({
            path: '/login',
            query: { backUrl: this.$route.fullPath }
          })
        }).catch(() => {
          Dialog.close()
        })
        return true
      }
      return false
    }
  }
}

<script>
import { getPicCode, getSmsCode, loginAccount } from '@/api/login'
import { Toast } from 'vant'

export default {
  name: 'LoginPage',
  methods: {
    async getPicCode () {
      const res = await getPicCode()
      this.picUrl = res.data.base64
      this.picKey = res.data.key
    },
    async getVerifyCode () {
      if (!this.validContent()) {
        return
      }

      if (!this.timer && this.second === 60) {
        const res = await getSmsCode(this.picCode, this.picKey, this.phoneNum)
        Toast('短信已发送')
        console.log(res)

        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.second = 60
            this.timer = null
          }
        }, 1000)
      }
    },
    validContent () {
      if (!/^1[3-9]\d{9}$/.test(this.phoneNum)) {
        Toast('请输入正确手机号')
        return false
      }

      if (/^w{4}$/.test(this.picCode)) {
        Toast('请输入正确验证码')
        return false
      }

      return true
    },
    async loginAccount () {
      if (!/^\d{6}$/.test(this.smsCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      const res = await loginAccount(this.smsCode, this.phoneNum)
      console.log(res.data)
      this.$store.commit('user/setUserInfo', {
        userid: res.data.userId,
        token: res.data.token
      })
      this.$toast('登录成功')
      // 地址栏是否有backUrl
      const url = this.$route.query.backUrl || '/'
      console.log(url)
      this.$router.replace(url)
    }
  },
  data () {
    return {
      picCode: '',
      picKey: '',
      picUrl: '',
      phoneNum: '',
      second: 60,
      timer: null,
      smsCode: ''
    }
  },
  created () {
    this.getPicCode()
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left=" $router.go(-1)"></van-nav-bar>
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="phoneNum" class="inp" maxlength="11" placeholder="请输入手机号码" type="number">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img :src="picUrl" alt="" v-if="picUrl" @click="getPicCode">
        </div>
        <div class="form-item">
          <input v-model="smsCode" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getVerifyCode">{{ second === 60 ? '获取验证码' : `${this.second}秒后重新发送` }}</button>
        </div>
      </div>

      <div class="login-btn" @click="loginAccount">登录</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;

    h3 {
      font-size: 26px;
      font-weight: normal;
      text-align: left;
    }

    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
      text-align: left;
    }
  }
}

.form-item {
  border-bottom: 1px solid #f3f1f2;
  padding: 8px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;

  .inp {
    display: block;
    border: none;
    outline: none;
    height: 32px;
    font-size: 14px;
    flex: 1;
  }

  img {
    width: 94px;
    height: 31px;
  }

  button {
    height: 31px;
    border: none;
    font-size: 13px;
    color: #cea26a;
    background-color: transparent;
    padding-right: 9px;
  }
}

.login-btn {
  width: 100%;
  height: 42px;
  margin-top: 39px;
  background: linear-gradient(90deg, #ecb53c, #ff9211);
  color: #fff;
  border-radius: 39px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

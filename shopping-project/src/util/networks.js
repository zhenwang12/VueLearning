import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store/index'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000,
  headers: {
    platform: 'H5'
  }
})

// 自定义配置 -请求/响应 -拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    forbidClick: true,
    message: '加载中',
    duration: 0
  })

  const token = store.getters.getUserToken
  if (token) {
    // 含有特殊字符时，用【】来表示
    config.headers['Access-token'] = token
    config.headers.platform = 'H5'
  }
  // console.log(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const res = response.data
  if (res.status !== 200) {
    // 给提示
    Toast(res.message)
    // 抛出错误的promise
    return Promise.reject(res.message)
  } else {
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  Toast.clear()
  return Promise.reject(error)
})

// 导出配置
export default instance

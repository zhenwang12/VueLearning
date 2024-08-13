import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import Detail from '@/views/detail/index.vue'
import Pay from '@/views/pay/index.vue'
import Order from '@/views/order/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import Mine from '@/views/layout/mine.vue'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: '/home',
        component: Home
      }, {
        path: '/category',
        component: Category
      }, {
        path: '/cart',
        component: Cart
      }, {
        path: '/mine',
        component: Mine
      }]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    {
      path: '/detail/:id',
      component: Detail
    }, {
      path: '/pay',
      component: Pay
    },
    {
      path: '/order',
      component: Order
    }
  ]
})

const authUrl = ['/pay', '/order']
// 路由全局前置导航守卫
// to：到哪儿去 from：从哪儿来 next()：是否放行
// 1. next()直接放行到to的路径
// 2. next(路径)进行拦截，到next指定的路径
router.beforeEach((to, from, next) => {
// console.log(to, from, next)
  // 看 to.path 是否在 authUrls 中出现过
  if (!authUrl.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }

  // 是权限页面，需要判断token
  // store.state.userInfo.token
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router

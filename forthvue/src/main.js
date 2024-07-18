import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Find from "@/views/Find.vue";
import Mine from "@/views/Mine.vue";
import Home from "@/views/Home.vue";

Vue.config.productionTip = false
//安装注册VueRouter
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {path: '/find', component: Find},
        {path: '/mine', component: Mine},
        {path: '/home', component: Home}
    ]
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

import VueRouter from "vue-router";
import Find from "@/views/Find.vue";
import Mine from "@/views/Mine.vue";
import Home from "@/views/Home.vue";
import Vue from "vue";

//安装注册VueRouter
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {path: "/", redirect: '/home'},
        {path: '/find/:words', component: Find},
        //动态路由 ':参数名', "/:words?" ?表示可选，可以传可以不传
        // {path: '/find/:words', component: Find},
        {path: '/mine', component: Mine},
        {path: '/home', component: Home}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    // 去除链接里的#（需后端支持）
    mode: "history"
})

export default router;

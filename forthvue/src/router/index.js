import VueRouter from "vue-router";
import Find from "@/views/Find.vue";
import Mine from "@/views/Mine.vue";
import Home from "@/views/Home.vue";
import Vue from "vue";

//安装注册VueRouter
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {path: '/find', component: Find},
        {path: '/mine', component: Mine},
        {path: '/home', component: Home}
    ]
})

export default router;

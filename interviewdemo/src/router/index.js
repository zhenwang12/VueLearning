import VueRouter from 'vue-router'
import Vue from "vue";
import Homepage from "@/view/HomePage.vue";
import Article from "@/view/Article.vue";
import Collect from "@/view/Collect.vue";
import LikesPage from "@/view/LikesPage.vue";
import MinePage from "@/view/MinePage.vue";
import ArticleDetail from "@/view/ArticleDetail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/', component: Homepage,
            redirect: '/article',
            //1. 在children中配置嵌套子路由
            //2. 配置二级路由出口
            children: [
                {path: '/article', component: Article},
                {path: '/collect', component: Collect},
                {path: '/likes', component: LikesPage},
                {path: '/mine', component: MinePage},
            ]
        },
        {path: '/detail/:id', component: ArticleDetail},
    ],
    // mode:"history"
})

export default router

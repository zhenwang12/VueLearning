import Vue from 'vue'
import App from './App.vue'
import WzHeader from "@/components/WzHeader.vue";

//组件全局注册 Vue.component('WzHeader', WzHeader)
Vue.component('WzHeader', WzHeader)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')


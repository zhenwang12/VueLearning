<template>
    <div id="app">
        <WzHeader @addItem="addItem"></WzHeader>
        <WzMain :list="list" @deleteItem="deleteItem"></WzMain>
        <WzFooter :total="list?list.length:0" @clearAll="clearAll"></WzFooter>
    </div>
</template>

<script>
import WzHeader from "@/components/WzHeader.vue"
import WzMain from "@/components/WzMain.vue";
import WzFooter from "@/components/WzFooter.vue";

export default {
    name: 'App',
    components: {
        WzHeader,
        WzMain,
        WzFooter
    },
    created() {
        this.list = JSON.parse(localStorage.getItem('list')) || [
            {id: 1, name: '吃饭'},
            {id: 2, name: '喝水'},
            {id: 3, name: '做饭'}
        ]
    },
    watch: {
        list: {
            deep: true,
            handler(val) {
                localStorage.setItem('list', JSON.stringify(val))
            }
        }
    },
    methods: {
        addItem(name) {
            this.list.push({id: +new Date(), name})
        },
        deleteItem(id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        clearAll() {
            this.list = []
        }
    },
    data() {
        return {
            list: [],
        }
    }
}
</script>

<!--让style支持less：
1.给style加上 “lang=less”
2.安装依赖包：less less-load
  yarn add less less-loader -D
-->
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    /* less */

    .box {
        color: #42b983;
    }
}
</style>

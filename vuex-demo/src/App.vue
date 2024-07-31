<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" @click="setUserMethod">
        <div @click="setUser({name:'ww', age:26, gender: false})">{{ count }}</div>
        <div @click="setUserInSecond({name:'hl', age:28, gender: true})">{{ title }}</div>
        <div @click="add()">{{ keyi }}</div>
        <div>{{ this.$store.state.list }}</div>
        <div>{{ this.$store.getters.filterList }}</div>
        <div>{{ filterList }}</div>
        <!-- 访问module子模块属性 -->
        <div>{{ this.$store.state.user.userinfo.name }}</div>
        <!-- 通过mapState映射获取属性 -->
        <div>{{ user.userinfo.name }}: {{ user.score }}</div>
        <div>{{ userinfo.gender }}</div>
        <div>{{ $store.getters['user/getName'] }}</div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
    name: 'App',
    components: {},
    created() {
        console.log()
    },
    computed: {
        //映射属性
        ...mapState(['count', 'title', 'keyi', "list", 'user', 'setting']),
        //开启命名空间，可以直接访问子属性
        ...mapState('user', ['userinfo', 'score']),
        ...mapGetters(['filterList'])
    },
    methods: {
        //全剧映射，映射方法
        ...mapMutations(['addCount', 'subCount', "multiplyCount"]),
        //模块映射
        ...mapMutations('user', ['setUser']),
        ...mapActions(['changeCount']),
        //模块映射
        ...mapActions('user', ['setUserInSecond']),
        add() {
            //调用vuex的mutation中的方法。只能传一个参数，传多个需改为对象
            this.$store.commit('addCount', 10);
        },
        //调用actions中的方法
        handleChange() {
            this.$store.dispatch('changeCount', 666)
        },
        //调用模块内mutation
        setUserMethod() {
            this.$store.commit('user/setUser', {
                name: 'ls',
                age: 24,
                gender: false
            });
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

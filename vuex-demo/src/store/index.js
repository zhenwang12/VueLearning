import Vuex from 'vuex'
import Vue from "vue";
import user from "@/store/modules/user";
import setting from "@/store/modules/setting";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 101,
        title: '101',
        keyi: false,
        list: [1,2,3,4,5,6,7,8,9,10]
    },
    //所有mutation函数第一个参数都是 state，用于获取state对象
    mutations: {
        addCount(state, newVal) {
            state.count += newVal;
        },
        subCount(state, newVal) {
            state.count -= newVal;
        },
        multiplyCount(state, newVal) {
            state.count *= newVal;
        }
    },
    //处理异步操作，不能直接修改state
    actions: {
        //一秒后处理
        changeCount(context, newValue) {
            setTimeout(() => {
                context.commit('addCount', newValue);
            }, 1000)
        }
    },
    getters: {
        filterList(state) {
            return state.list.filter((item) => item > 5)
        }
    },
    modules: {
        user,
        setting,
    }
})

export default store

import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 101,
        title: '101',
        keyi: false
    }
})

export default store

import axios from "axios";

const state = {
    list: [{
        id: '',
        name: '',
        price: 0,
        count: 0,
        image: ''
    }]
}
const mutations = {
    updateList(state, payload) {
        state.list = payload
    },
    updateItem(state, payload) {
        // for (let item of state.list) {
        //     if (item.id === payload.id) {
        //         item.count = payload.count
        //     }
        // }
        const item = state.list.find(item => item.id === payload.id)
        item.count = payload.count
    },
}
const actions = {
    async getList(context) {
        const res = await axios.get("http://localhost:3000/cart")
        context.commit('updateList', res.data)
    },
    // async changeCount(context, payload) {
    //     console.log(payload)
    //     const res = await axios.patch(`http://localhost:3000/cart/${payload.id}`, {count: payload.count})
    // }
}
const getters = {
    totalCount(state) {
        return state.list.reduce((total, item) => total + item.count, 0);
    },
    totalPrice(state) {
        return state.list.reduce((total, item) => total + item.price * item.count, 0);
    },
}

export default {
    namespaced: true,
    state, mutations, actions, getters
}

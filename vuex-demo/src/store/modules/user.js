const state = {
    userinfo: {
        name: 'zs',
        age: 22,
        gender: true
    },
    score: 88,
}
const mutations = {
    setUser(state, newInfo) {
        state.userinfo = newInfo
    }
}
const actions = {
    setUserInSecond(context, newTime) {
        setTimeout(() => {
            context.commit('setUser', newTime);
        }, 2000)
    }
}
const getters = {
    getName() {
        return state.userinfo.name.toUpperCase()
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

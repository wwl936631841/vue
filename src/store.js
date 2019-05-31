import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    number:0
}

const getters = {
    getNum(){
        return state.number
    }
}

const mutations = {
    addNum(state){
        state.number+=2
    },
    delete(state){
        state.nume-=1
    }
}

const actions = {
    addNumShow(context){
        context.commit('delete')
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
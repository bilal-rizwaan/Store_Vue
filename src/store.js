import Vuex from 'vuex';
const store = new Vuex.Store({  
    state:{
        count:0
    },

    mutations:{
        increment: state => state.count++,
        decrement : state =>state.count--
    },

    actions:{
        increment(count) {
            count.commit('increment')
        },

        decrement(count) {
            count.commit('decrement')
        }
    },  

    getters:{},

})
export default store;
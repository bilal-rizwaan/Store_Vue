import Vuex from 'vuex';
const store = new Vuex.Store({  
    state:{
        // count:0
        user:{
            username:'john',
            age:21,
            email:'john@gmail.com'
        }
    },

    mutations:{
        // increment: state => state.count++,
        // decrement : state =>state.count--
    },

    actions:{
        // increment(count) {
        //     count.commit('increment')
        // },

        // decrement(count) {
        //     count.commit('decrement')
        // }
    },  

    getters:{},

})
export default store;
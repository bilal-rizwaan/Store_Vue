import { createApp} from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from './store'


createApp(App)
.use(store)
.use(Vuex)
.use(VueAxios,axios)
.mount('#app')

// import Vue from 'vue';
// import App from './App.vue';
// import store from './store'

// new Vue({   
//    store,
//    render: (h) => h(App),
// }).$mount('#app');

<template>
    <div>
      <div class="wrapper">
        <right></right>
        <left></left> 
      </div>
    </div>
</template>

<script>
// import store from '@/store'
import right from '@/components/right.vue'
import left from '@/components/left.vue'
// import axios from 'axios'
export default {
    name: 'App',
    // store,
    components: {
    right,
    left,
  },




  data(){
    return{
      // drawer: this.$store.state.drawer
    }
  },





  // computed: {
  //           drawers: {
  //               get () {
  //                   return this.$store.state.drawer
  //               },
  //               set (value) {
  //                   this.$store.commit('toggleDrawer', value)
  //               }
  //           }
  //       },
}
</script>

<style>
body{
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  display: flex;
}
</style>

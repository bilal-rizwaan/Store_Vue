<template>
    <div>
      <div class="wrapper">
        <right :listdata="list" @clickedItem='clicked'></right>
        <left>{{patch}}</left> 
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
      list:[1,2,3,4,5],
      patch:[]
    }
  },
  methods:{
    clicked(value){
      this.patch.push(value);

    }
  }






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

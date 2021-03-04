<template>
    <div>
        <div class="left">
            <div class="product" @click="product()" > 
                <p><span>Qty:{{shows}}</span></p>
                <img src="../assets/1.jpg" alt="">
                <h3>$2500</h3>
            </div>

            <!-- \*
            <h1>Add :{{count}}</h1> 
            <button @click="increment">Add</button>
            <button @click="decrement">Dec</button>
            */ -->
        </div>
    </div>
</template>
<script>

// import axios from 'axios'

export default {
    name:'left',
    data(){
        return{
            shows:0,
        }
    },
    mounted(){
        this.product();
    },
    /*
    // computed:{
    //     count() {
    //         return this.$store.state.count
    //     }
    // },
    // methods:{
    //     product:function(){
    //         this.shows++;
    //         console.log(this.shows);
    //     },

    //     increment () {
    //         this.$store.dispatch('increment')
    //     },

    //     decrement () {
    //         this.$store.dispatch('decrement')
    //     },

        
    
    // },
    */


    }
    
</script>
<style scoped>
.left{
    width: 500px;
    height: 500px;
    border: 2px solid #000;
    margin:12px;
}
.product{
    width: 100px;
    padding: 10px;
    background: chartreuse;
    position: relative;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
}
.product p:nth-child(2){
    right: 0.4rem;
    top: -1rem;
    position: absolute;
}
.product p span{
    background: red;
    color: #fff;
    padding: 2.5px;
    border-radius: 10px;
    position: absolute;
    left:0px;
    top: 0px;    
    font-size: 12px;
}
.product img{
    width: 100%;
}
</style>
<template>
    <div>
        <div class="left">
            <div class="product" @click="product()" > 
                <p><span>Qty:{{shows}}</span></p>
                <img src="../assets/1.jpg" alt="Dummy Img">
                <h3>$2500</h3>
            </div>
            <ul v-for="data in $store.state" v-bind:key="data.id">
                <li>{{data.username}}</li>
                <li>{{data.age}}</li>
                <li>{{data.email}}</li>
            </ul>

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
        this.product(),
        console.log(this.$store.state.user)
        // console.log(this.$store.state.user.age)
    },
    computed:{
    
    },
    methods:{
        product:function(){
            this.shows++;
            console.log(this.shows);
        },    
    },
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
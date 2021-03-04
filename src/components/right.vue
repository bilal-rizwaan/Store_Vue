<template>
    <div>
        <div class="right">
            <ul v-for="data in listdata" :key="data" @click="$emit('clickedItem',data)">
                <!-- <li>{{data}}</li> -->
                <li>{{data}}</li>
            </ul>
        </div>
    </div>
</template>
<script>

// import axios from 'axios'

export default {
    name:'right',
    props:['listdata']
}
</script>
<style scoped>
.right{
    width: 500px;
    height: 500px;
    border: 2px solid #000;
    margin:12px;
}
</style>
<template>
<div>
    3333
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <img :src="item.img" alt="">
        </li>
    </ul>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        Axios.get('/getlist').then(res => {
            this.list = res.data.data
            console.log(this.list)
        })
    },
}
</script>

<style>
img {
    width: 40%;
    height: 200px;
    padding: 10px;
    float: left;

}
</style>

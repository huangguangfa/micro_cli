<template>
    <div class="sidebar">
        <ul>
            <li v-for="(item,index) in $store.getters.systemMenuList" 
                :class="{ 'currentRouter':$route.path === item.url } "
                :key="index" @click="toOtherRouter(item)"> {{ item.mName }}</li>
        </ul>
    </div>
</template>

<script>
    import { routerGo }  from '../utils/utils.js'
    export default{
        methods:{
            toOtherRouter(o){
                routerGo(o.url)
            }
        }
    }
</script>

<style lang="less">
    .sidebar{
        width: 150px; margin-right: 5px;
        ul{
            li{
                padding: 10px; cursor: pointer;
                text-align: center; line-height: 20px; 
                // border: 1px solid #eee;
            }
        }
        .currentRouter{ background: coral; color: #fff; }
    }
</style>
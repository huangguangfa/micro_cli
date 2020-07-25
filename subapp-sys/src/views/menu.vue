<template>
    <div class="about">
        <fcw-tag type="warning">这里是系统管理模块😊---菜单管理</fcw-tag>
        <p class="menu">菜单管理</p>
        <p class="sendMes" @click="sendmsg">修改登陆用户</p>
    </div>
</template>
<script>
    import {setState } from '../utils/app-store'
    export default{
        methods:{
            sendmsg(){
                setState({
                    data:{
                        name:'系统管理用户',
                        mes:'系统管理发送的消息',
                        sendUser:'sys系统子应用',
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .menu{
        padding: 20px;background: #6A5ACD; margin: 10px 0; color: #fff;
    }
    .sendMes{
        font-size: 12px; width: 80px; border: 1px solid #6A5ACD; padding: 10px; text-align: center; color:#6A5ACD ; border-radius: 10px;cursor: pointer; 
        &:hover{
            background: #6A5ACD; color: #fff; 
        }
    }
</style>
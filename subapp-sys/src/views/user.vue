<template>
    <div class="about">
        <fcw-tag type="warning">这里是系统管理模块😊---用户管理</fcw-tag>
        <p class="user">用户管理</p>
        <fcw-button type="primary" @click="toChildren">to角色管理</fcw-button>
    </div>
</template>

<script>
    export default{
        methods:{
            toChildren(){
                this.$router.push({
                    path:'/role'
                })
            }
        }
    }
</script>

<style lang="less">
    .user{
        padding: 20px;background: #409eff; margin: 10px 0; color: #fff;
    }

</style>
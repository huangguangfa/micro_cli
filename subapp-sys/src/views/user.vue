<template>
    <div class="about">
        <fcw-tag type="warning">这里是系统管理模块😊---用户管理</fcw-tag>
        <p class="user">用户管理</p>
        <fcw-button type="primary" @click="toChildren">to角色管理</fcw-button>
        <el-button type="primary">主要按钮</el-button>
        
    </div>
</template>

<script>
    import ajax from '../utils/ajax'
    export default{
        data(){
            return {
                copyValue:'xsaxas'
            }
        },
        created(){
            this.getUserList()
        },
        methods:{
            toChildren(){
                this.$router.push({
                    path:'/role'
                })
            },
            async getUserList(){
                let result = await ajax.$get('/blogs/demo');
                this.$message({type:'success',  message:'请求用户列表成功'})
                console.log('请求用户列表成功',result)
            }
        }
    }
</script>

<style lang="less">
    .user{
        padding: 20px;background: #409eff; margin: 10px 0; color: #fff;
    }

</style>
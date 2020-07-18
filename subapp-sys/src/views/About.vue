<template>
    <div class="about">

        <h1>系统管理模块😊</h1>
        <button @click="toChildren">进入自己路由children</button>
        
        <button @click="setUserInfo">修改登陆用户用户</button>
    </div>
</template>

<script>
    export default{
        methods:{
            toChildren(){
                this.$router.push({
                    path:'/children'
                })
            },
            setUserInfo(){
                let user = {
                    name:'系统管理用户',
                    meunList:[
                        {
                            name:'人员录入',
                            url:'/addUser'
                        }
                    ]
                }
                this.changeDataUser(user)
            }
        }
    }
</script>

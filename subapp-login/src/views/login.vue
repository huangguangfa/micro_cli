<template>
    <div class="login fadeInLeft">
        <div class="login_left"></div>
        <div class="login_right"></div>
        <div class="login_box">
            <div class="login_content">
                <p class="title">LOGIN(子应用）</p>
                <div class="changInput">
                    <input v-model="userName" placeholder="Enter userName" name="userName" />
                </div>
                <div class="changInput">
                    <input type="password" placeholder="Password" name="password" />
                </div>
                <button class="login_btn" @click="login">Sign in</button>
                <p class="back"></p>
            </div>
        </div>
    </div>
</template>
<script>
    import { routerGo } from '../utils/utils'
    import { setState } from '../utils/app-store'
    export default{
        data(){
            return {
                userName:'admin'
            }
        },
        methods:{
            login(){
                setState({
                    data:{
                        name:this.userName,
                        mes:'通知个个应用用户已经登陆',
                        sendUser:'Login子应用',
                    },
                    token:'32131231289634'
                })
                routerGo('/sys/user')
            } 
        }  
    }
</script>
<style lang="less" scoped>
.login{
    width: 100%; height: 100vh; display: flex; overflow: hidden;
    >
    div{
        width: 50%; height: 100%;
    }
    .login_left{background-image: url('../assets/bg-image.jpeg');}
    .login_right{background: #CAF0D3;}
    .login_box{
        width:100vw; height: 100vh; position: fixed; top: 0; left: 0; display: flex; 
        justify-content: center; align-items: center;}
    .login_content{
        padding: 40px;background: #fff; border-radius: 10px; position: relative; overflow: hidden;
        .back{width: 20px; height: 20px; background: #CAF0D3; position: absolute; right: 0px;top: 0px;}
        .title{margin-top: 10px;font-weight: bold;font-size: 60px;letter-spacing: 3px; color: #000; cursor: pointer;
            width: 100%; text-align: center;}
        .changInput{
            width: 420px; text-align: center; height: 50px; margin: 25px 0;
            input{
                width: 100%;
                font-size: 20px;
                font-weight: lighter;
                border: none;
                background-color: #F0F0F0;
                color: #465347!important;
                padding: 16px 30px;
                border-radius: 50px;
                transition: 0.2s;
                outline: none;
                box-sizing: border-box;
            }
        }
        .login_btn{
            border-radius: 50px;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 20px;
            padding: 14px;
            background-color: #00B72E;
            outline: none;
            cursor: pointer;
            width: 420px;
            color: #fff;
            margin-top: 40px;
        }
        input:focus{ background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);}
    }
}


    
</style>
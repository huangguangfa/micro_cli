<template>
    <div class="header">
        <div class="header-content">
            <ul class="title_Module">
                <li :class="$store.getters.currentSystem === item.id?'title_Selected':''" 
                    v-for="(item ,index) in systemModule" 
                    :key="index"
                    @click="switchSystem(item)">
                    <i class="iconfont"></i>
                    <span>{{ item.name }}</span>
                </li>
                <li class="message">
                    <span class="mesContent">消息：{{ $store.getters.userInfo.mes || '暂无' }} </span> 
                    <span class="sendUser">发送人：{{ $store.getters.userInfo.sendUser || '暂无' }}</span> 
                </li>
            </ul>
            <div class="outLogin" @click="outLogin">
                <span class="userName">{{ $store.getters.userInfo.name }}</span>
                退出登陆
            </div>
        </div>
    </div>
</template>

<script>
    import systemModule from './systemModule.json';
    import { routerGo } from '../utils/utils';
    export default{
        data(){
            return {
                systemModule:systemModule
            }
        },
        created(){
            if(!this.$store.getters.systemMenuList){
                this.switchSystem(this.systemModule[0])
                routerGo(this.systemModule[0].menuList.url)
            }
        },
        methods:{
            switchSystem(sys){
                this.$message({
                    type:'success',
                    message:'切换到'+ sys.name + '应用',
                })
                if(this.$store.getters.currentSystem === sys.id){ return false }
                this.$store.commit('system/SET_CURRENTSYSTEM_VALUE',sys.id);
                this.$store.commit('system/SET_SYSTEMMENULIST_VALUE',sys.menuList);
                routerGo(sys.menuList[0].url)
            },
            outLogin(){
                this.$confirm({
                    icon:'gf-shanchu',
                    content:'你确定要退出登陆吗？'
                }).then( confirm =>{
                    this.$store.commit('user/SET_LOGIN_VALUE',false);
                    routerGo('/login')
                    console.log(confirm)
                }).catch( cancel =>{
                    console.log(cancel)
                })
            }
        }
    }
</script>

<style lang="less">
    
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 54px;
        font-size: 22px;
        color: #343435;
        background: #fff;
        box-shadow: 0 1px 10px #ddd;
        overflow: hidden;
        padding: 0 25px; box-sizing: border-box;
        margin-bottom:10px;
    }
    .header-content{
        display: flex; justify-content: space-between;
    }
    .title_Module{
        display: flex;
        li{
            height: 54px; display: flex;align-items: center; 
            cursor: pointer;margin: 0 19.5px;font-size: 15px;color: #030202;
            .iconfont{ font-size: 18px; margin-right: 9px;}
        }
        li:hover{
            color: #1ca75f; box-sizing: border-box;
        }
        li:nth-child(1){margin-left:0px;}
        .title_Selected{
            color: #1ca75f; box-sizing: border-box;
            font-weight: 700; align-items: center;
            border-bottom: 2px solid #1ca75f;
            span{font-weight: 700; font-size: 15px;}
        }
        .message{
            .mesContent{
                font-size: 12px; width: 300px; color: yellowgreen; overflow: hidden; white-space: nowrap; margin-right: 20px;
            }
            .sendUser{ color: tomato; font-size: 12px;}
        }
    }
    .outLogin{
        font-size: 12px; line-height:54px; cursor: pointer;
    }
    .userName{
        color: yellowgreen; border: 1px solid yellowgreen; padding: 5px; border-radius: 20px; line-height: 20px;
    }
</style>    
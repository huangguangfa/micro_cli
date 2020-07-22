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
            </ul>
        </div>
    </div>
</template>

<script>
    import systemModule from './systemModule.json'
    export default{
        data(){
            return {
                systemModule:systemModule
            }
        },
        created(){
            if(!this.$store.getters.systemMenuList){
                this.switchSystem(this.systemModule[0])
            }
        },
        methods:{
            switchSystem(sys){
                if(this.$store.getters.currentSystem === sys.id){ return false }
                this.$store.commit('system/SET_CURRENTSYSTEM_VALUE',sys.id);
                this.$store.commit('system/SET_SYSTEMMENULIST_VALUE',sys.menuList);
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
    }
</style>    
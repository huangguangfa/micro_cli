<template>
    <div class="home-container">
        <!-- 头部 -->
        <v-header v-show="$store.getters.loginStatus"></v-header>
        <div class="main-content">
            <!-- 左侧菜单栏 -->
            <v-Sidebar v-show="$store.getters.loginStatus"></v-Sidebar>
            <!-- 子应用渲染区 -->
            <div class="page-conten">
                <!-- qiankun2.0  container 模式-->
                <div id="subapp-viewport" class="app-view-box"></div>
            </div>
        </div>
        <img class="qrcode" src="https://gf-blogs.oss-cn-shenzhen.aliyuncs.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F/WechatIMG129.jpeg" alt="">
    </div>
</template>
<script>
    import vHeader from './Header'
    import vSidebar from './Sidebar.vue'
    export default{
        components:{
            vSidebar,vHeader
        },
    }
</script>
<style lang="less" scoped>
    .home-container{
       height: 100%;
        .main-content{
            width: 100%;display: flex; 
            .page-conten{
                width: 100%; height: 100%; background: #f0f0f0; 
            }
        }
    }
    .m-top{ margin-top: 20px; margin-left: 10px;}
    .usrName{color: red;}
    .qrcode{width: 150px; height: 150px; position: fixed;right: 40px;bottom: 10px;}
</style>
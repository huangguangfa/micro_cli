<template>
    <div class="home-container">
        <div class="left">
            <ul>
                <li>智能考勤</li>
                <li>系统管理</li>
                <li>测试管理</li>
                <li>测试管理</li>
                <li>测试管理</li>
                <p class="m-top">用户：
                    <span class="usrName">{{ $store.getters.userInfo.name }}</span> 
                </p>
            </ul>
        </div>
        <!-- 子应用渲染区 -->
        <div class="page-conten">
            <!-- qiankun2.0  container 模式-->
            <div id="subapp-viewport" class="app-view-box"></div>
        </div>
        
    </div>
</template>

<style lang="less" scoped>
    .home-container{
        display: flex;
        .left{
            width: 200px; margin-right: 10px;
            ul{
                li{
                    text-align: center; border: 1px solid #eee; padding: 10px 0; cursor: pointer;
                    &:hover{ background: wheat;}
                }
            }
        }
        .page-conten{
            width: 100%;
        }
    }
    .m-top{ margin-top: 20px; margin-left: 10px;}
    .usrName{color: red;}
</style>
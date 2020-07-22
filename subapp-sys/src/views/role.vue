<template>
    <div>
        <fcw-tag type="warning">这里是系统管理模块😊---角色管理</fcw-tag>
        <p class="role">角色管理</p>
        <router-link to="/user">
            <fcw-button type="danger">to用户管理</fcw-button>
        </router-link>
    </div>
</template>
<style lang="less">
    .role{
        padding: 20px;background: #f56c6c; margin: 10px 0; color: #FFF;
    }
</style>
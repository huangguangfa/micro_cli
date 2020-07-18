<template>
    <div id="sys-app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'sys',
    props: {
        userInfo:Object,
    }
}
</script>
<style src="./style/reaet.css"></style>

<style lang="less" scoped>
    #sys-app{
        padding: 20px;
        border: 5px solid yellow;
    }
</style>

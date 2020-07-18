<template>
    <div id="root" class="main-container">
        <HOME></HOME>
    </div>
</template>

<script>
import HOME from './components/home'
export default {
    name: "rootView",
    components:{
        HOME
    },
    props: {
        loading: Boolean,
        content: String 
    }
}
</script>

<style src="./style/reaet.css"></style>

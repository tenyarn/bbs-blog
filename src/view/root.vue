<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import Wrap from '../view/wrap.vue'
const ss = "ss"

</script>

<template>
    <div class = "top">
        <div class = "navigate">
            导航栏
        </div>
    </div>
    <div class = "bottom">
        <HelloWorld :msg="ss"></HelloWorld>
        <Wrap></Wrap>
    </div>
    <RouterLink to="test">test</RouterLink>
    <router-view name="test"></router-view>
    

</template>

<style scoped>
    
</style>

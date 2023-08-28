<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';

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
    </div>
    

</template>

<style scoped>
    
</style>

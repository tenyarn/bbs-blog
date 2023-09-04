<script setup lang="ts">

</script>

<template>
    <div class="main">
        <div class="ch" v-for="item in 16">
        
            <div class="ch1" v-for="item in 16">
            
            </div>
        </div>
    </div>
</template>
<style scoped>
.main{
    width: 800px;
    height: 800px;
    background-color: rgb(73, 71, 71);
    display: flex;
    flex-wrap: wrap;
}
.ch{
    width: 200px;
    height: 200px;
    background-color: aqua;
    display: flex;
    flex-wrap: wrap;
    border: 0px solid black;
    margin: 0;
    border-radius: 10px;
}
.ch1{
    width: 50px;
    height: 50px;
    background-color: cadetblue;
    border-radius: 10px;
    border: 0px solid red;
}
</style>
<script setup lang="ts">
    import Comments from '../components/comments.vue'
    let url = '/favicon.ico'
    url = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
</script>
<template>
    <div style="height: 700px;width: 100%;background-color: aliceblue;">
        <el-scrollbar height="700px">
    <Comments v-for="item in 20" :key="item" :url="url" class="scrollbar-demo-item">{{ item }}</Comments>
  </el-scrollbar>
    </div>
</template>
<style scoped>
.scrollbar-demo-item {
  display: flex;
  
  
  height:auto;
  margin: 20px;
 
  
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
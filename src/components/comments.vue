<script setup lang="ts">
    import { UserFilled } from '@element-plus/icons-vue'
    defineProps<{url:string}>()
</script>
<template>
    <div class="comment">
        <el-avatar :icon="UserFilled" v-if="url==''"/>
        <el-avatar :src="url" v-else/>
        <div class="comment-item">
            <div>
                nickname
            </div>
            <span>sssssssssssssssssssssssssss</span>
            <div>
                bottom
            </div>
        </div>
        
    </div>
    
</template>
<style scoped>
    .comment{
        
    }
    .comment-item{
        position: relative;
        width: 100%;
        margin: 10px;
        border-bottom: 1px solid rgb(209, 209, 209);
        display: flex;
        flex-direction: column;
    }
</style>

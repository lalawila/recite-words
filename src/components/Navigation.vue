<template>
    <div class="navigation row-between">
        <div>
            <RouterLink class="btn" :to="{ name: 'Home' }">背单词</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Words' }">词表</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Statistics' }"
                >数据统计</RouterLink
            >
        </div>
        <div>
            <!-- <ElAvatar :icon="UserFilled"> </ElAvatar> -->
            <RouterLink class="btn" :to="{ name: 'Login' }">登录</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Signup' }">注册</RouterLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import { UserFilled } from "@element-plus/icons-vue"
</script>
<style>
.navigation {
    max-width: 800px;
    margin: 0 auto;

    padding: 20px;
}
a {
    color: inherit;
    text-decoration: inherit;
}
.btn {
    font-weight: bold;

    color: #ccc;
    padding: 10px 20px;
}
.btn:hover {
    color: white;
    background-color: #262626;
    border-radius: 8px;
}
</style>

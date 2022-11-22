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
            <template v-if="tokenStore.isLogined">
                <ElAvatar class="right-10" :icon="UserFilled"> </ElAvatar>
                <Text inline bold>{{ userStore.username }}</Text>
            </template>
            <template v-else>
                <RouterLink
                    class="btn"
                    :to="{ name: 'Login', query: { redirect: route.path } }"
                    >登录</RouterLink
                >
                <RouterLink
                    class="btn"
                    :to="{ name: 'Signup', query: { redirect: route.path } }"
                    >注册</RouterLink
                >
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useTokenStore } from "@/stores/token"
import { useUserStore } from "@/stores/user"

import { UserFilled } from "@element-plus/icons-vue"

const tokenStore = useTokenStore()
const userStore = useUserStore()

const route = useRoute()
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

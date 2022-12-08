<template>
    <header class="navigation row-between">
        <div class="only-pc row-start">
            <img class="logo" src="/logo.png" />
            <RouterLink class="btn" :to="{ name: 'Home' }">背单词</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Words' }">词表</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Statistics' }"
                >学习数据</RouterLink
            >
            <ElSwitch
                class="theme-switch"
                v-model="themeStore.theme"
                :active-value="Theme.dark"
                :inactive-valu="Theme.light"
                :active-icon="Moon"
                :inactive-icon="Sunny"
            />
        </div>
        <Hamburger class="only-phone">
            <img class="logo" src="/logo.png" />
            <RouterLink class="btn" :to="{ name: 'Home' }">背单词</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Words' }">词表</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Statistics' }"
                >学习数据</RouterLink
            >
            <ElSwitch
                class="theme-switch"
                v-model="themeStore.theme"
                :active-value="Theme.dark"
                :inactive-valu="Theme.light"
                :active-icon="Moon"
                :inactive-icon="Sunny"
            />
        </Hamburger>
        <div>
            <template v-if="tokenStore.isLogined">
                <ElDropdown size="large">
                    <ElAvatar :src="userStore.avatarUrl" />
                    <template #dropdown>
                        <ElDropdownMenu>
                            <Text :vertical="5" bold center>{{
                                userStore.username
                            }}</Text>
                            <ElDropdownItem
                                @click="router.push({ name: 'SettingInfo' })"
                                >个人设置</ElDropdownItem
                            >
                            <ElDropdownItem
                                @click="router.push({ name: 'SettingLearn' })"
                                >学习设置</ElDropdownItem
                            >
                            <ElDropdownItem @click="tokenStore.logout()" divided
                                >退出登录</ElDropdownItem
                            >
                        </ElDropdownMenu>
                    </template>
                </ElDropdown>
            </template>
            <template v-else>
                <RouterLink
                    class="btn"
                    :to="{ name: 'Login', query: { redirect: route.fullPath } }"
                    >登录</RouterLink
                >
                <RouterLink
                    class="btn"
                    :to="{
                        name: 'Signup',
                        query: { redirect: route.fullPath },
                    }"
                    >注册</RouterLink
                >
            </template>
        </div>
    </header>
</template>
<script setup lang="ts">
import { useTokenStore } from "@/stores/token"
import { useUserStore } from "@/stores/user"
import { useThemeStore, Theme } from "@/stores/theme"

import { Sunny, Moon } from "@element-plus/icons-vue"

const tokenStore = useTokenStore()
const userStore = useUserStore()
const themeStore = useThemeStore()

const route = useRoute()
const router = useRouter()
</script>
<style scoped>
.navigation {
    max-width: 800px;
    margin: 0 auto;

    padding: 20px;
}
a {
    color: inherit;
    text-decoration: inherit;
}

.logo {
    width: 36px;
    margin-right: 20px;
}

.btn {
    font-weight: bold;

    color: var(--text-third-color);
    padding: 10px 20px;
}
.btn:hover {
    color: var(--text-color);
    background-color: var(--background-second-color);
    border-radius: 8px;
}
.theme-switch {
    padding: 10px 20px;

    --el-switch-on-color: var(--background-second-color);
}
</style>

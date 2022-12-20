<template>
    <header class="navigation row-between">
        <div class="only-pc row-start">
            <img class="logo" src="/logo.png" />
            <RouterLink class="btn" :to="{ name: 'Home' }">{{
                $t("背单词")
            }}</RouterLink>
            <RouterLink class="btn" :to="{ name: 'Words' }">{{
                $t("词表")
            }}</RouterLink>
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

            <ElDropdown size="large">
                <TransIcon class="translate" @click="langStore.locale = 'en'" />

                <template #dropdown>
                    <ElDropdownItem
                        v-for="locale of langStore.availableLocales"
                        @click="langStore.locale = locale"
                        class="lang"
                    >
                        {{ $t(locale) }}
                    </ElDropdownItem>
                </template>
            </ElDropdown>
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
            <ElDropdown size="large">
                <TransIcon class="translate" @click="langStore.locale = 'en'" />

                <template #dropdown>
                    <ElDropdownItem
                        v-for="locale of langStore.availableLocales"
                        @click="langStore.locale = locale"
                        class="lang"
                    >
                        {{ $t(locale) }}
                    </ElDropdownItem>
                </template>
            </ElDropdown>
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
import { useLangStore } from "@/stores/lang"

import { Sunny, Moon } from "@element-plus/icons-vue"

import TransIcon from "@/assets/icons/trans.svg?component"

const tokenStore = useTokenStore()
const userStore = useUserStore()
const themeStore = useThemeStore()
const langStore = useLangStore()

const route = useRoute()
const router = useRouter()
</script>
<style scoped>
.navigation {
    max-width: 800px;
    margin: 0 auto;

    height: 60px;
    padding: 0 20px;

    position: sticky;
    top: 0;

    background-color: var(--background-color);

    transition: background-color 1s;

    z-index: 999;
}
a {
    color: inherit;
    text-decoration: inherit;
}

.logo {
    width: 36px;
    margin: 0 20px;
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

.translate {
    margin: 10px 20px;
    width: 25px;
    fill: var(--text-third-color);
}
</style>

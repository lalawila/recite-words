<template>
    <div class="container">
        <h1 class="text-center">用户登录</h1>
        <ElInput v-model="username" placeholder="请输入用户名" size="large">
            <template #prepend>用户名</template>
        </ElInput>
        <ElInput
            v-model="password"
            placeholder="请输入密码"
            size="large"
            show-password
        >
            <template #prepend>密&emsp;码</template>
        </ElInput>
        <ElButton type="primary" @click="onlogin">登录</ElButton>
    </div>
</template>
<script setup lang="ts">
import { login } from "@/api/user"
import { handleApiError } from "@/api/http"

const username = ref("")
const password = ref("")

async function onlogin() {
    try {
        const data = await login(username.value, password.value)
        console.log("登录成功")
        console.log(data)
    } catch (error: any) {
        handleApiError(error, (response) => {
            console.log(response)
        })
    }
}
</script>
<style scoped>
.container {
    max-width: 400px;
    padding: 20px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    gap: 20px;
}
</style>

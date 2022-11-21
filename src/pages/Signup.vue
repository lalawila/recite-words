<template>
    <div class="container">
        <h1 class="text-center">用户注册</h1>
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
        <ElInput
            v-model="passwordAgain"
            placeholder="请重复输入密码"
            size="large"
            show-password
        >
            <template #prepend>重&emsp;复</template>
        </ElInput>
        <ElAlert v-show="warningMsg" :title="warningMsg" type="warning" />
        <ElButton type="primary" @click="onsignup">注册</ElButton>
    </div>
</template>
<script setup lang="ts">
import { signup } from "@/api/user"
import { handleApiError } from "@/api/http"

const username = ref("")
const password = ref("")
const passwordAgain = ref("")

const warningMsg = computed(() => {
    if (
        username.value.length > 0 &&
        (username.value.length < 6 || username.value.length > 12)
    ) {
        return "用户名必须为 6 至 12 位"
    }

    if (
        password.value.length > 0 &&
        (password.value.length < 6 || password.value.length > 12)
    ) {
        return "密码必须为 6 至 12 位"
    }

    if (
        passwordAgain.value.length > 0 &&
        passwordAgain.value !== password.value
    ) {
        return "前后密码不匹配"
    }
})

async function onsignup() {
    try {
        const data = await signup(username.value, password.value)
        console.log("注册成功")
        console.log(data)
    } catch (error: any) {
        handleApiError(error, (response) => {
            if (response.data.code === 2002) {
                alert("用户名必须为 6 至 12 位")
            } else if (response.data.code === 2001) {
                ElMessage({
                    message: "用户名已经被注册，请更换。",
                    type: "error",
                })
            }
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

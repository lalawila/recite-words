<template>
    <Container class="container">
        <ElAvatar @click="selectImage" :size="128" :src="avatarUrl"></ElAvatar>
        <ElInput v-model="username" placeholder="请输入用户名~"></ElInput>
        <ElInput
            v-model="bio"
            type="textarea"
            :rows="4"
            placeholder="请输入个性签名~"
        ></ElInput>
        <ElButton type="primary" @click="update">更新</ElButton>
    </Container>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user"
import type { Ref } from "vue"
const userStore = useUserStore()

const username = ref(userStore.username)
const bio = ref(userStore.bio)
const avatarUrl = ref(userStore.avatarUrl)

// 存储选择的头像
const avatar: Ref<File | null> = ref(null)

const pickerOpts = {
    types: [
        {
            description: "Images",
            accept: {
                "image/*": [".png", ".jpeg", ".jpg"],
            },
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
}
async function selectImage() {
    // open file picker
    const [handle] = await window.showOpenFilePicker(pickerOpts)
    avatar.value = await handle.getFile()

    // 创建一个指向内存中文件的 URL
    avatarUrl.value = URL.createObjectURL(avatar.value)
}
function update() {}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 40px;
}
</style>

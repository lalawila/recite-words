<template>
    <Container class="container">
        <div class="box" @click="selectAvatar">
            <ElAvatar class="avatar" :size="128" :src="userStore.avatarUrl" />
            <ElIcon class="camera" :size="60">
                <Camera />
            </ElIcon>
        </div>
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
import { Camera } from "@element-plus/icons-vue"
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
async function selectAvatar() {
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
.box {
    position: relative;

    cursor: pointer;
}
.avatar {
    transition: filter 0.5s;
}
.camera {
    position: absolute;
    /* 水平垂直居中 */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    opacity: 0;

    transition: opacity 0.5s;

    color: white;
}
.box:hover .avatar {
    filter: brightness(0.5);
}
.box:hover .camera {
    opacity: 1;
}
</style>

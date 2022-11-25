<template>
    <Container :width="400" class="container">
        <div class="box" @click="selectAvatar">
            <ElAvatar class="avatar" :size="128" :src="avatarUrl" />
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
        <ElButton type="primary" @click="updateInfo">更新信息</ElButton>
        <div>
            <ElButton text bg @click="updatePasswordVisible = true"
                >修改密码</ElButton
            >
        </div>
    </Container>
    <ElDialog
        v-model="confirmPasswordVisible"
        title="修改用户名需要确认密码"
        width="300px"
        center
    >
        <ElInput v-model="password" placeholder="请确认密码~"></ElInput>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="updateInfo" size="large"
                    >确认密码</el-button
                >
            </span>
        </template>
    </ElDialog>
    <ElDialog
        v-model="updatePasswordVisible"
        title="修改密码"
        width="380px"
        center
    >
        <ElInput
            class="bottom-20"
            v-model="password"
            placeholder="请输入旧密码~"
            size="large"
        >
            <template #prepend>旧密码</template>
        </ElInput>
        <ElInput v-model="newpassword" placeholder="请输入新密码~" size="large">
            <template #prepend>新密码</template></ElInput
        >
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="updatePassword"
                    >更新密码</el-button
                >
            </span>
        </template>
    </ElDialog>
</template>
<script setup lang="ts">
import { Camera } from "@element-plus/icons-vue"
import { useUserStore } from "@/stores/user"
import { updateSelfInfo } from "@/api/user"

const userStore = useUserStore()

const username = ref(userStore.username)
const bio = ref(userStore.bio)
const avatarUrl = ref(userStore.avatarUrl)

// 存储选择的头像
let avatar: File

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
    avatar = await handle.getFile()

    // 创建一个指向内存中文件的 URL
    avatarUrl.value = URL.createObjectURL(avatar)
}

const confirmPasswordVisible = ref(false)
const password = ref("")
async function updateInfo() {
    const data: ParamUpdateSelfInfo = {}
    if (username.value != userStore.username) {
        // 如果修改用户名需要确认密码
        if (password.value === "") {
            confirmPasswordVisible.value = true
        } else {
            data.username = username.value
            data.password = password.value
        }
    }

    if (bio.value != userStore.bio) {
        data.bio = bio.value
    }

    if (avatar) {
        data.avatar = avatar
    }

    await updateSelfInfo(data)
    userStore.updateSelfInfo()
}

const updatePasswordVisible = ref(false)
const newpassword = ref("")
function updatePassword() {}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 20px;
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

<template>
    <div>
        <TodayProgress :today="today" with-progress />
        <Text center :size="36" :top="60" :bottom="20" bold>{{
            task.word
        }}</Text>
        <div class="row-center">
            <VideoPlay
                class="icon"
                @click="playAudio(task.phonetic_audio)"
            ></VideoPlay>
            <Text :left="20" :size="14" color="var(--text-third-color)"
                >/ {{ task.phonetic }} /</Text
            >
        </div>
    </div>
    <div class="bottom">
        <ElButton
            size="large"
            class="button"
            type="primary"
            round
            @click="$emit('remember')"
            >我认识</ElButton
        >
        <ElButton
            size="large"
            class="button"
            type="warning"
            round
            @click="$emit('prompt')"
            >提示一下</ElButton
        >
    </div>
</template>
<script setup lang="ts">
import { VideoPlay } from "@element-plus/icons-vue"
import { playAudio } from "@/common/audio"

defineProps(["today", "task"])
defineEmits(["remember", "prompt"])
</script>
<style scoped>
.icon {
    width: 20px;
    height: 20px;

    cursor: pointer;

    color: var(--primary-color);

    flex-shrink: 0;
}

.example {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    background-color: var(--background-second-color);

    padding: 20px;

    border-radius: 8px;

    width: 100%;
}

.label {
    flex-shrink: 0;
}

.bottom {
    display: flex;
}

.button {
    flex: 1;
}

/* 手机适配 */
@media not screen and (min-width: 768px) {
    .bottom {
        flex-direction: column;
    }
    .button {
        margin: 10px 0;
    }
}
</style>

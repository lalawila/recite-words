<template>
    <Container :width="480">
        <div class="container" v-show="stage == Stage.word">
            <div>
                <Text :size="36" :bottom="20" bold>{{ task.word }}</Text>
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
                    @click="remember"
                    >我认识</ElButton
                >
                <ElButton
                    size="large"
                    class="button"
                    type="warning"
                    round
                    @click="prompt"
                    >提示一下</ElButton
                >
            </div>
        </div>
        <div class="container" v-show="stage == Stage.prompt">
            <div>
                <Text :size="36" :bottom="20" bold>{{ task.word }}</Text>
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
            <div>
                <Text
                    :size="14"
                    :bottom="10"
                    color="var(--text-third-color)"
                    center
                    >根据提示，判断释义</Text
                >
                <div class="example">
                    <Text
                        class="label"
                        color="var(--text-third-color)"
                        :size="14"
                        >例句</Text
                    >
                    <Text bold>{{ task.example_en }}</Text>
                    <VideoPlay
                        class="icon"
                        @click="playAudio(task.example_audio)"
                    ></VideoPlay>
                </div>
            </div>
            <div class="bottom">
                <ElButton
                    size="large"
                    class="button"
                    type="primary"
                    round
                    @click="remember"
                    >想起来了</ElButton
                >
                <ElButton
                    size="large"
                    class="button"
                    type="warning"
                    round
                    @click="forget"
                    >没想起来</ElButton
                >
            </div>
        </div>
        <div class="container" v-show="stage == Stage.detail">
            <Detail :word-id="task.word_id"></Detail>
            <ElButton
                size="large"
                class="button"
                type="primary"
                round
                @click="next"
                >学习下一个</ElButton
            >
        </div>
    </Container>
</template>
<script setup lang="ts">
import { VideoPlay } from "@element-plus/icons-vue"
import { playAudio } from "@/common/audio"
import { getTask, setTaskResult, TaskResult } from "@/api/task"

enum Stage {
    word, // 显示单词
    prompt, // 提示
    detail, // 单词详情
}

const stage = ref(Stage.word)

const task = ref(await getTask())

// 自动播放
// 用户不点击，无法自动播放
playAudio(task.value.phonetic_audio).catch(() => {})

async function remember() {
    await setTaskResult(task.value.task_id, TaskResult.remember)

    stage.value = Stage.detail
}
function prompt() {
    playAudio(task.value.example_audio)

    stage.value = Stage.prompt
}
async function forget() {
    await setTaskResult(task.value.task_id, TaskResult.forget)

    stage.value = Stage.detail
}

async function next() {
    task.value = await getTask()
    playAudio(task.value.phonetic_audio)

    stage.value = Stage.word
}
</script>
<style scoped>
.container {
    width: 100%;

    display: flex;

    flex-direction: column;
    align-items: center;

    justify-content: space-between;

    height: calc(100vh - 80px);

    max-height: 600px;
}
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
}

.label {
    flex-shrink: 0;
}

.bottom {
    width: 100%;
}
.button {
    display: block;
    width: 100%;

    margin: 20px 0;
}
</style>

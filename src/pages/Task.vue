<template>
    <Container :width="400" class="container">
        <template v-if="stage == Stage.word">
            <div>
                <Text :size="36" :bottom="20" bold>{{ task.word }}</Text>
                <div class="row-center">
                    <VideoPlay
                        class="icon"
                        @click="playAudio(task.phonetic_audio)"
                    ></VideoPlay>
                    <Text :size="14" color="var(--text-third-color)"
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
        </template>
        <template v-else-if="stage == Stage.prompt">
            <div>
                <Text :size="36" :bottom="20" bold>{{ task.word }}</Text>
                <div class="row-center">
                    <VideoPlay
                        class="icon"
                        @click="playAudio(task.phonetic_audio)"
                    ></VideoPlay>
                    <Text :size="14" color="var(--text-third-color)"
                        >/ {{ task.phonetic }} /</Text
                    >
                </div>
            </div>
            <div>
                <Text>根据提示，判断释义</Text>
                <div>
                    <div>例句：</div>
                    <div>{{ task.example_en }}</div>
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
        </template>
        <template v-else-if="stage == Stage.detail">
            <WordDetail :wordId="task.word_id"></WordDetail>
            <ElButton
                size="large"
                class="button"
                type="primary"
                round
                @click="next"
                >学习下一个</ElButton
            >
        </template>
    </Container>
</template>
<script setup lang="ts">
import { VideoPlay } from "@element-plus/icons-vue"
import { getTask, setTaskResult, TaskResult } from "@/api/task"
import { playAudio } from "@/common/audio"

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

    margin-right: 10px;
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

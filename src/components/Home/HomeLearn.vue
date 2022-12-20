<template>
    <Container :width="600" class="container">
        <div>
            <Text :size="60" bold class="days" inline>{{
                todayData.clock_in_amount
            }}</Text>
            <span>{{ $t("天") }}</span>
        </div>
        <div class="book">
            <div class="row-between">
                <Text :size="20" bold>四级词汇</Text>
                <RouterLink :to="{ name: 'Words' }">
                    <Text :size="14" color="var(--el-color-primary)" bold
                        >查看词表</Text
                    >
                </RouterLink>
            </div>
            <RouterLink class="setting" :to="{ name: 'SettingLearn' }">
                <ElIcon><Notebook /></ElIcon>
                <span>学习设置</span>
                <ElIcon><ArrowRightBold /></ElIcon>
            </RouterLink>
            <div class="progress row-between">
                <span
                    >已完成
                    {{
                        (
                            (bookData.learned_amount / bookData.book_amount) *
                            100
                        ).toFixed(2)
                    }}%</span
                >
                <span
                    >{{ bookData.learned_amount }} /
                    {{ bookData.book_amount }} 词</span
                >
            </div>
            <ElProgress
                :percentage="
                    (bookData.learned_amount / bookData.book_amount) * 100
                "
                :show-text="false"
            />

            <div class="row-around text-center">
                <div>
                    <Text
                        :size="12"
                        :bottom="4"
                        color="var(--text-second-color)"
                        >应学</Text
                    >
                    <Text bold>{{ todayData.daily_amount }}</Text>
                </div>
                <div>
                    <Text
                        :size="12"
                        :bottom="4"
                        color="var(--text-second-color)"
                        >已学</Text
                    >
                    <Text bold>{{ todayData.learned_amount }}</Text>
                </div>
                <div>
                    <Text
                        :size="12"
                        :bottom="4"
                        color="var(--text-second-color)"
                        >时长</Text
                    >
                    <Text bold>{{
                        `${Math.floor(todayData.learn_duration / 60)}min`
                    }}</Text>
                </div>
            </div>
        </div>
        <ElButton
            class="button"
            type="primary"
            size="large"
            round
            @click="router.push({ name: 'Task' })"
            >开始学习</ElButton
        >
    </Container>
</template>
<script setup lang="ts">
import { getStatisticsBook, getStatisticsToday } from "@/api/statistics"
import { Notebook, ArrowRightBold } from "@element-plus/icons-vue"

const [todayData, bookData] = await Promise.all([
    getStatisticsToday(),
    getStatisticsBook(),
])

const router = useRouter()
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;

    gap: 40px;
}

a {
    text-decoration: inherit;
}

.days {
    margin-right: 10px;
}

.book {
    padding: 20px;

    background-color: var(--background-second-color);

    border-radius: 16px;

    display: flex;
    flex-direction: column;

    gap: 20px;
}

.setting {
    display: flex;
    align-items: center;

    gap: 5px;

    color: var(--text-third-color);
}

.progress {
    color: var(--text-third-color);

    font-size: 14px;
    font-weight: bold;
}

.button {
    display: block;

    width: 100%;
    max-width: 400px;

    margin: 0 auto;
}
</style>

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
                            bookData.learned_amount / bookData.book_amount
                        ).toFixed(2)
                    }}%</span
                >
                <span
                    >{{ bookData.learned_amount }} /
                    {{ bookData.book_amount }} 词</span
                >
            </div>
            <ElProgress
                :percentage="bookData.learned_amount / bookData.book_amount"
                :show-text="false"
            />

            <div class="row-around text-center">
                <div>
                    <Text :size="12" color="var(--text-second-color)"
                        >应学</Text
                    >
                    <Text :size="18" bold>{{ learnSetting.daily_amount }}</Text>
                </div>
                <div>
                    <Text :size="12" color="var(--text-second-color)"
                        >已学</Text
                    >
                    <Text :size="18" bold>{{ todayData.learned_amount }}</Text>
                </div>
                <div>
                    <Text :size="12" color="var(--text-second-color)"
                        >未学</Text
                    >
                    <Text :size="18" bold>{{ todayData.unlearn_amount }}</Text>
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
import { getLearnSetting } from "@/api/user"
import { Notebook, ArrowRightBold } from "@element-plus/icons-vue"

const [todayData, bookData, learnSetting] = await Promise.all([
    getStatisticsToday(),
    getStatisticsBook(),
    getLearnSetting(),
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

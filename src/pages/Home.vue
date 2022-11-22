<template>
    <main class="container">
        <div>
            <Text :size="60" bold class="days" inline>{{ days }}</Text>
            <span>天</span>
        </div>
        <div class="book">
            <div class="row-between">
                <Text :size="20" bold>四级词汇</Text>
                <RouterLink :to="{ name: 'Words' }">
                    <Text :size="14" color="#67c3a5">查看词表</Text>
                </RouterLink>
            </div>
            <div class="setting">
                <el-icon><Notebook /></el-icon>
                <span> 学习设置</span>
                <el-icon><ArrowRightBold /></el-icon>
            </div>
            <div class="progress row-between">
                <span>已完成 78.2%</span>
                <span>6114/7818词</span>
            </div>
            <ElProgress :percentage="70" :show-text="false" />

            <div class="row-around text-center">
                <div>
                    <Text :size="12" color="#aaa">新词</Text>
                    <Text :size="18" bold>10</Text>
                </div>
                <div>
                    <Text :size="12" color="#aaa">新词</Text>
                    <Text :size="18" bold>10</Text>
                </div>
                <div>
                    <Text :size="12" color="#aaa">新词</Text>
                    <Text :size="18" bold>10</Text>
                </div>
            </div>
        </div>
        <ElButton type="primary" size="large" round>开始学习</ElButton>
    </main>
</template>
<script setup lang="ts">
import { Notebook, ArrowRightBold } from "@element-plus/icons-vue"

const days = ref(0)
</script>
<style scoped>
.container {
    max-width: 600px;
    min-height: 100vh;

    margin: 0 auto;

    padding: 20px;

    display: flex;
    flex-direction: column;

    gap: 40px;
}

.days {
    margin-right: 10px;
}

.book {
    padding: 20px;

    background-color: #333;

    border-radius: 16px;

    display: flex;
    flex-direction: column;

    gap: 20px;
}

.setting {
    display: flex;
    align-items: center;

    gap: 5px;
}

.progress {
    color: #888;

    font-size: 14px;
    font-weight: bold;
}
</style>

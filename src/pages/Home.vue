<template>
    <main class="container">
        <div>
            <Text :size="60" weight="bold" class="days" inline>{{
                count
            }}</Text>
            <span>天</span>
        </div>
        <div class="book">
            <div class="row-between">
                <Text :size="20" weight="bold">四级词汇</Text>
                <el-button type="primary" link>查看词表</el-button>
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
            <el-progress :percentage="70" :show-text="false" />

            <div class="row-around text-center">
                <div>
                    <Text :size="12" color="#aaa">新词</Text>
                    <Text :size="18" weight="bold">10</Text>
                </div>
                <div>
                    <Text :size="12" color="#aaa">新词</Text>
                    <Text :size="18" weight="bold">10</Text>
                </div>
                <div>
                    <Text :size="12" color="#aaa">新词</Text>
                    <Text :size="18" weight="bold">10</Text>
                </div>
            </div>
        </div>
        <ElButton type="primary" size="large" round>开始学习</ElButton>
        <div></div>
    </main>
</template>
<script setup lang="ts">
import { Notebook, ArrowRightBold } from "@element-plus/icons-vue"

const count = ref(195)

const user: UserInfo = {
    name: "xx",
    isFinish: true,
}
</script>
<style scoped>
.container {
    max-width: 500px;
    min-height: 100vh;

    margin: 0 auto;

    padding: 20px;

    background-color: #000;

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

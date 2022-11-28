<template>
    <Container :width="600" class="container">
        <div>
            <Text :size="60" bold class="days" inline>{{ days }}</Text>
            <span>天</span>
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
            <div class="setting">
                <ElIcon><Notebook /></ElIcon>
                <span>学习设置</span>
                <ElIcon><ArrowRightBold /></ElIcon>
            </div>
            <div class="progress row-between">
                <span>已完成 78.2%</span>
                <span>6114/7818词</span>
            </div>
            <ElProgress :percentage="70" :show-text="false" />

            <div class="row-around text-center">
                <div>
                    <Text :size="12" color="var(--text-second-color)"
                        >陌生 词</Text
                    >
                    <Text :size="18" bold>10</Text>
                </div>
                <div>
                    <Text :size="12" color="var(--text-second-color)"
                        >复习中</Text
                    >
                    <Text :size="18" bold>10</Text>
                </div>
                <div>
                    <Text :size="12" color="var(--text-second-color)"
                        >已掌握</Text
                    >
                    <Text :size="18" bold>10</Text>
                </div>
            </div>
        </div>
        <ElButton type="primary" size="large" round>开始学习</ElButton>
    </Container>
</template>
<script setup lang="ts">
import { Notebook, ArrowRightBold } from "@element-plus/icons-vue"

const days = ref(0)
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;

    gap: 40px;
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
}

.progress {
    color: var(--text-third-color);

    font-size: 14px;
    font-weight: bold;
}

a {
    text-decoration: inherit;
}
</style>

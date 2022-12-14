<template>
    <Container class="container">
        <div class="row">
            <span class="label">每日单词：</span>
            <ElSlider v-model="dailyAmount" :step="10" :min="10" :max="100" />
            <span class="value">{{ dailyAmount }} 个单词</span>
        </div>
        <ElAlert
            title="设置每日背诵的单词数量，当达到指定数量后会自动打卡。"
            type="info"
            :closable="false"
        />
        <div class="row">
            <span class="label">默认发音：</span>
            <ElRadioGroup v-model="defaultPhonetic">
                <ElRadioButton label="us">美式</ElRadioButton>
                <ElRadioButton label="uk">英式</ElRadioButton>
            </ElRadioGroup>
        </div>
        <ElButton type="primary" @click="updateSetting">更新设置</ElButton>
    </Container>
</template>
<script setup lang="ts">
import { getLearnSetting, updateLearnSetting } from "@/api/user"
import { ElMessage } from "element-plus"

const result = await getLearnSetting()

const dailyAmount = ref(result.daily_amount)
const defaultPhonetic = ref(result.default_phonetic)

async function updateSetting() {
    await updateLearnSetting({
        dailyAmount: dailyAmount.value,
        defaultPhonetic: defaultPhonetic.value,
    })

    ElMessage({
        message: "学习设置更新成功",
        type: "success",
    })
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;

    gap: 20px;
    align-items: center;
}
.row {
    display: flex;
    align-items: center;

    gap: 20px;

    width: 100%;
}

.value {
    flex-shrink: 0;

    font-size: 14px;
    color: var(--text-third-color);
}
.label {
    flex-shrink: 0;

    color: var(--text-third-color);
    font-weight: bold;
}
</style>

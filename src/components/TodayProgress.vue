<template>
    <div class="row-around text-center">
        <div>
            <Text :size="12" :bottom="4" color="var(--text-second-color)"
                >应学</Text
            >
            <Text bold>{{ today.daily_amount }}</Text>
        </div>
        <div>
            <Text :size="12" :bottom="4" color="var(--text-second-color)"
                >已学</Text
            >
            <Text bold>{{ today.learned_amount }}</Text>
        </div>
        <div>
            <Text :size="12" :bottom="4" color="var(--text-second-color)"
                >时长</Text
            >
            <Text bold>{{
                `${Math.floor(today.learn_duration / 60)}min`
            }}</Text>
        </div>
    </div>
    <ElProgress
        v-if="withProgress"
        class="progress"
        :percentage="
            Math.min(today.learned_amount / today.daily_amount, 1) * 100
        "
        :show-text="false"
    />
</template>
<script setup lang="ts">
defineProps({
    today: {
        type: Object,
        required: true,
    },
    withProgress: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>
<style scoped>
.progress {
    margin: 20px 0;
}
</style>

<template>
    <Container>
        <div ref="todayElement" class="chart"></div>
        <div ref="wordElement" class="chart"></div>
        <div ref="durationElement" class="chart"></div>
        <div ref="sevenElement" class="chart"></div>
    </Container>
</template>
<script setup lang="ts">
import {
    getStatisticsBook,
    getStatisticsSeven,
    getStatisticsToday,
} from "@/api/statistics"
import * as echarts from "echarts/core"
import darkTheme from "@/assets/echart/darkTheme.json"
import type { Ref } from "vue"
import { Theme, useThemeStore } from "@/stores/theme"

import initTodayEchart from "@/echarts/today"
import initBookEchart from "@/echarts/word"
import initSevenEchart from "@/echarts/seven"
import initDurationEchart from "@/echarts/duration"

import type { EChartsType } from "echarts/core"

const themeStore = useThemeStore()

const [todayData, bookData, sevenData] = await Promise.all([
    getStatisticsToday(),
    getStatisticsBook(),
    getStatisticsSeven(),
])

const todayElement: Ref<HTMLElement | null> = ref(null)
const wordElement: Ref<HTMLElement | null> = ref(null)
const durationElement: Ref<HTMLElement | null> = ref(null)
const sevenElement: Ref<HTMLElement | null> = ref(null)

let todaynEchart: EChartsType
let wordEchart: EChartsType
let sevenEchart: EChartsType
let durationEchart: EChartsType

onMounted(async () => {
    echarts.registerTheme("dark", darkTheme)
    createCharts(themeStore.theme === Theme.dark ? "dark" : "light")
})

onUnmounted(disposeEcharts)

function createCharts(theme: string) {
    if (todayElement.value)
        todaynEchart = initTodayEchart(todayElement.value, theme, todayData)

    if (wordElement.value)
        wordEchart = initBookEchart(wordElement.value, theme, bookData)

    if (sevenElement.value)
        sevenEchart = initSevenEchart(sevenElement.value, theme, sevenData)

    if (durationElement.value)
        durationEchart = initDurationEchart(
            durationElement.value,
            theme,
            sevenData
        )
}

function disposeEcharts() {
    todaynEchart?.dispose()
    wordEchart?.dispose()
    durationEchart?.dispose()
    sevenEchart?.dispose()
}

// 切换图表的主题
watch(
    () => themeStore.theme,
    (value) => {
        if (value === Theme.dark) {
            disposeEcharts()
            createCharts("dark")
        } else {
            disposeEcharts()
            createCharts("light")
        }
    }
)
</script>
<style scoped>
.chart {
    width: 100%;
    aspect-ratio: 16 / 9;

    margin: 60px 0;
}
</style>

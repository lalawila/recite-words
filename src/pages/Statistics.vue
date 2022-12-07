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
    getStatisticsWord,
    getStatisticsSeven,
    getStatisticsToday,
} from "@/api/statistics"
import * as echarts from "echarts/core"
import darkTheme from "@/assets/echart/darkTheme"
import type { Ref } from "vue"
import { Theme, useThemeStore } from "@/stores/theme"

import initTodayEchart from "@/common/echarts/today"
import initWordEchart from "@/common/echarts/word"
import initSevenEchart from "@/common/echarts/seven"
import initDurationEchart from "@/common/echarts/duration"

import type { EChartsType } from "echarts/core"

const themeStore = useThemeStore()

const [todayData, wordData, sevenData] = await Promise.all([
    getStatisticsToday(),
    getStatisticsWord(),
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

onMounted(() => {
    echarts.registerTheme("dark", darkTheme)
    createCharts(themeStore.theme === Theme.dark ? "dark" : "light")
})

function createCharts(theme: string) {
    todaynEchart = initTodayEchart(
        todayElement.value as HTMLElement,
        theme,
        todayData
    )

    wordEchart = initWordEchart(
        wordElement.value as HTMLElement,
        theme,
        wordData
    )
    sevenEchart = initSevenEchart(
        sevenElement.value as HTMLElement,
        theme,
        sevenData
    )

    durationEchart = initDurationEchart(
        durationElement.value as HTMLElement,
        theme,
        sevenData
    )
}

function disposeEcharts() {
    todaynEchart.dispose()
    wordEchart.dispose()
    durationEchart.dispose()
    sevenEchart.dispose()
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

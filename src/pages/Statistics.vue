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
import darkTheme from "@/assets/echart/darkTheme"
import type { Ref } from "vue"
import { Theme, useThemeStore } from "@/stores/theme"

import initTodayEchart from "@/common/echarts/today"
import initBookEchart from "@/common/echarts/word"
import initSevenEchart from "@/common/echarts/seven"
import initDurationEchart from "@/common/echarts/duration"

import type { EChartsType } from "echarts/core"

const themeStore = useThemeStore()

let todayData: ApiStatisticsToday,
    bookData: ApiStatisticsBook,
    sevenData: ApiStatisticsSeven

const todayElement: Ref<HTMLElement | null> = ref(null)
const wordElement: Ref<HTMLElement | null> = ref(null)
const durationElement: Ref<HTMLElement | null> = ref(null)
const sevenElement: Ref<HTMLElement | null> = ref(null)

let todaynEchart: EChartsType
let wordEchart: EChartsType
let sevenEchart: EChartsType
let durationEchart: EChartsType

onMounted(async () => {
    // 如果放在 stetup 中会有以下 bug
    // Uncaught (in promise) TypeError: Cannot read properties of null (reading 'parentNode')
    // at parentNode (runtime-dom.esm-bundler.js:35:30)
    // at ReactiveEffect.componentUpdateFn [as fn] (runtime-core.esm-bundler.js:5697:17)
    // at ReactiveEffect.run (reactivity.esm-bundler.js:187:25)
    // at instance.update (runtime-core.esm-bundler.js:5729:56)
    // at callWithErrorHandling (runtime-core.esm-bundler.js:155:36)
    // at flushJobs (runtime-core.esm-bundler.js:388:17)

    ;[todayData, bookData, sevenData] = await Promise.all([
        getStatisticsToday(),
        getStatisticsBook(),
        getStatisticsSeven(),
    ])

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

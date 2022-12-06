<template>
    <Container>
        <h1>学习数据</h1>
        <Text text-align="right">单词掌握程度</Text>
        <div ref="wordElement" class="chart"></div>
        <Text text-align="right">过去一周学习情况</Text>
        <div ref="sevenElement" class="chart"></div>
    </Container>
</template>
<script setup lang="ts">
import { getStatisticsWord, getStatisticsSeven } from "@/api/statistics"
import * as echarts from "echarts"
import theme from "@/assets/echartTheme"
import type { Ref } from "vue"

const word = await getStatisticsWord()
const seven = await getStatisticsSeven()

const wordElement: Ref<HTMLElement | null> = ref(null)
const sevenElement: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
    echarts.registerTheme("my-theme", theme)
    initWord()
    initSeven()
})

function initWord() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(wordElement.value as HTMLElement, "my-theme")
    // 绘制图表
    myChart.setOption({
        tooltip: {
            trigger: "item",
        },
        legend: {
            top: "5%",
            left: "center",
        },
        series: [
            {
                name: "单词掌握程度",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: "40",
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: word.unlearned, name: "未学习" },
                    { value: word.new, name: "陌生" },
                    { value: word.know, name: "熟悉" },
                    { value: word.master, name: "掌握" },
                ],
            },
        ],
    })
}

function initSeven() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(sevenElement.value as HTMLElement, "my-theme")
    // 绘制图表
    myChart.setOption({
        title: {
            text: "过去一周学习情况",
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["背单词数", "简单", "记住", "忘记"],
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: seven.map((item) => item.date),
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "总数",
                type: "line",
                stack: "Total",
                data: seven.map((item) => item.total_amount),
            },
            {
                name: "简单",
                type: "line",
                stack: "Total",
                data: seven.map((item) => item.simple_amount),
            },
            {
                name: "记住",
                type: "line",
                stack: "Total",
                data: seven.map((item) => item.remember_amount),
            },
            {
                name: "忘记",
                type: "line",
                stack: "Total",
                data: seven.map((item) => item.forget_amount),
            },
        ],
    })
}
</script>
<style scoped>
.chart {
    width: 100%;
    aspect-ratio: 16 / 9;
}
</style>

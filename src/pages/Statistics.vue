<template>
    <Container>
        <h1>学习统计</h1>
        <Text text-align="right">单词掌握程度</Text>
        <div id="test"></div>
    </Container>
</template>
<script setup lang="ts">
import { getStatisticsWord } from "@/api/statistics"
import * as echarts from "echarts"
import theme from "@/assets/echartTheme"

const word = await getStatisticsWord()

onMounted(() => {
    echarts.registerTheme("my-theme", theme)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("test"), "my-theme")
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
})
</script>
<style scoped>
#test {
    width: 100%;
    aspect-ratio: 16 / 9;
}
</style>

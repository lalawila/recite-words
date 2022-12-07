import * as echarts from "echarts/core"
import {
    TooltipComponent,
    type TooltipComponentOption,
    LegendComponent,
    type LegendComponentOption,
} from "echarts/components"
import { PieChart, type PieSeriesOption } from "echarts/charts"
import { LabelLayout } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
])

type EChartsOption = echarts.ComposeOption<
    TooltipComponentOption | LegendComponentOption | PieSeriesOption
>

export default function (
    element: HTMLElement,
    theme: string,
    word: ApiStatisticsWord
) {
    // 创建单词书掌握情况
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(element, theme)
    const options: EChartsOption = {
        title: {
            text: "单词书掌握情况",
        },
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
    }

    // 绘制图表
    myChart.setOption(options)

    return myChart
}

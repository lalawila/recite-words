import * as echarts from "echarts/core"
import { GridComponent, type GridComponentOption } from "echarts/components"
import { BarChart, type BarSeriesOption } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([GridComponent, BarChart, CanvasRenderer])

type EChartsOption = echarts.ComposeOption<
    GridComponentOption | BarSeriesOption
>

echarts.use([GridComponent, BarChart, CanvasRenderer])

export default function (
    element: HTMLElement,
    theme: string,
    data: ApiStatisticsSeven
) {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(element, theme)
    const options: EChartsOption = {
        title: {
            text: "过去一周学习时长（分钟）",
        },
        xAxis: {
            type: "category",
            data: data.map((item) => item.date),
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: data.map((item) => Math.floor(item.learn_duration / 60)), // 转成分钟
                type: "bar",
            },
        ],
    }

    // 绘制图表
    myChart.setOption(options)

    return myChart
}

import * as echarts from "echarts/core"
import {
    TitleComponent,
    type TitleComponentOption,
    ToolboxComponent,
    type ToolboxComponentOption,
    TooltipComponent,
    type TooltipComponentOption,
    GridComponent,
    type GridComponentOption,
    LegendComponent,
    type LegendComponentOption,
} from "echarts/components"
import { LineChart, type LineSeriesOption } from "echarts/charts"
import { UniversalTransition } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition,
])

type EChartsOption = echarts.ComposeOption<
    | TitleComponentOption
    | ToolboxComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | LegendComponentOption
    | LineSeriesOption
>

export default function (
    element: HTMLElement,
    theme: string,
    data: ApiStatisticsSeven
) {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(element, theme)

    const options: EChartsOption = {
        title: {
            text: "过去一周学习情况",
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            bottom: 0,
            right: 0,
        },
        grid: {
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: data.map((item) => item.date),
        },
        yAxis: {
            type: "value",
            minInterval: 1,
        },
        series: [
            {
                name: "总数",
                type: "line",
                data: data.map(
                    (item) =>
                        item.simple_amount +
                        item.remember_amount +
                        item.forget_amount
                ),
            },
            {
                name: "简单",
                type: "line",
                data: data.map((item) => item.simple_amount),
            },
            {
                name: "记住",
                type: "line",
                data: data.map((item) => item.remember_amount),
            },
            {
                name: "忘记",
                type: "line",
                data: data.map((item) => item.forget_amount),
            },
        ],
    }

    // 绘制图表
    myChart.setOption(options)

    return myChart
}

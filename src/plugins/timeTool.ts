import type { App } from "vue"

const timeTool: TimeTool = {
    formatTime(timestamp: number): string {
        // 时间戳转成时间
        const time = new Date(timestamp * 1000)
        return `${time.getFullYear()}-${this.fillZero(
            time.getMonth() + 1
        )}-${time.getDate()} ${this.fillZero(time.getHours())}:${this.fillZero(
            time.getMinutes()
        )}`
    },
    fillZero(n: number): string {
        return n < 10 ? `0${n}` : `${n}`
    },
}

export default {
    install(app: App) {
        app.provide("timeTool", timeTool)
    },
}

import type { App } from "vue"
import axios from "axios"

export default {
    install: (app: App, { baseURL }: { baseURL: string }) => {
        const http = axios.create({
            baseURL,
        })

        // 将 axios 绑定到全局属性中
        app.config.globalProperties.$http = http
    },
}

import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import http from "./plugins/http"
import api from "./plugins/api"

// 主要样式
import "./assets/main.css"
// 主题色
import "./assets/theme.css"
// 全局样式
import "./assets/global.css"

const app = createApp(App)

// 路由配置
app.use(router)
app.use(http, { baseURL: "https://3yya.com/u/d8cf630cf5f367cc/word/app" })
app.use(api, { http: app.config.globalProperties.$http })

app.mount("#app")

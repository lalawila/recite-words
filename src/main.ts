import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"

// 主要样式
import "./assets/main.css"
// 主题色
import "./assets/theme.css"
// 全局样式
import "./assets/global.css"

const app = createApp(App)

// 路由配置
app.use(router)

app.mount("#app")

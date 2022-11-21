import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"

import "./styles/main.css"

// element 夜间模式
import "element-plus/theme-chalk/dark/css-vars.css"

const app = createApp(App)

// 路由配置
app.use(router)

app.mount("#app")

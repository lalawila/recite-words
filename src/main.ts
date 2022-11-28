import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import pinia from "./pinia"
import timeTool from "./plugins/timeTool"

// element 样式
import "element-plus/dist/index.css"
// element 夜间模式
import "element-plus/theme-chalk/dark/css-vars.css"

// 在 element 样式之后，以便自定义样式能覆盖
import "./styles/main.css"

const app = createApp(App)

// 路由
app.use(router)
// pinia
app.use(pinia)

app.use(timeTool)

app.mount("#app")

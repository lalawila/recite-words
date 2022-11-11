import * as VueRouter from "vue-router"

import Home from "@/pages/Home.vue"
import Statistics from "@/pages/Statistics.vue"

const routes = [
    {
        name: "index", // 页面名
        path: "/", // 映射的路径
        component: Home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
    },
    {
        name: "statistics",
        path: "/statistics",
        component: Statistics,
    },
]

const router = VueRouter.createRouter({
    // 使用 HTML5 的历史记录模式
    history: VueRouter.createWebHistory(),
    routes,
})

export default router

import * as VueRouter from "vue-router"

import Home from "@/pages/Home.vue"
import Statistics from "@/pages/Statistics.vue"
import Words from "@/pages/Words.vue"
import WordDetail from "@/pages/WordDetail.vue"
import NotFound from "@/pages/NotFound.vue"

const routes = [
    {
        name: "home", // 页面名
        path: "/", // 映射的路径
        component: Home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
    },
    {
        name: "statistics",
        path: "/statistics",
        component: Statistics,
    },
    {
        name: "words",
        path: "/words",
        component: Words,
    },
    {
        name: "wordDetail",
        path: "/words/:id",
        component: WordDetail,
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
]

const router = VueRouter.createRouter({
    // 使用 HTML5 模式
    history: VueRouter.createWebHistory(),
    routes,
})

export default router

import { createRouter, createWebHistory } from "vue-router"

import Home from "@/pages/Home.vue"

const routes = [
    {
        name: "Home", // 页面名
        path: "/", // 映射的路径
        component: Home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
    },
    {
        name: "Statistics",
        path: "/statistics",
        component: () => import("@/pages/Statistics.vue"),
    },
    {
        name: "Words",
        path: "/words",
        component: () => import("@/pages/Words.vue"),
    },
    {
        name: "WordDetail",
        path: "/words/:id",
        component: () => import("@/pages/WordDetail.vue"),
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/pages/Login.vue"),
    },
    {
        name: "Signup",
        path: "/signup",
        component: () => import("@/pages/Signup.vue"),
    },
    {
        name: "SettingInfo",
        path: "/setting/info",
        component: () => import("@/pages/Setting/Info.vue"),
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/NotFound.vue"),
    },
]

const router = createRouter({
    // 使用 HTML5 模式
    history: createWebHistory(),
    routes,
})

export default router

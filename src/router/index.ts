import { ElMessage } from "element-plus"

import { createRouter, createWebHistory } from "vue-router"
import { useTokenStore } from "@/stores/token"

import Home from "@/pages/Home.vue"

const routes = [
    {
        name: "Home", // 页面名
        path: "/", // 映射的路径
        component: Home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
        meta: { title: "首页" },
    },
    {
        name: "Statistics",
        path: "/statistics",
        component: () => import("@/pages/Statistics.vue"),
        // 只有经过身份验证的用户才能查看
        meta: { title: "学习数据", requiresAuth: true },
    },
    {
        name: "Words",
        path: "/words",
        component: () => import("@/pages/Words.vue"),
        meta: { title: "词表" },
    },
    {
        name: "Task",
        path: "/task",
        component: () => import("@/pages/Task.vue"),
        meta: { title: "学习" },
    },
    {
        name: "WordDetail",
        path: "/words/:id",
        component: () => import("@/pages/WordDetail.vue"),
        meta: { title: "单词详情" },
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/pages/Login.vue"),
        meta: { title: "登录", requiresNoAuth: true },
    },
    {
        name: "Signup",
        path: "/signup",
        component: () => import("@/pages/Signup.vue"),
        meta: { title: "注册", requiresNoAuth: true },
    },
    {
        name: "SettingInfo",
        path: "/setting/info",
        component: () => import("@/pages/Setting/Info.vue"),
        // 只有经过身份验证的用户才能查看
        meta: { title: "个人信息设置", requiresAuth: true },
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/NotFound.vue"),
        meta: { title: "404" },
    },
]

const router = createRouter({
    // 使用 HTML5 模式
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    const tokenStore = useTokenStore()

    if (to.meta.requiresAuth && !tokenStore.isLogined) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        ElMessage({
            message: "请先登录",
            type: "info",
        })
        return {
            name: "Login",
            // 登录成功后跳转
            query: { redirect: to.fullPath },
        }
    }

    if (to.meta.requiresNoAuth && tokenStore.isLogined) {
        // 如果当前页面需要未登录的状态
        // 比如注册或登录页面
        return {
            name: "Home",
        }
    }

    if (to.meta.title) {
        document.title = `${to.meta.title} - 背单词`
    }
})

export default router

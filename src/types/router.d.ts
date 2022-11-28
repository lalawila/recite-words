// typings.d.ts or router.ts
import "vue-router"

declare module "vue-router" {
    interface RouteMeta {
        // 每个路由都必须声明
        requiresAuth?: boolean
        requiresNoAuth?: boolean
    }
}

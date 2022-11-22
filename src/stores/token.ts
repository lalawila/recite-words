import { useUserStore } from "@/stores/user"

export const useTokenStore = defineStore(
    "token",
    () => {
        const userStore = useUserStore()

        const token = ref("")

        // 是否是登录状态
        const isLogined = computed(() => token.value !== "")

        watch(token, (value) => {
            if (value) {
                // 更新用户自身的信息
                userStore.updateSelfInfo()
            }
        })

        function logout() {
            token.value = ""
        }

        return {
            token,
            isLogined,
            logout,
        }
    },
    {
        persist: true, // 开启持久化
    }
)

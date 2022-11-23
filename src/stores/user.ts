import { fetchSelfInfo } from "@/api/user"
import type { Ref } from "vue"

export const useUserStore = defineStore(
    "user",
    () => {
        const userId: Ref<number | null> = ref(null)
        const username = ref("")
        const bio = ref("")
        const registerTime: Ref<number | null> = ref(null)
        const avatarUrl = ref("")

        async function updateSelfInfo() {
            // 更新自身信息
            ;({
                id: userId.value,
                username: username.value,
                bio: bio.value,
                register_time: registerTime.value,
                avatar_url: avatarUrl.value,
            } = await fetchSelfInfo())

            avatarUrl.value = avatarUrl.value || "/default.jpg" // 默认头像
        }

        return {
            updateSelfInfo,
            userId,
            username,
            bio,
            registerTime,
            avatarUrl,
        }
    },
    {
        persist: true, // 开启持久化
    }
)

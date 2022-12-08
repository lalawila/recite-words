import i18n from "@/plugins/i18n"

export const useLangStore = defineStore(
    "lang",
    () => {
        const locale = ref("zh")

        watch(locale, (value) => {
            i18n.global.locale = value
        })

        return {
            locale,
        }
    },
    {
        persist: true, // 开启持久化
    }
)

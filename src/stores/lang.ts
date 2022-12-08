import i18n from "@/plugins/i18n"
import type { Ref } from "vue"

export const useLangStore = defineStore(
    "lang",
    () => {
        const locale: Ref<Locales> = ref("zh")

        watch(locale, (value) => {
            i18n.global.locale = value
        })

        const availableLocales = computed(() =>
            i18n.global.availableLocales.filter((item) => item != locale.value)
        )

        return {
            locale,
            availableLocales,
        }
    },
    {
        persist: true, // 开启持久化
    }
)

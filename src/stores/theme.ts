export enum Theme {
    light,
    dark,
}

export const useThemeStore = defineStore(
    "theme",
    () => {
        const theme = ref(Theme.dark)

        watch(theme, (value) => {
            if (value === Theme.dark) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        })

        return {
            theme,
        }
    },
    {
        persist: true, // 开启持久化
    }
)

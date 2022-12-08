import { createI18n } from "vue-i18n"

const messages = {
    en: {
        en: "English",
        zh: "中文",
        hello: "hello world",
        天: "DAYS",
        背单词: "Learn",
        词表: "Words",
    },
    zh: {
        en: "English",
        zh: "中文",
        hello: "你好",
        天: "天",
        背单词: "背单词",
        词表: "词表",
    },
}

const i18n = createI18n({
    locale: "zh",
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
})

export default i18n

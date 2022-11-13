import type { AxiosInstance } from "axios"
import type { App } from "vue"

interface Explain {
    pos: string
    trans: string
}

interface Word {
    id: number
    word: string
    uk_phonetic: string
    uk_phonetic_audio: string
    us_phonetic: string
    us_phonetic_audio: string
    example_en: string
    example_zh: string
    example_dict: string
    example_audio: string
    explains: Explain[]
}

class Api {
    http: AxiosInstance

    constructor(http: AxiosInstance) {
        this.http = http
        this.getWords()
    }

    async getWords(): Promise<Word[]> {
        const response = await this.http.get("/words")
        return response.data
    }
}

export default {
    install: (app: App, { http }: { http: AxiosInstance }) => {
        // 将 api 实例绑定到全局对象中
        app.config.globalProperties.$api = new Api(http)
    },
}

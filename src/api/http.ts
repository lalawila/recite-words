import config from "@/config/http"
import type { AxiosResponse, AxiosError } from "axios"

const http = axios.create(config)

export default http

export function handleApiError(
    error: AxiosError,
    callback: (response: AxiosResponse) => void
) {
    if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
            // API 的错误
            callback(error.response)
        }
    }
}

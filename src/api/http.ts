import config from "@/config/http"
import type { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios"
import { useTokenStore } from "@/stores/token"

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

const http = axios.create(config)
// 添加请求拦截器，会在请求之前执行
http.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        const tokenStore = useTokenStore()

        // 如果是登录状态
        if (tokenStore.isLogined) {
            // 如何携带登录信息应视实际接口文档而定
            // 三鸭的接口要求是在请求的 Authorization 中带上
            if (config.headers) {
                config.headers.Authorization = tokenStore.token
            } else {
                config.headers = {
                    Authorization: tokenStore.token,
                }
            }
        }
        return config
    },
    function (error) {
        // 请求出错
        return Promise.reject(error)
    }
)

// 添加响应拦截器，会在响应之前执行
http.interceptors.response.use(
    function (response: AxiosResponse) {
        // 成功时执行
        // 2xx 的状态码
        return response
    },
    function (error: AxiosError) {
        // 失败时执行
        // 包括超时，网络错误，所有非 2xx 的状态码

        handleApiError(error, function (response: AxiosResponse) {
            if (response.data.code === 1100) {
                // 退出登录
                const tokenStore = useTokenStore()
                tokenStore.logout()
            }
        })

        return Promise.reject(error)
    }
)

export default http

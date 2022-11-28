import http from "./http"

export async function getTask(): Promise<ApiSelfInfo> {
    const response = await http.get("/user/info")
    return response.data
}

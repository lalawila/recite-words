import http from "./http"

export async function getStatisticsWord(): Promise<ApiStatisticsWord> {
    const response = await http.get("/statistics/word")
    return response.data
}

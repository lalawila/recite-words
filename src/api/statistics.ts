import http from "./http"

export async function getStatisticsWord(): Promise<ApiStatisticsWord> {
    const response = await http.get("/statistics/word")
    return response.data
}

export async function getStatisticsSeven(): Promise<ApiStatisticsSeven> {
    const response = await http.get("/statistics/seven")
    return response.data
}

export async function getStatisticsToday(): Promise<ApiStatisticsToday> {
    const response = await http.get("/statistics/today")
    return response.data
}

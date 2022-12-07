import http from "./http"

export async function getStatisticsBook(): Promise<ApiStatisticsBook> {
    const response = await http.get("/statistics/book")
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

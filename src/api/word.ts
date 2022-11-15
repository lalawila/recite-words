import http from "./http"

export async function getWords(
    page: number = 1,
    limit: number = 10
): Promise<Word[]> {
    const response = await http.get("/words")
    return response.data
}

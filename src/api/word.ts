import http from "./http"

export async function getWords(
    page: number = 1,
    limit: number = 10
): Promise<ApiWords> {
    const response = await http.get("/words", {
        params: {
            page,
            limit,
        },
    })
    return response.data
}

export async function getWordDetail(wordId: number): Promise<Word[]> {
    const response = await http.get(`/words/${wordId}`)
    return response.data
}

import http from "./http"

export async function signup(
    username: string,
    password: string
): Promise<ApiSignup> {
    const response = await http.post("/users", {
        username,
        password,
    })
    return response.data
}

export async function login(
    username: string,
    password: string
): Promise<ApiLogin> {
    const response = await http.post(`/tokens`, {
        username,
        password,
    })
    return response.data
}

import http from "./http"
import { useTokenStore } from "@/stores/token"

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

export async function fetchSelfInfo(): Promise<ApiSelfInfo> {
    const tokenStore = useTokenStore()

    const response = await http.get("/user/info", {
        headers: {
            Authorization: tokenStore.token,
        },
    })
    return response.data
}

export async function updateSelfInfo({
    username,
    password,
    bio,
}: {
    username: string
    password: string
    bio: string
}) {
    const tokenStore = useTokenStore()

    const data = new FormData()
    if (username) data.set("username", username)
    if (password) data.set("password", password)
    if (bio) data.set("bio", bio)

    await http.put("/user/info", data, {
        headers: {
            Authorization: tokenStore.token,
        },
    })
}

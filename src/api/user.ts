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

    const response = await http.get("/user/info")
    return response.data
}

export async function updateSelfInfo({
    username,
    password,
    newpassword,
    bio,
    avatar,
}: ParamUpdateSelfInfo): Promise<ApiUpdateSelfInfo | null> {
    const data = new FormData()
    if (username) data.append("username", username)
    if (password) data.append("password", password)

    if (newpassword) data.append("newpassword", newpassword)

    if (bio) data.append("bio", bio)
    if (avatar) data.append("avatar", avatar as Blob)

    const response = await http.put("/user/info", data)

    return response.data
}

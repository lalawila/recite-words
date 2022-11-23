interface ApiLogin {
    token: string
    user_id: number
}

interface ApiSignup {
    token: string
    user_id: number
}

interface ApiSelfInfo {
    id: number
    bio: string
    username: string
    avatar_url: string
    register_time: number
}

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

interface ParamUpdateSelfInfo {
    username?: string
    newpassword?: string
    password?: string
    bio?: string
    avatar?: File
}

interface ApiUpdateSelfInfo {
    token: string
}

interface ParamUpdateLearnSetting {
    dailyAmount?: number
    defaultPhonetic?: string
}

interface ApiLearnSetting {
    daily_amount: number // 每日学习单词数量
    default_phonetic: string
}

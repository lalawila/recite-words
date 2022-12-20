interface ApiStatisticsBook {
    book_amount: number // 全部单词数
    learned_amount: number // 已学单词数
    unlearn_amount: number // 未学习
    new_amount: number // 陌生单词
    know_amount: number // 熟悉单词
    master_amount: number // 掌握单词
}

interface StatisticsSeven {
    simple_amount: number // 太简单
    remember_amount: number // 记得
    forget_amount: number // 忘记
    date: string // 日期
    learn_duration: number // 学习时长（秒）
    is_clock_in: boolean // 是否已经打卡
}

interface ApiStatisticsToday {
    daily_amount: number // 设定的每日学习单词数量
    learned_amount: number // 已学习
    unlearn_amount: number // 未学习
    simple_amount: number // 太简单
    remember_amount: number // 记得
    forget_amount: number // 忘记
    learn_duration: number // 学习时长（秒）
    is_clock_in: boolean // 是否已经打卡
    clock_in_amount: number // 已经打卡天数
}

declare type ApiStatisticsSeven = StatisticsSeven[]

interface ApiStatisticsBook {
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
    unlearn_amount: number // 未学习
    simple_amount: number // 太简单
    remember_amount: number // 记得
    forget_amount: number // 忘记
    learn_duration: number // 学习时长（秒）
    is_clock_in: boolean // 是否已经打卡
}

declare type ApiStatisticsSeven = StatisticsSeven[]

interface ApiStatisticsWord {
    unlearned: number
    new: number
    know: number
    master: number
}

interface StatisticsSeven {
    total_amount: number // 总数
    simple_amount: number // 太简单
    remember_amount: number // 记得
    forget_amount: number // 忘记
    date: string // 日期
    learn_duration: number // 学习时长（秒）
}

declare type ApiStatisticsSeven = StatisticsSeven[]

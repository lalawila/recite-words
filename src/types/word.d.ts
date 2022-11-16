interface Explain {
    pos: string
    trans: string
}

interface Word {
    id: number
    word: string
    uk_phonetic: string
    uk_phonetic_audio: string
    us_phonetic: string
    us_phonetic_audio: string
    example_en: string
    example_zh: string
    example_dict: string
    example_audio: string
    explains: Explain[]
}

interface ApiWords {
    results: Word[]
    amount: number
}

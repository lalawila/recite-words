let audio: HTMLMediaElement

export async function playAudio(url: string) {
    // 先将之前的 audio 暂停
    // 防止多个音频同时播放
    audio?.pause()

    audio = new Audio(url)
    await audio.play()
    return audio
}

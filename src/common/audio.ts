export async function playAudio(url: string) {
    const audio = new Audio(url)
    await audio.play()
    return audio
}

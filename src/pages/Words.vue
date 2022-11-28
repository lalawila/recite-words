<template>
    <div class="container">
        <h1>单词列表</h1>
        <RouterLink
            :to="{ name: 'WordDetail', params: { id: word.id } }"
            class="word-item"
            v-for="word of words"
        >
            <div class="row-between">
                <div>
                    <Text :size="20" class="right-10" bold inline>{{
                        word.word
                    }}</Text>
                    <Text :size="14" color="#999" inline
                        >/{{ word.us_phonetic }}/</Text
                    >
                </div>
                <button @click.prevent="play(word.us_phonetic_audio)">
                    play
                </button>
            </div>
            <!-- 仅显示第一个解释 -->
            <p>{{ word.explains[0].pos }} {{ word.explains[0].trans }}</p>
        </RouterLink>
        <p v-if="isFinished">已经没有更多了~</p>
    </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue"
import { getWords } from "@/api/word"
import { useDistanceFromBottom, isScroll } from "@/composables/scroll"
import { debounce } from "@/common/debounce"

const words: Ref<Word[]> = ref([])

const isFinished = ref(false)
let page = 1
const limit = 10
async function fetchData() {
    if (isFinished.value) {
        return
    }

    const data = await getWords(page, limit)
    if (data.results.length === 0) {
        // 已经没有更多了
        isFinished.value = true
        return
    }

    words.value = [...words.value, ...data.results]
    page++

    if (isScroll() === false) {
        // 如果没出现滚动条继续加载数据
        fetchData()
    }
}

// 加载数据
fetchData()

function play(url: string) {
    const audio = new Audio(url)
    audio.play()
}

// 防抖
const debounceFetchData = debounce(fetchData)
const distance = useDistanceFromBottom()
watch(distance, (value) => {
    // 每次滚动条距离底部小于 300 时加载下一页
    if (value < 300) debounceFetchData()
})
</script>

<style scoped>
.container {
    max-width: 600px;
    padding: 20px;

    margin: 0 auto;
}

.word-item {
    display: block;

    /* 去除 a 元素的样式 */
    color: inherit;
    text-decoration: inherit;

    padding: 20px 0;
}

.word-item:not(:last-child) {
    border-bottom: 1px solid #666;
}

.phonetic {
    font-size: 14px;
    color: #999;
}
</style>

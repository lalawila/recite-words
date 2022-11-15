<template>
    <h1>单词列表</h1>
    <div v-for="word of words">
        <h2>{{ word.word }}</h2>
    </div>
</template>
<script setup lang="ts">
import type { Ref } from "vue"
import { getWords } from "@/api/word"
import type { Word } from "@/api/word"

let words: Ref<Word[]> = ref([])
onMounted(async () => {
    words.value = await getWords()
})
</script>

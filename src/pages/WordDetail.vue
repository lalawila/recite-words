<template>
    <div class="container">
        <Text :size="36" bold>{{ wordDetail.word }}</Text>
        <Text color="#999" :vertical="10">/{{ wordDetail.word }}/</Text>
        <div v-for="explain of wordDetail.explains">
            <div>
                <Text class="right-5" color="#999" inline>{{
                    explain.pos
                }}</Text>
                <Text inline>{{ explain.trans }}</Text>
            </div>
        </div>
        <Text>例句</Text>
        <Text>{{ wordDetail.example_en }}</Text>
        <Text>{{ wordDetail.example_zh }}</Text>
        <Text>{{ wordDetail.example_dict }}</Text>
    </div>
</template>
<script setup lang="ts">
import { getWordDetail } from "@/api/word"
import { useRoute } from "vue-router"

const route = useRoute()

const wordDetail = reactive({} as Word)
async function getData() {
    Object.assign(wordDetail, await getWordDetail(Number(route.params.id)))
}
onMounted(getData)
</script>
<style>
.container {
    max-width: 600px;
    padding: 20px;

    margin: 0 auto;
}
</style>

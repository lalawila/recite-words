<template>
    <Container>
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
    </Container>
</template>
<script setup lang="ts">
import { getWordDetail } from "@/api/word"
const props = defineProps({
    wordId: {
        type: Number,
        required: true,
    },
})
const wordDetail = await getWordDetail(props.wordId)
</script>

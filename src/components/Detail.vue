<template>
    <div class="detail">
        <div class="row-between">
            <Text :size="36" bold>{{ wordDetail.word }}</Text>
            <VideoPlay
                class="icon"
                @click="playAudio(wordDetail.us_phonetic_audio)"
            ></VideoPlay>
        </div>
        <Text color="#999" :vertical="10">/{{ wordDetail.word }}/</Text>
        <div class="explain" v-for="explain of wordDetail.explains">
            <Text :right="10" color="#999" inline>{{ explain.pos }}</Text>
            <Text inline>{{ explain.trans }}</Text>
        </div>
        <div class="row-between">
            <Text :vertical="20">例句</Text>
            <VideoPlay
                class="icon"
                @click="playAudio(wordDetail.example_audio)"
            ></VideoPlay>
        </div>
        <Text :vertical="10">{{ wordDetail.example_en }}</Text>
        <Text :vertical="10">{{ wordDetail.example_zh }}</Text>
        <Text :vertical="10">{{ wordDetail.example_dict }}</Text>
    </div>
</template>
<script setup lang="ts">
import { VideoPlay } from "@element-plus/icons-vue"
import { playAudio } from "@/common/audio"
import { getWordDetail } from "@/api/word"

const props = defineProps({
    wordId: {
        type: Number,
        required: true,
    },
})
const wordDetail = await getWordDetail(props.wordId)
</script>
<style scoped>
.detail {
    width: 100%;
}
.explain {
    margin: 10px 0;
}

.icon {
    width: 20px;
    height: 20px;

    cursor: pointer;

    color: var(--primary-color);
}
</style>

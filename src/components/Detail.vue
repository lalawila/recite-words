<template>
    <div class="detail">
        <Text :size="36" bold>{{ wordDetail.word }}</Text>
        <div class="row-between">

            <Text class="row-around" :top="10" :bottom="10">
                <div class="row" @click.prevent="playAudio(wordDetail.uk_phonetic_audio)">
                    <Text :size="14">英</Text>
                    <Text :size="14" color="var(--text-prompt-color)">/{{ wordDetail.uk_phonetic }}/</Text>
                    <el-icon color="var(--primary-color)">
                        <VideoPlay class="icon" />
                    </el-icon>
                </div>

                <div class="row" @click.prevent="playAudio(wordDetail.us_phonetic_audio)">
                    <Text :size="14">美</Text>
                    <Text :size="14" color="var(--text-prompt-color)">/{{ wordDetail.us_phonetic }}/</Text>
                    <el-icon color="var(--primary-color)">
                        <VideoPlay class="icon" />
                    </el-icon>
                </div>
            </Text>
        </div>
        <div class="explain" v-for="explain of wordDetail.explains">
            <Text :right="10" color="#999" inline>{{ explain.pos }}</Text>
            <Text inline>{{ explain.trans }}</Text>
        </div>
        <div class="row-between">
            <Text :vertical="20">例句</Text>
            <VideoPlay class="icon" @click="playAudio(wordDetail.example_audio)"></VideoPlay>
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

.row {
    gap: 8px;
    background-color: var(--background-second-color);
    padding: 5px 10px;
    border-radius: 15px;
}

.row-around {
    gap: 10px;
}
</style>

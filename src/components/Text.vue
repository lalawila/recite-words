<template>
    <span v-if="inline" class="text"><slot></slot></span>
    <div v-else class="text"><slot></slot></div>
</template>
<script setup lang="ts">
const props = defineProps({
    inline: {
        type: Boolean,
        default: false,
    },
    size: [Number, String],
    weight: [Number, String],
    color: String,
})

const size = computed(() => {
    return typeof props.size === "string" ? props.size : `${props.size}px`
})
</script>
<style scoped>
.text {
    color: v-bind("props.color");

    font-size: v-bind(size);
    font-weight: v-bind("props.weight");
}
</style>

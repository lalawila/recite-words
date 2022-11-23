<template>
    <main class="container">
        <slot></slot>
    </main>
</template>
<script setup lang="ts">
const props = defineProps({
    width: {
        type: [Number, String],
        default: "600px",
    },
    padding: {
        type: [Number, String],
        default: "20px",
    },
})

function formatPx(value: number | string | undefined): string {
    if (value) {
        return typeof value === "string" ? value : `${value}px`
    }
    return "unset"
}

const width = computed(() => formatPx(props.width))
const padding = computed(() => formatPx(props.padding))
</script>

<style scoped>
.container {
    max-width: v-bind(width);
    padding: v-bind(padding);

    margin: 0 auto;
}
</style>

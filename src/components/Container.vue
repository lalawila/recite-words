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
})

const width = computed(() => {
    if (props.width) {
        return typeof props.width === "string"
            ? props.width
            : `${props.width}px`
    }

    return "unset"
})
</script>

<style scoped>
.container {
    max-width: v-bind(width);
    margin: 0 auto;
}
</style>

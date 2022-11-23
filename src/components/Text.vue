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
    bold: {
        type: Boolean,
        default: false,
    },
    light: {
        type: Boolean,
        default: false,
    },
    center: {
        type: Boolean,
        default: false,
    },
    color: String,
    size: [Number, String],
    // 设置 margin
    left: [Number, String],
    top: [Number, String],
    right: [Number, String],
    bottom: [Number, String],
    vertical: [Number, String], // 垂直
    horizontal: [Number, String], // 水平
})

function formatPx(value: number | string | undefined): string {
    if (value) {
        return typeof value === "string" ? value : `${value}px`
    }
    return "unset"
}

const size = computed(() => formatPx(props.size))

const margin = computed(function () {
    let top, right, bottom, left

    top = bottom = props.vertical ? formatPx(props.vertical) : "0"
    left = right = props.horizontal ? formatPx(props.horizontal) : "0"

    if (props.top) top = formatPx(props.top)
    if (props.right) right = formatPx(props.right)
    if (props.bottom) bottom = formatPx(props.bottom)
    if (props.left) left = formatPx(props.left)

    return `${top} ${right} ${bottom} ${left}`
})

const weight = computed(() => {
    console.assert(!(props.bold && props.light), "bold 和 light 不能同时设置")

    if (props.bold) return 700 // 粗
    if (props.light) return 100 // 细

    return "unset"
})

const textCenter = computed(() => {
    return props.center ? "center" : "unset"
})
</script>
<style scoped>
.text {
    color: v-bind("props.color");

    font-size: v-bind(size);
    font-weight: v-bind(weight);

    text-align: v-bind(textCenter);

    margin: v-bind(margin);
}
</style>

import { ref, onMounted, onUnmounted } from "vue"

// 按照惯例，组合式函数名以“use”开头
export function useDistanceFromBottom() {
    const distance = ref(0)

    // 组合式函数可以随时更改其状态。
    function update() {
        // 滚动距离页面底部的距离
        // HTML 元素内容的整体高度 - （HTML 元素顶部滚动出的高度 + ）
        // 参考 https://3yya.com/courseware/chapter/211
        distance.value =
            document.documentElement.offsetHeight -
            (document.documentElement.scrollTop +
                document.documentElement.clientHeight)
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => window.addEventListener("scroll", update))
    onUnmounted(() => window.removeEventListener("scroll", update))

    // 通过返回值暴露所管理的状态
    return distance
}

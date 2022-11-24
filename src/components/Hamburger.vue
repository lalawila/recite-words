<template>
    <div>
        <Expand class="icon" @click="isShow = true" />
        <Transition name="show">
            <div v-if="isShow" class="menu">
                <slot></slot>
            </div>
        </Transition>
        <Transition name="fade">
            <div v-if="isShow" class="overlay" @click="isShow = false"></div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import { Expand } from "@element-plus/icons-vue"

const isShow = ref(false)
</script>
<style scoped>
.icon {
    width: 40px;
    height: 40px;

    color: var(--text-second-color);

    cursor: pointer;
}
.menu {
    padding: 20px;
    background-color: var(--background-color);

    display: flex;
    flex-direction: column;
    gap: 20px;

    height: 100vh;
    width: 300px;

    position: fixed;
    left: 0;
    top: 0;

    margin: 0;

    z-index: 2000;
}
.overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.8);

    z-index: 1000;
}

.show-enter-active,
.show-leave-active {
    transition: left 1s;
}

.show-enter-from,
.show-leave-to {
    left: -350px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

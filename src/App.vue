<template>
    <Navigation> </Navigation>
    <RouterView v-slot="{ Component }">
        <Suspense>
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </Suspense>
    </RouterView>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from {
    opacity: 0;
}
.fade-leave-to {
    opacity: 0;
}
</style>

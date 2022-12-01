<template>
    <Navigation> </Navigation>
    <RouterView v-slot="{ Component }">
        <Suspense>
            <Transition name="fade" mode="out-in">
                <component :is="Component" />
            </Transition>
        </Suspense>
    </RouterView>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

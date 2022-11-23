<template>
    <Container class="container">
        <ElAvatar :size="128" :src="userStore.avatarUrl"></ElAvatar>
        <Text>{{ userStore.username }}</Text>
        <Text>{{ userStore.bio }}</Text>
    </Container>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 40px;
}
</style>

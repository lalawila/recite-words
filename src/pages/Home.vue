<template>
    <Container :width="600" class="container">
        <HomeLearn v-if="tokenStore.isLogined"> </HomeLearn>
        <HomeWelcome v-else="tokenStore.isLogined"> </HomeWelcome>
    </Container>
</template>
<script setup lang="ts">
import { useTokenStore } from "@/stores/token"

const tokenStore = useTokenStore()
</script>

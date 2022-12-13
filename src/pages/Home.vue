<template>
    <Container :width="600" class="container">
        <Learn v-if="tokenStore.isLogined"> </Learn>
        <Welcome v-else="tokenStore.isLogined"> </Welcome>
    </Container>
</template>
<script setup lang="ts">
import { useTokenStore } from "@/stores/token"

const tokenStore = useTokenStore()
</script>

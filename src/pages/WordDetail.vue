<template>
    <Container>
        <Detail :word-id="parseInt(route.params.id as string)"></Detail>
    </Container>
</template>
<script setup lang="ts">
const route = useRoute()
console.log(123)
</script>

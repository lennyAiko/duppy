<script setup>

defineProps({
    user: Object
})
</script>

<template>
    <h1 class="text-3xl">This is Dashboard</h1>
    <p>
        Hi {{ user.username }}, what endpoint are you creating today?
    </p>
</template>
<script setup lang="ts">
import Header from './Header.vue'
</script>


<template lang="pug">
    Header.w-full
    div.flex.flex-col.min-h-screen
        main.flex-1.p-6
            slot
</template>


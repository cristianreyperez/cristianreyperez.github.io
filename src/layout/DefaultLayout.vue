<script setup lang="ts">
import Header from './Header.vue'
</script>




<template lang="pug">
    div.flex.flex-col
        Header.w-full
        main.flex-1.p-6
            slot
</template>
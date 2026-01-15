<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template lang="pug">
    div.flex.flex-col.min-h-screen
        Header
            Header
        main.flex-1
            slot
        Footer
</template>

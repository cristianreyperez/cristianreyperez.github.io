<template lang="pug">
header.bg-white.shadow-md
  .container.mx-auto.px-4.py-3.flex.justify-between.items-center
    router-link(to="/")
      img(src="/src/assets/logov1.png" alt="Logo" class="h-10")
    nav.flex.space-x-4
      router-link(to="/" class="text-gray-600 hover:text-black transition") Home
      router-link(to="/about" class="text-gray-600 hover:text-black transition") About
</template>

<script setup lang="ts"></script>

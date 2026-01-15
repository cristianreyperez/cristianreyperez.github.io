<template lang="pug">
  header.shadow-md.max-h-20.w-full.bg-dark
    .flex.justify-between.items-center.mx-auto.px-4.py-3.max-w-7xl
      router-link(to="/").no-underline.text-black
        h3.text-black Cristian
      nav.flex.space-x-4
        router-link(to="/#about-me" class="text-gray-600 hover:text-black transition").no-underline.text-black About me
        router-link(to="/#skills" class="text-gray-600 hover:text-black transition").no-underline.text-black Skills
        router-link(to="/#contact" class="text-gray-600 hover:text-black transition").no-underline.text-black Contact

</template>



<style scoped>

h1 {
  font-size: 1.5rem;
  font-weight: bold;
}



/* nav a {
  color: black;
  transition: color 0.3s;
} */

nav a:hover {
  color: black;
}
nav.flex {
  gap: 5rem;
}
</style>

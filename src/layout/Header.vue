<template lang="pug">
  header.shadow-md.max-h-20.pl-4.pr-4
    .container.bg-green-state.flex.mx-auto.px-4.py-3.justify-between.items-center.max-w-7xl
      router-link(to="/").no-underline.text-black
        h3.text-black Cristian
      nav.flex.space-x-4
        router-link(to="/#about-me" class="text-gray-600 hover:text-black transition").no-underline.text-black About me
        router-link(to="/#skills" class="text-gray-600 hover:text-black transition").no-underline.text-black Skills
        router-link(to="/#portfolio" class="text-gray-600 hover:text-black transition").no-underline.text-black Portfolio
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

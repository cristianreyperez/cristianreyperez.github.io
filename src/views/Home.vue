<script setup lang="ts">
// You can import components if needed
</script>

<template lang="pug">
section.hero.text-white.min-h-screen.flex.items-center.bg-first-section
  .container.mx-auto.px-4.flex.flex-col.md.flex-row.items-center.gap-8
    .text-content.flex-1
      h1.text-4xl.md.text-5xl.font-bold.mb-4 Hi, I'm Cristian Rey Perez
      h2.text-xl.md.text-2xl.font-medium.mb-6 And I'm a Frontend Developer
      p.text-gray-300.mb-6
        | I'm professional web developer with strong skill in HTML, CSS, JavaScript, Tailwind, JQuery etc. I have working in this field almost 3 years and all projects are complited successfully with 100% client satisfaction.
      ul.social-icons.flex.space-x-4.items-center
        li
          a(href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer")
            img(src="/src/assets/fb.svg" alt="Facebook" class="w-10 h-10 hover:opacity-80 transition")
        li
          a(href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer")
            img(src="/src/assets/linkedin.svg" alt="LinkedIn" class="w-10 h-10 hover:opacity-80 transition")
        li
          a(href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer")
            img(src="/src/assets/github.svg" alt="GitHub" class="w-10 h-10 hover:opacity-80 transition")
        li
          a(href="mailto:you@example.com")
            img(src="/src/assets/email.svg" alt="Email" class="w-10 h-10 hover:opacity-80 transition")


    .image-content.flex-1.flex.justify-center
      img(src="/images/cristian-nobg.png" alt="Cristian Rey Perez")

section.hero.text-white.min-h-screen.flex.items-center.bg-first-section
  .container.mx-auto.px-4.flex.flex-col.md.flex-row.items-center.gap-8
    .text-content.flex-1
      h1.text-4xl.md.text-5xl.font-bold.mb-4 Hi, I'm Cristian Rey Perez
      h2.text-xl.md.text-2xl.font-medium.mb-6 And I'm a Frontend Developer
      p.text-gray-300.mb-6
        | I'm professional web developer with strong skill in HTML, CSS, JavaScript, Tailwind, JQuery etc. I have working in this field almost 3 years and all projects are complited successfully with 100% client satisfaction.
    .image-content.flex-1.flex.justify-center
      img(src="/images/cristian-nobg.png" alt="Cristian Rey Perez")
</template>


<style scoped>
.container {

  max-width: 1440px;
}
.image-content img {
  /* custom size if needed */
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 5px 35px rgba(0,0,0,.12);
}

</style>
<template>
  <footer
    class="flex flex-col items-center gap-y-4 justify-center text-white bg-redish-700 py-5"
  >
    <div
      class="grid grid-cols-5 gap-x-8 sm:gap-x-16 gap-y-4 items-center justify-center"
    >
      <a :href="github" target="_blank">
        <v-icon name="brands/github" class="hover:text-gray-300 w-10 h-auto" />
      </a>
      <a :href="stackoverflow" target="_blank">
        <v-icon
          name="brands/stack-overflow"
          class="hover:text-gray-300 w-10 h-auto"
        />
      </a>
      <a :href="linkedin" target="_blank">
        <v-icon
          name="brands/linkedin"
          class="hover:text-gray-300 w-10 h-auto"
        />
      </a>
      <a :href="behance" target="_blank">
        <v-icon name="brands/behance" class="hover:text-gray-300 w-10 h-auto" />
      </a>
      <a :href="instagram" target="_blank">
        <v-icon
          name="brands/instagram"
          class="hover:text-gray-300 w-10 h-auto"
        />
      </a>
    </div>
    <hr />
    <div class="text-dark text-opacity-75">
      By Chems Eddine Senoussi - 2020.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      github: "https://github.com/chemsedd",
      stackoverflow: "https://stackoverflow.com/users/8142734/chems-eddine",
      linkedin: "https://www.linkedin.com/in/chemsedd",
      behance: "https://behance.com/chemsedd",
      instagram: "https://www.instagram.com/sun.art.tech",
    };
  },
};
</script>

<style></style>

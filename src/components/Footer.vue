<template>
  <footer
    class="flex flex-col items-center gap-y-4 justify-center text-white bg-redish-700 py-5"
  >
    <div
      class="grid grid-cols-4 gap-x-8 sm:gap-x-16 gap-y-4 items-center justify-center"
    >
      <a :href="github" target="_blank">
        <v-icon name="brands/github" class="hover:text-gray-300 w-10 h-auto" />
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
    <div>
      Copyright reserved - 2020.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      github: "https://github.com/chemsedd",
      linkedin: "https://github.com/chemsedd",
      behance: "https://github.com/chemsedd",
      instagram: "https://github.com/chemsedd",
    };
  },
};
</script>

<style></style>

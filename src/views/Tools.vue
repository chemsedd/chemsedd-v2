<template>
  <div
    id="tools"
    class="flex flex-col gap-y-12 h-screen items-center justify-center text-white"
  >
    <div data-aos="fade-up" class="w-2/3 text-3xl sm:text-5xl font-bold">
      <span class="bg-redish-500 px-4">#</span>
      My Tools
    </div>
    <div class="w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-16">
      <div
        class="flex flex-col bg-redish-500 items-center justify-center text-center p-6"
      >
        <v-icon name="brands/vuejs" class="w-20 h-auto p-1" />
        <h1 class="text-3xl font-bold p-1">Vue.JS</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum
        cumque distinctio similique quam molestiae enim? Odit eaque id
        molestias?
      </div>
      <div
        class="flex flex-col bg-redish-500 items-center justify-center text-center p-6"
      >
        <v-icon name="brands/python" class="w-20 h-auto p-1" />
        <h1 class="text-3xl font-bold p-1">Python</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum
        cumque distinctio similique quam molestiae enim? Odit eaque id
        molestias?
      </div>
      <div
        class="flex flex-col bg-redish-500 items-center justify-center text-center p-6"
      >
        <v-icon name="brands/java" class="w-20 h-auto p-1" />
        <h1 class="text-3xl font-bold p-1">Java</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum
        cumque distinctio similique quam molestiae enim? Odit eaque id
        molestias?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tools",
};
</script>

<style></style>

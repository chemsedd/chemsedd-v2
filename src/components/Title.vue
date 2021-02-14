<template>
  <div data-aos="fade-up" class="w-10/12 md:w-2/3">
    <div
      class="flex items-center justify-center py-2 text-5xl sm:text-6xl font-bold text-center border-2 shadow-2xl rounded-2xl border-redish-500"
    >
      <span class="text-redish-500 pr-4 rounded-lg">#</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTitle",
};
</script>

<style></style>

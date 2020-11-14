<template>
  <nav class="flex-1 px-8 py-12">
    <div
      class="grid grid-cols-12 justify-start gap-x-3 text-white text-lg font-semibold"
    >
      <div class="col-start-3 grid grid-cols-1 font-extrabold">
        <a href="#">
          Home
          <div class="bg-redish mt-1 w-10 h-1"></div>
        </a>
      </div>
      <div class="col-start-4 grid grid-cols-1">
        <a href="#">
          Work
          <div class="bg-redish mt-1 w-10 h-1 hidden"></div>
        </a>
      </div>
      <div class="col-start-5 grid grid-cols-1">
        <a href="#">
          Contact
          <div class="bg-redish mt-1 w-10 h-1 hidden"></div>
        </a>
      </div>
      <div class="col-start-6 grid grid-cols-1">
        <a href="#">
          About!
          <div class="bg-redish mt-1 w-10 h-1 hidden"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

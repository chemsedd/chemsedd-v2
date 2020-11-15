<template>
  <header class="col-start-3 col-end-7 flex text-white text-lg font-semibold">
    <div class="flex-1 grid font-extrabold">
      <a href="#">
        Home
        <div class="bg-redish-500 mt-1 w-10 h-1"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#">
        Work
        <div class="bg-redish-500 mt-1 w-10 h-1 hidden"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#">
        Contact
        <div class="bg-redish-500 mt-1 w-10 h-1 hidden"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#">
        About!
        <div class="bg-redish-500 mt-1 w-10 h-1 hidden"></div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

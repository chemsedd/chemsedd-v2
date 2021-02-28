<template>
  <header
    class="md:col-start-3 md:col-end-7 flex items-center justify-center text-white text-lg font-semibold bg-white bg-opacity-25 sticky"
  >
    <div class="flex-1 grid font-extrabold">
      <a href="#home">
        Home
        <div class="bg-redish-500 mt-1 w-10 h-1"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#about">
        About
        <div class="bg-redish-500 mt-1 w-10 h-1 opacity-0"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#fields">
        Fields
        <div class="bg-redish-500 mt-1 w-10 h-1 opacity-0"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#skills">
        Skills
        <div class="bg-redish-500 mt-1 w-10 h-1 opacity-0"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#work">
        Work
        <div class="bg-redish-500 mt-1 w-10 h-1 opacity-0"></div>
      </a>
    </div>
    <div class="flex-1 grid">
      <a href="#contact">
        Contact
        <div class="bg-redish-500 mt-1 w-10 h-1 opacity-0"></div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>

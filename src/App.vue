<template>
  <div id="app" class="flex w-screen h-screen">
    <div class="flex-1 grid grid-cols-12">
      <nav-bar />
      <main class="relative flex-1 col-start-3 col-end-11 grid grid-cols-6">
        <div class="col-span-4">
          <h1 class="text-4xl text-white fira-code font-extrabold">
            Mr.Chems Eddine Senoussi
          </h1>
          <h5 class="text-lg text-white fira-code font-thin">
            // <span class="bg-redish px-2">Web Developer</span> &
            <span class="bg-blue-600 px-2">Graphic Designer</span>
          </h5>
        </div>
        <div
          id="white-square"
          class="absolute col-span-2 h-56 w-56 bg-gray-100 shadow-lg"
        ></div>
        <div
          id="red-square"
          class="absolute col-span-2 h-56 w-56 bg-redish shadow-lg"
        ></div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  @apply bg-dark;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.01) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.01) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

nav {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.fira-code {
  font-family: "Fira Code";
}

#white-square {
  right: 0px;
  bottom: 150px;
}

#red-square {
  right: 100px;
}
</style>

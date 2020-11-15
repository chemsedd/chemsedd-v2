<template>
  <div id="app" class="w-screen h-screen">
    <div class="grid grid-cols-12 justify-center py-8 px-8">
      <nav-bar />
    </div>
    <div class="flex-1 grid grid-cols-12 items-center pt-48 px-8">
      <div class="relative flex-1 col-start-3 col-end-11 grid grid-cols-12">
        <div class="col-span-8 grid grid-cols-1">
          <div>
            <h1 class="text-4xl text-white fira-code font-extrabold">
              Mr.Chems Eddine Senoussi
            </h1>
            <h5 class="text-lg text-white fira-code font-thin">
              // <span class="font-bold px-2">Web Developer</span> &
              <span class="font-bold px-2">Graphic Designer</span>
            </h5>
          </div>
          <div class="grid gap-3 grid-cols-8 p-4 text-white">
            <button
              class="h-10 col-span-3 bg-redish-500 hover:bg-redish-700 font-bold"
            >
              Resume
            </button>
            <button
              class="h-10 col-span-3 border border-gray-200 hover:bg-redish-700 hover:bg-opacity-25 font-bold"
            >
              Contact
            </button>
          </div>
        </div>
        <div class="col-span-4 relative">
          <div
            id="white-square"
            class="absolute h-56 w-56 bg-gray-100 shadow-lg"
          ></div>
          <div
            id="red-square"
            class="absolute h-56 w-56 bg-redish-500 hover:bg-redish-700 shadow-lg"
          ></div>
        </div>
      </div>
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
#app {
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
  top: 0px;
  right: 0px;
}

#red-square {
  top: 50px;
  right: 90px;
}
</style>

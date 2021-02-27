<template>
  <div
    id="home"
    class="flex-1 grid grid-cols-1 gap-x-4 gap-y-10 w-10/12 sm:grid-cols-2 justify-center items-center min-h-screen"
  >
    <div
      data-aos="fade-right"
      class="flex flex-col gap-y-3 justify-center items-center text-center"
    >
      <div class="md:text-8xl text-7xl text-white fira-code font-bold">
        .hello!
      </div>
      <h1 class="md:text-3xl text-2xl font-bold fira-code text-white">
        <span class="font-thin">I am</span> Chems Eddine Senoussi
      </h1>
      <div
        class="md:text-2xl text-lg fira-code font-thin text-white opacity-75"
      >
        <span class="text-redish-500 font-bold">//</span>
        <span class=" font-bold px-2">Web Developer</span> &
        <span class="font-bold px-2">Graphic Designer</span>
      </div>
      <div
        class="inline-flex justify-center items-center w-full gap-x-3 text-white"
      >
        <button class="btn bg-redish-500 hover:bg-redish-700">
          Resume
        </button>
        <button
          class="btn border border-gray-200 hover:bg-redish-700 hover:bg-opacity-25"
        >
          Contact
        </button>
      </div>
    </div>
    <div data-aos="fade-left" class="flex flex-1 items-center justify-center">
      <img
        src="@/assets/me-b&w.jpg"
        alt="chems eddine senoussi"
        class="w-9/12 rounded-3xl shadow-2xl"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style></style>

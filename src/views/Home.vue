<template>
  <div
    id="home"
    class="flex-1 grid grid-cols-1 gap-x-4 gap-y-10 w-10/12 sm:grid-cols-2 justify-center items-center min-h-screen"
  >
    <!-- 
      Title
     -->
    <div
      data-aos="fade-right"
      class="flex flex-col gap-y-6 justify-center items-center text-center"
    >
      <div class="fira-code font-bold text-7xl md:text-8xl text-white">
        .hello!
      </div>
      <h1 class="fira-code font-bold text-2xl md:text-3xl text-white">
        <span class="font-thin">I am</span> Chems Eddine Senoussi
      </h1>
      <div
        class="fira-code font-extrabold text-xl text-redish-500 border-2 border-redish-500 border-dashed rounded-lg p-2"
      >
        <span class="">//</span>
        <span class="text-white px-2">Software Engineer</span> &
        <span class="text-white px-2">Graphic Designer</span>
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
    <!-- 
      Picture
     -->
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

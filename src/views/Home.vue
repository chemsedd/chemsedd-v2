<template>
  <div
    id="home"
    class="flex-1 grid grid-cols-1 gap-x-4 gap-y-10 w-10/12 lg:grid-cols-2 justify-center items-center min-h-screen my-8 sm:my-10 lg:my-0"
  >
    <!-- 
      Title
     -->
    <div
      data-aos="fade-right"
      class="flex flex-col gap-y-6 justify-center items-center text-center"
    >
      <div
        class="fira-code font-bold text-6xl sm:text-7xl md:text-8xl text-white"
      >
        .hello!
      </div>
      <h1 class="fira-code font-bold text-2xl md:text-3xl text-white">
        <span class="font-thin">I am</span> Chems Eddine Senoussi
      </h1>
      <div
        class="fira-code font-extrabold text-xl text-redish-500 border-2 border-redish-500 border-dashed rounded-lg p-2"
      >
        <span>//</span>
        <span class="text-white px-2">Software Engineer</span> &
        <span class="text-white px-2">Graphic Designer</span>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 justify-center items-center gap-y-4 gap-x-4 text-white w-full"
        target="_blank"
      >
        <a
          class="btn a-flex bg-redish-500 hover:bg-redish-700"
          :href="`${publicPath}cv/en-cv.pdf`"
          target="_blank"
          download="Chems Eddine Senoussi CV [EN]"
        >
          Resume [En]
        </a>
        <a
          class="btn a-flex bg-blue-500 hover:bg-blue-700"
          :href="`${publicPath}cv/fr-cv.pdf`"
          target="_blank"
          download="Chems Eddine SENOUSSI CV [FR]"
        >
          Resume [Fr]
        </a>
        <a
          class="col-span-2 sm:col-span-1 btn a-flex border border-gray-200 hover:bg-redish-700 hover:bg-opacity-25"
          href="#contact"
        >
          Contact
        </a>
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
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style>
.a-flex {
  @apply flex items-center justify-center;
}
</style>

<template>
  <div
    id="about"
    class="min-h-screen flex items-center justify-center my-10 sm:my-0"
  >
    <div class="flex items-center justify-center w-10/12 shadow-md bg-white">
      <div
        class="w-4/5 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-16 items-center text-dark fira-code my-24"
      >
        <div data-aos="fade-right" class="sm:col-span-2 flex flex-col flex-1">
          <div class="text-3xl sm:text-5xl font-bold">
            <span class="bg-redish-500 px-4">#</span>
            About me
          </div>
          <div class="pt-4 leading-7 text-gray-800">
            <span class="key-word">//</span> I am
            <span class="key-word">Chems Eddine Senoussi</span>, a Computer
            Science graduate with Master's degree in
            <span class="key-word">Artificial Intelligence</span>. I'm so
            passionate about technology and computers. I am interested in
            <span class="key-word"
              >Web Dev (Full Stack), Desktop Dev, and Machine/Deep
              learning</span
            >. I am also a <span class="key-word">graphic designer</span>
          </div>
        </div>
        <div data-aos="fade-left" class="flex justify-center items-center">
          <img
            class="w-8/12 sm:w-11/12 h-auto"
            src="@/assets/me.jpg"
            alt="chems eddine senoussi"
          />
          <div
            id="white-square-2"
            class="absolute h-16 w-16 bg-gray-100
        hover:bg-gray-300 shadow-lg"
          ></div>
          <div
            id="red-square-2"
            class="absolute h-16 w-16 bg-redish-500 hover:bg-redish-700 shadow-lg"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

<style scoped>
.key-word {
  @apply font-bold text-redish-500 capitalize;
}

#white-square-2 {
  right: -40px;
  top: -50px;
}
#red-square-2 {
  left: -40px;
  bottom: -50px;
}
</style>

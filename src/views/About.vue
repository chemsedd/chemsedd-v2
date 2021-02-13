<template>
  <div
    id="about"
    class="min-h-screen flex items-center justify-center my-10 sm:my-0"
  >
    <div
      class="flex items-center justify-center w-10/12 shadow-2xl bg-gray-100 rounded-3xl"
    >
      <!-- My bio -->
      <div
        class="px-10 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-4 items-center text-dark fira-code my-24"
      >
        <div data-aos="fade-right" class="sm:col-span-2 flex flex-col flex-1">
          <div class="text-3xl sm:text-5xl text-redish-500 font-bold">
            <span class="bg-redish-500 px-4 rounded-lg text-white">#</span>
            About me
          </div>
          <div class="pt-4 leading-7 text-gray-800">
            I am <span class="key-word">Chems Eddine Senoussi</span>, a Computer
            Science graduate with Master's degree in
            <span class="key-word">Artificial Intelligence</span>. I'm so
            passionate about technology and computers. I am interested in
            <span class="key-word"
              >Web Dev (Full Stack), Desktop Dev, and Machine/Deep
              learning</span
            >. I also work as a <span class="key-word">graphic designer</span>.
          </div>
        </div>
        <!-- Infos about me -->
        <div data-aos="fade-left" class="flex justify-center items-center">
          <dl class="grid grid-cols-2">
            <dt><v-icon class="listed-icon" name="birthday-cake" /></dt>
            <dd>
              <span class="key-word"> October 1<sup>st</sup>, 1995. </span>
            </dd>

            <dt><v-icon class="listed-icon" name="globe-africa" /></dt>
            <dd><span class="key-word"> Algerian. </span></dd>

            <dt><v-icon class="listed-icon" name="home" /></dt>
            <dd><span class="key-word"> Biskra, Algeria. </span></dd>

            <dl class="flex gap-x-4">
              <dt>
                <v-icon class="listed-icon" name="language" />
              </dt>
              <dd>
                <ul>
                  <li>
                    <span class="key-word"> Arabic (native) </span>
                  </li>
                  <li>
                    <span class="key-word"> English (Fluent) </span>
                  </li>
                  <li>
                    <span class="key-word"> French (Fluent) </span>
                  </li>
                </ul>
              </dd>
            </dl>
          </dl>
        </div>
      </div>
      <a href="#app" class="page-up" data-aos="fade-up">
        <v-icon name="caret-up" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>
<script>
import Experience from "../components/Experience.vue";

export default {
  name: "About",
  components: {
    Experience,
  },
};
</script>

<style>
.key-word {
  @apply font-bold text-redish-500 capitalize;
}

.listed-info {
  @apply flex;
}

.listed-icon {
  @apply h-6 w-auto text-dark;
}

.page-up {
  position: fixed;
  right: 20px;
  bottom: 20px;
  @apply w-10 h-10 flex items-center justify-center bg-redish-500 text-white;
}

.page-up:hover {
  @apply bg-redish-700 text-gray-300;
}
</style>

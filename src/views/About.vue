<template>
  <div
    id="about"
    class="min-h-screen flex flex-col items-center justify-center my-10 sm:my-0
    w-full gap-y-10"
  >
    <c-title animate="">About Me</c-title>
    <!-- data-aos="fade-up" -->
    <div
      class="flex items-center justify-center w-10/12 shadow-2xl bg-gray-100 rounded-3xl"
    >
      <!-- My bio -->
      <div
        class="px-10 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-4 items-center text-dark  my-24"
      >
        <div class="sm:col-span-2 flex flex-col flex-1">
          <div class="pt-4 leading-7 text-gray-800 fira-code">
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
        <ul class="flex flex-col gap-y-2">
          <li>
            <v-icon class="listed-icon" name="birthday-cake" />
            <span class="key-word"> October 1<sup>st</sup>, 1995. </span>
          </li>

          <li>
            <v-icon class="listed-icon" name="globe-africa" />
            <span class="key-word"> Algerian. </span>
          </li>

          <li>
            <v-icon class="listed-icon" name="home" />
            <span class="key-word"> Biskra, Algeria. </span>
          </li>

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
        </ul>
      </div>
      <a href="#app" class="page-up" data-aos="fade-up">
        <v-icon name="caret-up" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>
<script>
import CTitle from "../components/Title.vue";
import Experience from "../components/Experience.vue";

export default {
  name: "About",
  components: {
    CTitle,
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
  right: 50px;
  bottom: 50px;
  @apply w-10 h-10 rounded-full flex items-center justify-center bg-redish-500 text-white shadow-lg;
}

.page-up:hover {
  @apply bg-redish-700 shadow-outline;
}
</style>

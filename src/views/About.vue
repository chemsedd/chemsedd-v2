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
        class="px-10 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-x-4 items-center text-dark  my-10"
      >
        <div class="sm:col-span-2 flex flex-col flex-1">
          <div class="pt-4 leading-7 text-gray-800 fira-code">
            I am <span class="key-word">Chems Eddine Senoussi</span>, a Computer
            Science graduate with Master's degree in
            <span class="key-word">Artificial Intelligence</span>. I consider
            myself a <span class="key-word">generalist</span> who is interested
            in
            <span class="key-word"
              >Web Dev (Full Stack), Desktop Dev, and Machine/Deep
              learning</span
            >. I have <span class="key-word">leadership skills</span> and the
            <span class="key-word">flexibility</span> to work with different
            teams on different tasks. As a
            <span class="key-word">multi-hyphenate</span>, I am also a
            <span class="key-word">graphic designer</span> with more than
            <span class="key-word">4 years of experience</span>.
          </div>
          <hr class="md:hidden" />
        </div>
        <!-- Infos about me -->
        <dl class="bio-list">
          <dt>
            <v-icon class="listed-icon" name="birthday-cake" />
          </dt>
          <dd>
            <span class="key-word"> October 1<sup>st</sup>, 1995. </span>
          </dd>
          <dt>
            <v-icon class="listed-icon" name="globe-africa" />
          </dt>
          <dd><span class="key-word"> Algerian. </span></dd>

          <dt>
            <v-icon class="listed-icon" name="home" />
          </dt>
          <dd>
            <span class="key-word"> Biskra, Algeria. </span>
          </dd>

          <dt>
            <v-icon class="listed-icon" name="language" />
          </dt>
          <dd>
            <div class="flex flex-col">
              <span class="key-word"> Arabic (native) </span>
              <span class="key-word"> English (Fluent) </span>
              <span class="key-word"> French (Fluent) </span>
            </div>
          </dd>
        </dl>
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

.bio-list {
  @apply grid grid-cols-8;
}

.bio-list dt {
  @apply col-span-1;
}

.bio-list dd {
  @apply col-span-7;
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

<template>
  <div
    id="work"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <c-title>My Work</c-title>
    <div class="w-2/3 flex flex-col gap-y-10">
      <!-- Development Work -->
      <div data-aos="fade-up" class="flex items-center gap-x-4 text-xl">
        <div
          class="w-12 h-12 flex items-center justify-center rounded-full bg-redish-500"
        >
          <v-icon name="laptop-code" class="w-6 h-6" />
        </div>
        <div class="font-bold">As a Developer</div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-4 gap-x-20 gap-y-8 justify-center text-center"
      >
        <work-card>
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </work-card>
        <work-card>
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </work-card>
        <work-card>
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </work-card>
        <work-card>
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </work-card>
      </div>
      <!-- Design Work -->
      <div data-aos="fade-up" class="flex items-center gap-x-4 text-xl mt-5">
        <div
          class="w-12 h-12 flex flex-col sm:flex-row items-center justify-center rounded-full bg-redish-500"
        >
          <v-icon name="crop" class="w-6 h-6" />
        </div>
        <span class="font-bold">As a Graphic Designer</span>
      </div>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center w-full"
      >
        <div
          class="flex items-center justify-center shadow-lg"
          data-aos="fade-up"
          v-for="logo in logosPaths"
          :key="logo"
        >
          <img
            :src="logo"
            :alt="logo"
            class="w-full hover:shadow-outline hover:cursor-pointer rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";
import WorkCard from "../components/WorkCard.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Work",
  components: {
    CTitle,
    WorkCard,
    Carousel,
    Slide,
  },
  data() {
    return {
      logos: [
        "startup-camp",
        "ride-proud",
        "falsh-delivery",
        "galaxynet",
        "dmps",
        "om-djebril",
        "tech-talks",
      ],
    };
  },
  computed: {
    logosPaths() {
      var paths = [];
      this.logos.forEach((logo) => {
        paths.push(require(`@/assets/work/logos/${logo}.jpg`));
      });
      return paths;
    },
  },
};
</script>

<style></style>

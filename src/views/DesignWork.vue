<template>
  <div
    id="design-work"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <c-title>As a Designer</c-title>
    <!-- Logo Modal -->
    <vue-final-modal v-model="showLogo" name="logoModal">
      <template v-slot="{ params }">
        <div class="flex items-center justify-center h-screen p-10">
          <div
            class="w-6/12 rounded-3xl flex flex-col items-center justify-center shadow-2xl relative"
          >
            <img
              :src="params.pic"
              :alt="params.pic"
              class="full rounded-3xl shadow"
            />
            <button
              class="bg-redish-500 hover:bg-redish-700 inline-flex items-center px-1 py-1 h-8 rounded absolute-close"
            >
              <v-icon @click="showLogo = false" name="times" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </template>
    </vue-final-modal>
    <div class="w-2/3 flex flex-col gap-y-10">
      <!-- Logos Galery  -->
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center w-full"
      >
        <div
          class="flex items-center justify-center shadow-lg"
          data-aos="fade-up"
          v-for="logo in logosPaths"
          :key="logo"
        >
          <button @click="$vfm.show('logoModal', { pic: logo })">
            <img
              :src="logo"
              :alt="logo"
              class="w-full hover:shadow-outline hover:cursor-pointer rounded-lg"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";

export default {
  name: "Work",
  components: {
    CTitle,
  },
  data() {
    return {
      showLogo: false,
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

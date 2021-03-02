<template>
  <div
    id="fields"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center my-10 sm:my-0"
  >
    <c-title animated="fade-up" id="Fields">My timeline</c-title>
    <div class="w-10/12 relative container mx-auto px-4 flex flex-col gap-5">
      <div
        class="w-2 h-full bg-white absolute inset-0 left-15 md:mx-auto md:left-0 md:right-0 shadow-lg z-0"
      ></div>
      <div
        class="w-full md:w-1/2 sm:mx-auto bg-white border-2 border-dashed border-redish-500 text-center text-xl text-redish-500 font-bold p-4 rounded-lg z-0"
      >
        Education
      </div>
      <!-- Timeline -->
      <div
        v-for="(el, index) in education"
        :key="el.title"
        class="relative z-10"
      >
        <!-- Image -->
        {{ el.index }}
        <img
          src="https://picsum.photos/200"
          class="w-24 h-24 object-cover rounded-full mb-2 sm:absolute md:mx-auto md:left-0 md:right-0 border-4 border-white"
          alt="UMKB"
        />
        <!-- Card -->
        <div
          data-aos="fade-left"
          :class="[
            'relative pt-2 sm:pt-0 sm:pl-32 md:w-1/2',
            index % 2 == 0
              ? ' md:ml-auto md:pl-16'
              : 'md:mr-auto md:ml-0 md:pl-0 md:pr-16',
          ]"
        >
          <!-- Pointer -->
          <div
            :class="[
              'w-4 h-4 transform rotate-45 absolute inset-0 left-10 sm:top-11 sm:left-29 bg-white',
              index % 2 == 0 ? 'md:left-14' : 'md:left-auto md:right-14',
            ]"
            aria-hidden="true"
          ></div>
          <div
            class="bg-white text-dark flex flex-col gap-y-2 p-5 rounded-xl shadow-lg"
          >
            <span
              class="bg-redish-500 px-2 py-1 rounded-full text-white text-sm font-bold w-max"
              >{{ el.year }}</span
            >
            <h1 class="fira-code text-xl font-bold">
              {{ el.title }}
            </h1>
            <div>
              <h3 class="text-lg italic">
                <v-icon :name="el.icon" class="w-5 h-5 text-redish-500" />
                {{ el.place }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "@/components/Title.vue";

import mydata from "@/data/data.json";

export default {
  name: "Timeline",
  components: {
    CTitle,
  },
  data() {
    return {
      education: mydata.timeline.education,
    };
  },
};
</script>

<style>
.border-redish-dashed {
  @apply border-white border-dashed;
}

.center-md {
  @apply md:mx-auto md:left-0 md:right-0;
}
</style>

<template>
  <div
    id="skills"
    class="min-h-screen w-full flex flex-col gap-y-12 items-center justify-center text-white my-8 sm:mt-5 sm:mb-0 lg:my-4"
  >
    <c-title animated="fade-up">My Skills</c-title>
    <div
      class="w-8/12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 py-4"
    >
      <div
        v-for="tool in tools"
        :key="tool.name"
        data-aos="fade-up"
        class="flex flex-col items-center justify-start text-center rounded-3xl gap-4 border-2 border-dashed border-redish-500 px-4 py-8"
      >
        <img
          class="w-10/12"
          :src="require(`@/assets/tools/${tool.logo}.svg`)"
          :alt="tool.name"
        />
        <h1 class="skill-title">{{ tool.name }}</h1>
        <p class="skill-desc">
          {{ tool.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";

import mydata from "@/data/data.json";

export default {
  name: "Skills",
  components: {
    CTitle,
  },
  data() {
    return {
      tools: mydata.tools,
    };
  },
};
</script>

<style>
.skill-logo {
  @apply h-20 w-20 p-1;
}

.skill-title {
  @apply text-3xl font-bold p-1;
}

.skill-desc {
}
</style>

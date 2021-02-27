<template>
  <div
    id="skills"
    class="flex flex-col gap-y-12 min-h-screen items-center justify-center text-white my-10 sm:my-0"
  >
    <c-title animated="fade-up">My Skills</c-title>
    <div class="w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-16">
      <!-- Vue JS -->
      <skill-card>
        <v-icon name="brands/vuejs" class="skill-logo" />
        <h1 class="skill-title">Vue.JS</h1>
        <p class="skill-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum
          cumque distinctio similique quam molestiae enim? Odit eaque id
          molestias?
        </p>
      </skill-card>
      <!-- Python -->
      <skill-card>
        <v-icon name="brands/python" class="skill-logo" />
        <h1 class="skill-title">Python</h1>
        <p class="skill-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum
          cumque distinctio similique quam molestiae enim? Odit eaque id
          molestias?
        </p>
      </skill-card>
      <!-- Java -->
      <skill-card>
        <v-icon name="brands/java" class="skill-logo" />
        <h1 class="skill-title">Java</h1>
        <p class="skill-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum
          cumque distinctio similique quam molestiae enim? Odit eaque id
          molestias?
        </p>
      </skill-card>
    </div>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";
import SkillCard from "../components/SkillCard.vue";

export default {
  name: "Skills",
  components: {
    CTitle,
    SkillCard,
  },
};
</script>

<style>
.skill-logo {
  @apply h-20 w-auto p-1;
}

.skill-title {
  @apply text-3xl font-bold p-1;
}

.skill-p {
  @apply text-gray-200;
}
</style>

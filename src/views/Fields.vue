<template>
  <div
    id="fields"
    class="min-h-screen flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <c-title id="Fields">My Fields</c-title>
    <ul
      class="w-2/3 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-5 sm:gap-y-10 text-white fira-code"
    >
      <li data-aos="fade-up" v-for="(info, skill) in Fields" :key="skill">
        <div class="flex">
          <div class="flex-shrink-0">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-full bg-redish-500"
            >
              <v-icon :name="info.icon" class="text-white w-6 h-auto" />
            </div>
          </div>
          <div class="ml-4">
            <h4 class="text-lg leading-6 font-bold">
              {{ skill }}
            </h4>
            <p class="mt-2 text-base leading-6 text-gray-500">
              {{ info.desc }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";
export default {
  name: "Fields",
  components: {
    CTitle,
  },
  data() {
    return {
      Fields: {
        "Web Development": {
          icon: "code",
          desc:
            "I am interested in web development since my chidhood. Working on creating new powerfull web applications is a passion, with the latest technologies.",
        },
        "Artificial Intelligence": {
          icon: "robot",
          desc:
            "I graduated with a Master's degree in Artificial Intelligence from Biskra University. I worked on small projects based on Machine/Deep learning, data analysis and data visualization.",
        },
        "Desktop Development": {
          icon: "laptop-code",
          desc:
            "I also work on developing desktop apps (mostly on windows), I use different technologies depanding on the type of app.",
        },
        "Graphic Design": {
          icon: "crop",
          desc:
            "I worked on many projects with different agencies and associations as a designer. I was responsable for creating the virtual indentity and all printables (documents, roll-up and posters).",
        },
      },
    };
  },
};
</script>

<style></style>

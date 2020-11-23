<template>
  <div
    class="min-h-screen flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <div id="Fields" data-aos="fade-up" class="w-2/3">
      <div class="text-3xl sm:text-5xl font-bold">
        <span class="bg-redish-500 px-4">#</span>
        My Fields
      </div>
      <div class="py-2">
        I'v been always interested in so many things, Web, Desktop, AI, etc. And
        that led me to learn different technologies and tools.
      </div>
    </div>
    <ul
      class="w-2/3 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 gap-y-5 sm:gap-y-10 text-white fira-code"
    >
      <li data-aos="fade-up" v-for="(info, skill) in Fields" :key="skill">
        <div class="flex">
          <div class="flex-shrink-0">
            <div
              class="flex items-center justify-center h-12 w-12 bg-redish-500"
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
            <div class="w-2/3 bg-redish-500 rounded-full text-center">
              80%
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Fields",
  data() {
    return {
      Fields: {
        "Web Development": {
          icon: "code",
          desc:
            "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        "Artificial Intelligence": {
          icon: "robot",
          desc:
            "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        "Desktop Development": {
          icon: "laptop-code",
          desc:
            "lorem ipsum holly doing better go back there in time daily planet superman batman.",
        },
        "Graphic Design": {
          icon: "crop",
          desc:
            "llorem ipsum holly doing better go back there in time daily planet superman batman",
        },
      },
    };
  },
};
</script>

<style></style>

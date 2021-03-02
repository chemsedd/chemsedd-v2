<template>
  <div
    id="fields"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center my-10 sm:my-0"
  >
    <c-title animated="fade-up" id="Fields">My timeline</c-title>
    <!-- <div class="w-2/3 flex flex-col gap-y-5 relative">
    </div> -->
    <div
      class="w-10/12 lg:w-2/3 relative container mx-auto px-4 flex flex-col gap-5"
    >
      <div
        class="w-2 h-full bg-white absolute inset-0 left-15 md:mx-auto md:left-0 md:right-0 shadow-lg z-0"
      ></div>
      <div class="relative z-10">
        <!-- Image -->
        <img
          src="https://picsum.photos/200"
          class="w-24 h-24 object-cover rounded-full shadow-lg mb-2 sm:absolute md:mx-auto md:left-0 md:right-0"
          alt="UMKB"
        />
        <!-- Card -->
        <div
          class="relative pt-2 sm:pt-0 sm:pl-32 md:w-1/2 md:ml-auto md:pl-16"
        >
          <!-- Pointer -->
          <div
            class="w-4 h-4 transform rotate-45 absolute inset-0 left-10 sm:top-11 sm:left-29 md:left-14 bg-white"
            aria-hidden="true"
          ></div>
          <div
            class="bg-white text-dark flex flex-col gap-y-2 p-5 rounded-xl shadow-lg"
          >
            <span
              class="bg-redish-500 px-2 py-1 rounded-full text-white text-sm font-bold w-max"
              >October 2020</span
            >
            <h1 class="fira-code text-xl font-bold">
              Master’s degree in Artificial Intelligence - Computer Science
            </h1>
            <div>
              <h3 class="text-lg italic">
                <v-icon name="graduation-cap" class="w-5 h-5 text-redish-500" />
                University of Mohamed Khider, Biskra - Algeria.
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

export default {
  name: "Timeline",
  components: {
    CTitle,
  },
  data() {
    return {};
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

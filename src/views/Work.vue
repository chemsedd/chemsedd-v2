<template>
  <div
    id="work"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <div data-aos="fade-up" class="w-2/3">
      <div class="text-3xl sm:text-5xl font-bold ">
        <span class="bg-redish-500 px-4">#</span>
        My Work
      </div>
    </div>
    <div class="w-2/3 flex flex-col gap-y-10">
      <!-- Development Work -->
      <div class="flex items-center gap-x-4 text-xl">
        <div
          class="w-12 h-12 flex items-center justify-center rounded-full bg-redish-500"
        >
          <v-icon name="laptop-code" class="w-6 h-6" />
        </div>
        <span class="font-bold">As a Developer:</span>Some of my work as a
        developer.
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-4 gap-x-20 justify-center text-center"
      >
        <div class="flex flex-col bg-white">
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex flex-col bg-white">
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex flex-col bg-white">
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex flex-col bg-white">
          <div class="w-full">
            <img
              src="../assets/work/logos/smart.svg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <!-- Design Work -->
      <div class="flex items-center gap-x-4 text-xl">
        <div
          class="w-12 h-12 flex items-center justify-center rounded-full bg-redish-500"
        >
          <v-icon name="crop" class="w-6 h-6" />
        </div>
        <span class="font-bold">As a Graphic Designer:</span> with 3 years of
        experience.
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-4 gap-x-20 justify-center text-center"
      >
        <div class="flex flex-col bg-white  overflow-scroll">
          <div class="w-full">
            <img
              src="../assets/work/logos/ride-proud.jpg"
              alt="smart green"
              class="w-full"
            />
          </div>
          <div class="w-full">
            <img
              src="../assets/work/logos/ride-proud.jpg"
              alt="smart green"
              class="w-full"
            />
          </div>
          <div class="w-full">
            <img
              src="../assets/work/logos/ride-proud.jpg"
              alt="smart green"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
};
</script>

<style></style>

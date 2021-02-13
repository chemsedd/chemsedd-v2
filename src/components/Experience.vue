<template>
  <div>
    <ul class="flex flex-col list-disc list-outside">
      <li>
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold text-redish-500">
            {{ title }}
          </h1>
          <div class="text-gray-600 font-semibold">
            2017-2020
          </div>
          <p class="hidden">
            I was the president of the university scientific club (BCSC). We
            organized different activities: programming workshops, conferences,
            competitions, etc. We hosted the 1<sup>st</sup> edition of
            <span class="key-word"
              >Algerian Collegiate Programming Contest 2018 (ALCPC)</span
            >
            in Algeria.
          </p>
        </div>
      </li>
      <li>
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold text-redish-500">
            {{ title }}
          </h1>
          <div class="text-gray-600 font-semibold">
            2017-2020
          </div>
          <p class="hidden">
            I was the president of the university scientific club (BCSC). We
            organized different activities: programming workshops, conferences,
            competitions, etc. We hosted the 1<sup>st</sup> edition of
            <span class="key-word"
              >Algerian Collegiate Programming Contest 2018 (ALCPC)</span
            >
            in Algeria.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Experience",
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style scoped>
li::marker {
  @apply text-2xl text-redish-500;
}
</style>

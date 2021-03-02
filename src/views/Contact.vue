<template>
  <div
    id="contact"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-8 sm:my-10 lg:my-0"
  >
    <c-title>Contact Me</c-title>
    <div class="w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 py-4">
      <div data-aos="fade-right">
        <div
          class="grid grid-cols-1 gap-y-2 text-center justify-between h-full"
        >
          <span
            class="w-full flex justify-center items-center gap-x-4 rounded-lg border border-dashed border-redish-500 px-4 py-2"
          >
            <v-icon name="clipboard" class="text-white w-4 h-4" /> Click to copy
            to clipboard.</span
          >
          <button
            v-for="el in contact"
            :key="el.value"
            @click="copyIt(el.value)"
            class="contact-container font-bold text-xl active:bg-red-400"
          >
            <v-icon :name="el.icon" class="w-8 h-8" />
            <span>{{ el.value }}</span>
          </button>
        </div>
      </div>
      <div class="w-full" data-aos="fade-left">
        <form
          action="https://formspree.io/f/mnqokpgq"
          method="post"
          class="grid grid-cols-1 gap-x-6 gap-y-6"
        >
          <div>
            <label class="label" for="name">Name</label>
            <input
              class="input placeholder-dark"
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
            />
          </div>
          <div>
            <label class="label" for="email">Email</label>
            <input
              class="input placeholder-dark"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label class="label" for="content">Content</label>
            <textarea
              class="input placeholder-dark"
              name="content"
              id="content"
              placeholder="Content..."
            />
          </div>
          <div class="flex gap-x-4">
            <button
              type="submit"
              class="btn bg-redish-500 hover:bg-redish-700 font-bold h-10 w-1/2"
            >
              Send
            </button>
            <button
              type="reset"
              class="btn border border-gray-200 hover:bg-white hover:bg-opacity-25 font-bold h-10 w-1/2"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";

import mydata from "@/data/data.json";

export default {
  name: "Contact",
  components: {
    CTitle,
  },
  data() {
    return {
      contact: mydata.contact,
    };
  },
  methods: {
    async copyIt(text) {
      await navigator.clipboard.writeText(text);
    },
  },
};
</script>

<style>
.contact-container {
  @apply p-2 flex gap-x-6 items-center cursor-pointer;
}

.contact-container:hover {
  @apply text-redish-500;
}

.label {
  @apply m-0;
}

.placeholder-dark::placeholder {
  @apply text-dark;
}

.input {
  @apply text-dark font-semibold py-2 px-4 w-full bg-white rounded-xl;
}

.input:hover {
  @apply ring;
}

.input:focus {
  @apply outline-none ring;
}
</style>

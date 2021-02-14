<template>
  <div
    id="contact"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <c-title>Contact Me</c-title>
    <div class="w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
      <div class="" data-aos="fade-right">
        <div class="grid grid-cols-1 justify-between h-full">
          <div class="contact-container">
            <v-icon name="envelope-open-text" class="w-8 h-8" />
            <span class="font-bold text-xl">chemsedd@outlook.fr</span>
          </div>
          <div class="contact-container">
            <v-icon name="brands/google" class="w-8 h-8" />
            <span class="font-bold text-xl">chemseddsen@gmail.com</span>
          </div>
          <div class="contact-container">
            <v-icon name="brands/apple" class="w-8 h-8" />
            <span class="font-bold text-xl">chemseddsen@icloud.com</span>
          </div>
          <div class="contact-container">
            <v-icon name="mobile-alt" class="w-8 h-8" />
            <span class="font-bold text-xl">(+213)699653291</span>
          </div>
          <div class="contact-container">
            <v-icon name="brands/instagram" class="w-8 h-8" />
            <span class="font-bold text-xl">@sun.art.tech</span>
          </div>
        </div>
      </div>
      <hr class="sm:hidden" />
      <div class="w-full" data-aos="fade-left">
        <form action="#" class="grid grid-cols-1 gap-x-6 gap-y-6">
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
              class="bg-redish-500 hover:bg-redish-700 font-bold h-10 w-1/2"
            >
              Send
            </button>
            <button
              type="reset"
              class="border border-gray-200 hover:bg-white hover:bg-opacity-25 font-bold h-10 w-1/2"
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

export default {
  name: "Contact",
  components: {
    CTitle,
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
  @apply text-dark font-semibold p-2 w-full bg-white;
}

.input:hover {
  @apply shadow-outline;
}

.input:focus {
  @apply outline-none shadow-outline;
}
</style>

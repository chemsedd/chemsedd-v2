<template>
  <div
    id="contact"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <div data-aos="fade-up" class="w-2/3">
      <div class="text-3xl sm:text-5xl font-bold">
        <span class="bg-redish-500 px-4">#</span>
        Contact Me
      </div>
    </div>
    <div class="w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
      <div class="">
        <div class="grid grid-cols-1 gap-y-8">
          <div
            data-aos="fade-right"
            class="p-2 flex gap-x-6 items-center hover:text-redish-500 cursor-pointer"
          >
            <v-icon name="envelope-open-text" class="w-8 h-8" />
            <span class="font-bold text-xl">chemsedd@outlook.fr</span>
          </div>
          <div
            data-aos="fade-left"
            class="p-2 flex gap-x-6 items-center hover:text-redish-500 cursor-pointer"
          >
            <v-icon name="brands/google" class="w-8 h-8" />
            <span class="font-bold text-xl">chemseddsen@gmail.com</span>
          </div>
          <div
            data-aos="fade-right"
            class="p-2 flex gap-x-6 items-center hover:text-redish-500 cursor-pointer"
          >
            <v-icon name="mobile-alt" class="w-8 h-8" />
            <span class="font-bold text-xl">(+213)699653291</span>
          </div>
        </div>
      </div>
      <hr class="sm:hidden" />
      <div class="w-full">
        <form
          action="#"
          class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
        >
          <div>
            <input
              class="input"
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
            />
          </div>
          <div>
            <input
              class="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              class="input"
              name="content"
              id="content"
              placeholder="Content..."
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.input {
  @apply text-dark border border-transparent shadow-md p-2 w-full;
}

.input:hover {
  @apply shadow-outline shadow-2xl;
}
</style>

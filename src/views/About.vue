<template>
  <div
    class="w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-x-24 gap-y-12 items-center text-white fira-code my-24"
  >
    <div data-aos="fade-right" class="sm:col-span-2 flex flex-col flex-1">
      <div class="text-3xl sm:text-5xl font-bold">
        <span class="bg-redish-500 px-4">#</span>
        About me
      </div>
      <div class="pt-4 leading-7">
        // I am <span class="font-semibold">Chems Eddine Senoussi</span>, a
        Computer Science graduate with Master's degree in
        <span class="bg-redish-500 px-2 font-semibold"
          >#Artificial_Intelligence</span
        >. I'm interested in Full Stack Web development in Django, since i use
        python for most of my work. I'm also a graphic designer, i worked as a
        freelancer for 3 years, i can do multiple types of design: UI, posters,
        business cards, banners, logos, roll-ups, social media posts, etc,.
        Programming: Desktop (Java, Python, C), Web (HTML, CSS, JavaScript,
        Jquery, Vue, Django) For graphic Design: Adobe Illustrator and Adobe
        Photoshop.
      </div>
    </div>
    <div data-aos="fade-left" class="flex justify-center items-center">
      <img
        class="w-11/12 h-auto"
        src="@/assets/me.jpg"
        alt="chems eddine senoussi"
      />
      <div
        id="white-square-2"
        class="absolute h-16 w-16 bg-gray-100
      hover:bg-gray-300 shadow-lg"
      ></div>
      <div
        id="red-square-2"
        class="absolute h-16 w-16 bg-redish-500 hover:bg-redish-700 shadow-lg"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

<style scoped>
#white-square-2 {
  right: -40px;
  top: -50px;
}
#red-square-2 {
  left: -40px;
  bottom: -50px;
}
</style>

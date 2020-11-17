<template>
  <div class="flex-1 grid grid-cols-12 py-40 h-full">
    <div class="col-start-3 col-span-5 flex flex-col flex-1 gap-y-3">
      <div class="text-4xl text-white fira-code font-extrabold">
        Mr.Chems Eddine Senoussi
        <div class="bg-redish-500 w-2/12 h-2"></div>
      </div>
      <h5 class="text-lg text-white fira-code font-thin">
        //I am a <span class="font-bold px-2">Web Developer</span> &
        <span class="font-bold px-2">Graphic Designer</span>
      </h5>
      <div class="grid grid-cols-8 gap-3 p-4 text-white">
        <button
          class="h-10 col-span-3 bg-redish-500 hover:bg-redish-700 font-bold"
        >
          Resume
        </button>
        <button
          class="h-10 col-span-3 border border-gray-200 hover:bg-redish-700 hover:bg-opacity-25 font-bold"
        >
          Contact
        </button>
      </div>
    </div>
    <div class="col-start-8 col-span-3 grid grid-cols-1">
      <div class="relative">
        <div
          id="white-square"
          class="absolute h-56 w-56 bg-gray-100 hover:bg-gray-300 shadow-lg"
        ></div>
        <div
          id="red-square"
          class="absolute h-56 w-56 bg-redish-500 hover:bg-redish-700 shadow-lg"
        ></div>
        <div id="six-dots-1" class="absolute grid grid-cols-3 gap-4">
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-redish-500 rounded-full w-4 h-4"></div>
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-redish-500 rounded-full w-4 h-4"></div>
        </div>
        <div id="six-dots-2" class="absolute grid grid-cols-3 gap-4">
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-redish-500 rounded-full w-4 h-4"></div>
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-white rounded-full w-4 h-4"></div>
          <div class="bg-redish-500 rounded-full w-4 h-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
#white-square {
  top: -100px;
  right: 0px;
}

#red-square {
  top: 50px;
  right: 90px;
}

#six-dots-1 {
  bottom: 20px;
  right: 70px;
}

#six-dots-2 {
  top: -10px;
  left: 40px;
}
</style>

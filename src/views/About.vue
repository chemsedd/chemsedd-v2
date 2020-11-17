<template>
  <div
    class="w-2/3 grid grid-cols-2 gap-8 items-center text-white fira-code h-screen"
  >
    <div class="flex flex-col flex-1">
      <div class="text-5xl font-bold">
        <span class="bg-redish-500 px-4">#</span>
        About me
      </div>
      <div class="pt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        ratione minima, quo necessitatibus totam maxime consectetur facere sint
        architecto optio incidunt modi! Odit adipisci rerum numquam, explicabo
        tenetur non reiciendis. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum, a blanditiis nihil earum doloremque
        consectetur accusamus ducimus corrupti iste natus delectus laboriosam
        totam tempore perspiciatis error, voluptatibus placeat modi facere?
      </div>
    </div>
    <div class="flex justify-center items-center realtive">
      <img
        class="w-4/5 h-auto"
        src="@/assets/me.jpg"
        alt="chems eddine senoussi"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

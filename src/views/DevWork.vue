<template>
  <div
    id="dev-work"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white my-10 sm:my-0"
  >
    <c-title>As a Developer</c-title>
    <p class="w-2/3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quod
      reiciendis molestiae quidem eaque facere. Veritatis, quo unde nihil
      similique molestiae dolores odit ea tenetur, obcaecati ratione nulla
      soluta quisquam?
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-4 gap-x-8 gap-y-8 w-2/3 justify-center text-center"
    >
      <work-card>
        <div class="w-full">
          <img
            src="../assets/work/logos/smart.svg"
            alt="smart green"
            class="w-full"
          />
        </div>
      </work-card>
      <work-card>
        <div class="w-full">
          <img
            src="../assets/work/logos/smart.svg"
            alt="smart green"
            class="w-full"
          />
        </div>
      </work-card>
      <work-card>
        <div class="w-full">
          <img
            src="../assets/work/logos/smart.svg"
            alt="smart green"
            class="w-full"
          />
        </div>
      </work-card>
      <work-card>
        <div class="w-full">
          <img
            src="../assets/work/logos/smart.svg"
            alt="smart green"
            class="w-full"
          />
        </div>
      </work-card>
    </div>
  </div>
</template>

<script>
import CTitle from "../components/Title.vue";
import WorkCard from "../components/WorkCard";

export default {
  name: "DevWork",
  components: {
    CTitle,
    WorkCard,
  },
};
</script>

<style></style>

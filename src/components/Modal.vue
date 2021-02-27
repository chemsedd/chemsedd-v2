<template v-slot="{ params }">
  <div class="w-8/12 h-auto bg-white rounded-3xl shadow-2xl flex items-center">
    <h1>{{ params.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style></style>

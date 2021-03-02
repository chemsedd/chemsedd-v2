<template>
  <div
    id="dev-work"
    class="min-h-screen w-full flex flex-col gap-y-16 items-center justify-center text-white"
  >
    <c-title>As a Developer</c-title>
    <!-- Modal -->
    <vue-final-modal v-model="showPic" name="appModal">
      <template v-slot="{ params }">
        <div class="flex items-center justify-center h-screen">
          <div
            class="w-10/12 md:w-6/12 bg-white rounded-3xl flex flex-col items-center justify-center shadow-2xl relative"
          >
            <button
              class="bg-redish-500 hover:bg-redish-700 inline-flex items-center px-1 py-1 h-8 rounded absolute-close"
            >
              <v-icon @click="showPic = false" name="times" class="w-6 h-6" />
            </button>
            <img
              v-if="params.pic"
              :src="require(`@/assets/work/web/${params.pic}.jpg`)"
              class="w-full rounded-t-3xl"
            />
            <div
              :class="[
                'flex flex-col gap-y-5 w-full px-4 pb-4 rounded-b-2xl',
                params.bg == 'white' ? 'bg-dark' : 'bg-' + params.bg,
              ]"
            >
              <h1 class="font-bold text-4xl text-white">{{ params.title }}</h1>
              <p class="text-white font-medium">{{ params.desc }}</p>
            </div>
          </div>
        </div>
      </template>
    </vue-final-modal>
    <!-- Screenshots grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-2/3 justify-center text-center"
    >
      <button
        v-for="app in my_apps"
        :key="app.pic"
        @click="
          $vfm.show('appModal', {
            title: app.title,
            pic: app.pic,
            bg: app.bg,
            desc: app.desc,
          })
        "
        class="flex items-center flex-1 justify-center hover:ring rounded-xl"
        :class="['p-5 rounded-xl shadow-xl', 'bg-' + app.bg, 'bg-opacity-75']"
      >
        <!-- Apps galery picture -->
        <img
          class="w-full"
          :src="require(`@/assets/work/web/${app.logo}.svg`)"
          :alt="app.pic"
        />
      </button>
    </div>
  </div>
</template>

<script>
import CTitle from "@/components/Title.vue";
import Modal from "@/components/Modal.vue";
// Data
import mydata from "@/data/data.json";

console.log(mydata);

export default {
  name: "DevWork",
  components: {
    CTitle,
    Modal,
  },
  data() {
    return {
      showPic: false,
      my_apps: mydata.apps,
    };
  },
  methods: {
    getSRC(name) {
      return require(`@/assets/work/web/${name}.jpg`);
    },
  },
};
</script>

<style></style>

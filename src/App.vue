<template>
  <div id="app">
    <!-- <div class="grid grid-cols-1 md:grid-cols-12">
      <nav-bar />
    </div> -->
    <main class="flex flex-col justify-center items-center">
      <Home class="section" />
      <About class="section" />
      <Fields class="section" />
      <Skills class="section" />
      <DevWork class="section" />
      <DesignWork class="section" />
      <Contact class="section" />
    </main>
    <Footer class="section" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Fields from "./views/Fields.vue";
import Skills from "./views/Skills.vue";
import DevWork from "./views/DevWork.vue";
import DesignWork from "./views/DesignWork.vue";
import Contact from "./views/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Fields,
    Skills,
    DevWork,
    DesignWork,
    Contact,
    Footer,
  },
  metaInfo: {
    title: "Chems Eddine Senoussi 💻 Personal Website",
  },
};
</script>

<style>
html {
  scroll-snap-type: y mandatory;
}

body {
  @apply bg-gray-900;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.01) 2px,
      transparent 2px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.01) 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.fira-code {
  font-family: "Fira Code";
}
.section {
  scroll-snap-align: start;
}
</style>

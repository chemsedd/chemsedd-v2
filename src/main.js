import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Icons
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
// Animation
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import AOS from "aos";
// Caroussel
// import VueCarousel from "vue-carousel";

import "aos/dist/aos.css";
import "./assets/css/tailwind.css";

Vue.component("v-icon", Icon);
// Vue.use(VueCarousel);
Vue.component("kinesis-container", KinesisContainer);
Vue.component("kinesis-element", KinesisElement);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      duration: 1500,
    });
  },
  router,
  render: (h) => h(App),
}).$mount("#app");

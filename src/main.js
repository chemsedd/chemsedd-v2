import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
// Icons
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
// Animation
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import AOS from "aos";

import "aos/dist/aos.css";
import "./assets/css/tailwind.css";

// Vue modal
import VueFinalModal from "vue-final-modal";

Vue.use(VueMeta);
Vue.use(VueFinalModal());
Vue.component("v-icon", Icon);
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

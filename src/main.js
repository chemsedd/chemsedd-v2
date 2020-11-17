import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import router from "./router";

import "aos/dist/aos.css";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");

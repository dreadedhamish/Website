import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Buefy from "buefy";

import LoadScript from "vue-plugin-load-script";
import "@lottiefiles/lottie-player";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";

Vue.use(Buefy);
Vue.use(LoadScript);
Vue.use(ScrollFixedHeader);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
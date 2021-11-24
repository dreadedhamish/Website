import Vue from "vue";
import Router from "vue-router";

import about from "./pages/about.vue";
import faq from "./pages/faq.vue";
import index from "./pages/index.vue";
import roadmap from "./pages/roadmap.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },

    {
      path: "/roadmap",
      name: "roadmap",
      component: roadmap,
    },
    {
      path: "/faq",
      name: "faq",
      component: faq,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
  ],
});

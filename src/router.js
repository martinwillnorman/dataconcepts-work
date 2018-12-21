import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Insights from "@/pages/Insights.vue";
import Services from "@/pages/Services.vue";
import BigData from "@/pages/BigData.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/insights",
      name: "Insights",
      component: Insights,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/services/big-data",
      name: "BigData",
      component: BigData
    }
  ]
});

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     NProgress.start();
//   }
//   next();
// });

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   NProgress.done();
// });

export default router;

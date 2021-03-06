import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import VueParallaxJs from "vue-parallax-js";
import VueParticles from "vue-particles";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/vendors/scrolloverflow";
import moment from "moment-timezone";
import VeeValidate from "vee-validate";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VS2 from 'vue-script2'

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);
Vue.use(VeeValidate);
Vue.use(moment);
Vue.use(VueFullPage);
Vue.use(VueParticles);
Vue.use(VueParallaxJs);
Vue.use(VS2)

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true
    });
  },
  router,
  render: h => h(App)
}).$mount("#app");

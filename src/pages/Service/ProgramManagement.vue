<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Program Management"
        kicker="Scaleable & flexible methodologies for an innovation-ready & delivery-ready PMO."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Imagine a process which converts unstructured, unreadable pieces of information into something that is extremely valuable for your organization? information that gives you insights about your business, your products, customers and their preferences. Now imagine getting those insights in real time! We are talking about a process that gives you instant information about an active transaction. Such information is always valuable, isn't it? Companies who often deal with Big Data have massive databases and millions or billions of files they are processing. Data streaming, as the name implies, is a stream or flow of raw data that is captured from multiple sources and sent for processing continuously. Analyzing and processing such data streams makes an organization more efficient and opens up new opportunities."
      />

      <Services subtitle="services">
        <SubService data-aos="fade-up" data-aos-duration="600" title="d" content="d"/>
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="d"
          content="d"
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="d"
          content="d"
        />
      </Services>

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "ProgramManagement",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Promise,
    Services,
    SubService,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/service-105.jpg)

</style>

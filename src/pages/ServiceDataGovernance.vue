<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Data Governance"
        kicker="Define a sound data governance program to manage the availability, usability, and security of your data."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Data Governance"
            content="Data governance is the ability of an organization to manage its information knowledge and to answer questions such as What do we know about our information? Where did this data come from?, and Does this data adhere to company policies and rules? Data governance practices provide a holistic approach to managing, improving and leveraging information to help you gain insight and build confidence in business decisions and operations. Our data governance solutions let you locate and retrieve information about data objects, their meaning, physical location, characteristics, and usage. This helps improve IT productivity while meeting regulatory requirements."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Data Governance Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Flexible Data Governance Strategy"
                  content="With multiple entry points, adopt a data governance strategy to suit your organizational objectives while shaping business information in unique ways as per your needs."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Archive and Streamline Applications"
                  content="By consolidating applications, retiring outdated databases and modernizing existing systems, focus on important projects, thus reducing risk and enhancing application quality."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Confidence in Big Data Analytics"
                  content="Obtain clean, consolidated, consistent and current information. Use this information to drive big data projects and applications while aligning with governance objectives."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Privacy and Protection"
                  content="Identify data with meaning, assess data value and risk, secure PII, PCI, and PHI, and get ready for GDPR."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkTogether/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Hero from "../components/Hero.vue";
import ServicePromise from "../components/ServicePromise.vue";
import Spacer from "../components/Spacer.vue";
import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import WorkTogether from "../components/WorkTogether.vue";

export default {
  name: "ServiceDataGovernance",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Hero,
    ServicePromise,
    SubService,
    ServiceAsideRight,
    ServiceAsideLeft,
    ServiceLeft,
    ServiceRight,
    WorkTogether
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/data-governance.jpg)

</style>

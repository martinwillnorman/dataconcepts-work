<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Data Warehouse"
        kicker="Create a key infrastructure for data reporting and analysis."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Data Warehouse"
            content="Data warehousing is the process of taking data from legacy and transactional database systems and transforming it into organized information in a user-friendly format to encourage data analysis and support fact-based business decision making."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Data Warehouse Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService title="d" content="d"/>
                <SubService title="d" content="d"/>
                <SubService title="d" content="d"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <ServiceLeft
            title="What is a Data Warehouse?"
            content="A data warehouse is a system that extracts, cleans, conforms, and delivers source data into a dimensional data store and then supports and implements querying and analysis for the purpose of decision making."
          />
          <ServiceRight
            title="Data Warehouse Architecture and Design Services"
            content="Opting for Data Concepts for your data warehouse design needs implies choosing a business-driven data warehouse for your company. Our tools save you time and money and provide your staff with an accessible, easy-to-use data analysis platform. "
          />
          <ServiceLeft
            title="Data Warehouse Implementation"
            content="Our highly skilled network of data warehouse consultants are experts in data warehouse architecture. They enrich your environment with world-class data warehouse knowledge that enables staff members to stop wasting huge amounts of time manually gathering data whenever a decision has to be made. Our goal is to reduce or eliminate expensive, error prone processes by standing-up automated, systematic data collection, reporting and analysis."
          ></ServiceLeft>
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
  name: "ServiceDataWarehouse",
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
  background-image: url(../assets/background/services-large/data-warehouse.jpg)

</style>

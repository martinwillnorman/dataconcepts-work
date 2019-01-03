<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Master Data Management"
        kicker="Create and define the critical point of reference for all your data."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="MDM"
            content="Implementing a master data management strategy is key to improving your data. Proper master data management architecture is crucial for businesses that face data quality and consistency issues. A solid data management strategy will ensure that business-critical data is error-free and streamlined."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">MDM Services</h1>
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
            title="What is MDM?"
            content="Master Data Management (MDM) refers to the process of creating and managing data that an organization must have as a single master copy, called the master data. Poor Master Data Management Can Lead to Major Quality Issues A range of applications within a business uses a company’s master data. Failing to manage data can have a detrimental chain-reaction effect on a business’s general operations. An error in customer master data, for example, could lead to bills or deliveries being sent to the wrong organization, impacting your business reputation and negatively effecting your bottom-line."
          />
          <ServiceRight
            title="How to Implement MDM?"
            content="Our precise master data management strategy and roadmap ensures that data is consistent, complete and contextual. Master data management benefits include improved accessibility of accurate business data for systems and stakeholders across the enterprise. Holistic Approach to Master Data Management We take a holistic view of master data management. It is a framework of people, processes and technology that help to manage the information that is deeply embedded in our businesses. "
          />
          <ServiceLeft
            title="How to Get Started?"
            content="Whether your business requires a single master data management system to master your customers or products, or a complete enterprise MDM solution using SAP, Oracle we will craft a solution to address the specific needs of your organization."
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
  name: "ServiceMasterDataManagement",
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
  background-image: url(../assets/background/services-large/mdm.jpg)

</style>

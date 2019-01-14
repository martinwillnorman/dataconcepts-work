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

      <Promise
        subtitle="the promise"
        content="Implementing a master data management strategy is key to improving your data. Proper master data management architecture is crucial for businesses that face data quality and consistency issues. A solid data management strategy will ensure that business-critical data is error-free and streamlined."
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

      <Definition subtitle="definition">
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          title="What is MDM?"
          content="Master Data Management (MDM) refers to the process of creating and managing data that an organization must have as a single master copy, called the master data. Poor Master Data Management Can Lead to Major Quality Issues A range of applications within a business uses a company’s master data. Failing to manage data can have a detrimental chain-reaction effect on a business’s general operations. An error in customer master data, for example, could lead to bills or deliveries being sent to the wrong organization, impacting your business reputation and negatively effecting your bottom-line."
        />
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="How to Implement MDM?"
          content="Our precise master data management strategy and roadmap ensures that data is consistent, complete and contextual. Master data management benefits include improved accessibility of accurate business data for systems and stakeholders across the enterprise. Holistic Approach to Master Data Management We take a holistic view of master data management. It is a framework of people, processes and technology that help to manage the information that is deeply embedded in our businesses. "
        ></SubDefinition>
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="How to Get Started?"
          content="Whether your business requires a single master data management system to master your customers or products, or a complete enterprise MDM solution using SAP, Oracle we will craft a solution to address the specific needs of your organization."
        />
      </Definition>

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
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "MasterDataManagement",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/mdm.jpg)

</style>

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

      <Promise
        subtitle="the promise"
        content="Data warehousing is the process of taking data from legacy and transactional database systems and transforming it into organized information in a user-friendly format to encourage data analysis and support fact-based business decision making."
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
          title="What is a Data Warehouse?"
          content="A data warehouse is a system that extracts, cleans, conforms, and delivers source data into a dimensional data store and then supports and implements querying and analysis for the purpose of decision making."
        />
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Data Warehouse Architecture and Design Services"
          content="Opting for Data Concepts for your data warehouse design needs implies choosing a business-driven data warehouse for your company. Our tools save you time and money and provide your staff with an accessible, easy-to-use data analysis platform. "
        >
          <router-link class="reg-link" to="/insights">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Data Warehouse Implementation"
          content="Our highly skilled network of data warehouse consultants are experts in data warehouse architecture. They enrich your environment with world-class data warehouse knowledge that enables staff members to stop wasting huge amounts of time manually gathering data whenever a decision has to be made. Our goal is to reduce or eliminate expensive, error prone processes by standing-up automated, systematic data collection, reporting and analysis."
        />
      </Definition>

      <InsightHighlight
        title="Business Intelligence & Data Warehousing"
        imagesource="./insight-images/warehouse.jpg"
        link="/insights/bi-data-warehousing"
      />

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Hero from "../components/Hero.vue";
import Promise from "../components/service/Promise.vue";
import Services from "../components/service/Services.vue";
import SubService from "../components/service/SubService.vue";
import Definition from "../components/service/Definition.vue";
import SubDefinition from "../components/service/SubDefinition.vue";
import InsightHighlight from "../components/service/InsightHighlight.vue";
import Footer from "../components/service/Footer.vue";

export default {
  name: "DataWarehouse",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    InsightHighlight,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/data-warehouse.jpg)

</style>

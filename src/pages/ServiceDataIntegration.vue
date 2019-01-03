<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Data Integration"
        kicker="Combine data from disparate sources into meaningful and valuable information."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Data Integration"
            content="Data integration is the combination of technical and business processes used to combine data from disparate sources into meaningful and valuable information. A complete data integration solution delivers trusted data from various sources. Data integration solutions offer enterprises a scalable data integration platform. The platform allows you to transform data in any style and deliver it to any system, supporting faster time to value and reduced IT risk. The integrated platform delivers a wide range of data quality capabilities from data profiling, standardization, matching and enrichment to active data-quality monitoring."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Data Integration Services</h1>
            </div>
          </div>
          <SubJourney
            title="ETL (Extract, Transform, & Load)"
            content="ETL is a critical part of data warehousing. During this process, data is converted to a usable form, cleaned, and readied for analysis. Every business needs customized ETL that combines domain and technology expertise to precisely meet their needs."
          >
            <ul>
              <li>Extract data from multiple sources, including the Internet of Things.</li>
              <li>Transform structured and unstructured data into useable forms.</li>
              <li>Clean data by applying advanced validating rules.</li>
              <li>Load transformed data into a target database.</li>
              <li>Choose the best data extraction method for your system.</li>
              <li>Select data formats and structures that align with your goals.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="MDM (Master Data Management"
            content="Provide a single point of reference for data within a company. Master Data Management (MDM) comprises the processes, governance, policies, standards, and tools that define and manage critical data."
          >
            <ul>
              <li>Link all critical data to one master file.</li>
              <li>Facilitate computing in multiple system architectures, platforms, and applications.</li>
              <li>Create organization-wide data governance policies and procedures.</li>
              <li>Load transformed data into a target database.</li>
              <li>Enhance information quality by complying with company data practices.</li>
              <li>Ensure cost-effective processes and timely project delivery.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Data Quality"
            content="Each business must set its own standard for data quality. Before data can drive decisions, it must be complete, consistent, relevant, and accurate. Better data quality means more exact analytics and more reliable decisions."
          >
            <ul>
              <li>Define data quality rules.</li>
              <li>Set up efficient data quality procedures.</li>
              <li>Continuously monitor, measure, and improve data quality.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Data Harmonization"
            content="Data harmonization makes data compatible and comparable, even when it comes from a wide range of unrelated sources. Data that has been harmonized is easier to process and easier to use as a driver of actionable evaluations."
          >
            <ul>
              <li>Capture the requirements of relevant business processes.</li>
              <li>Identify comparable data elements and attributes.</li>
              <li>Map core data elements to the data model.</li>
              <li>Minimize data differences and inconsistencies.</li>
              <li>Improve the data quality and compatibility.</li>
              <li>Make decisions from a single high-quality component.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="CDM (Common Data Model)"
            content="Organize data into a standard structure and get a single source of truth for your entire company. Data contained within disparate databases is transformed into a common format and then systematically analyzed."
          >
            <ul>
              <li>Define the structure of a robust CDM.</li>
              <li>Automate the CDM data ingestion process.</li>
              <li>Set up systematic analyses on the most current data.</li>
              <li>Ensure interoperability between platform components.</li>
              <li>Troubleshoot existing CDM challenges.</li>
            </ul>
          </SubJourney>
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
import SubJourney from "../components/SubJourney.vue";

export default {
  name: "ServiceDataIntegration",
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
    WorkTogether,
    SubJourney
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/data-integration.jpg)

</style>

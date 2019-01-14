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

      <Promise
        title="Data Integration"
        content="Data integration is the combination of technical and business processes used to combine data from disparate sources into meaningful and valuable information. A complete data integration solution delivers trusted data from various sources. Data integration solutions offer enterprises a scalable data integration platform. The platform allows you to transform data in any style and deliver it to any system, supporting faster time to value and reduced IT risk. The integrated platform delivers a wide range of data quality capabilities from data profiling, standardization, matching and enrichment to active data-quality monitoring."
      />

      <Definition subtitle="services">
        <SubDefinition
          title="ETL (Extract, Transform, & Load)"
          content="ETL is a critical part of data warehousing. During this process, data is converted to a usable form, cleaned, and readied for analysis. Every business needs customized ETL that combines domain and technology expertise to precisely meet their needs."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Extract data from multiple sources, including the Internet of Things.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Transform structured and unstructured data into useable forms.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Clean data by applying advanced validating rules.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Load transformed data into a target database.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Choose the best data extraction method for your system.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Select data formats and structures that align with your goals.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="MDM (Master Data Management"
          content="Provide a single point of reference for data within a company. Master Data Management (MDM) comprises the processes, governance, policies, standards, and tools that define and manage critical data."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Link all critical data to one master file.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Facilitate computing in multiple system architectures, platforms, and applications.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Create organization-wide data governance policies and procedures.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Load transformed data into a target database.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Enhance information quality by complying with company data practices.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Ensure cost-effective processes and timely project delivery.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Data Quality"
          content="Each business must set its own standard for data quality. Before data can drive decisions, it must be complete, consistent, relevant, and accurate. Better data quality means more exact analytics and more reliable decisions."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Define data quality rules.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Set up efficient data quality procedures.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Continuously monitor, measure, and improve data quality.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Data Harmonization"
          content="Data harmonization makes data compatible and comparable, even when it comes from a wide range of unrelated sources. Data that has been harmonized is easier to process and easier to use as a driver of actionable evaluations."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Capture the requirements of relevant business processes.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Identify comparable data elements and attributes.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Map core data elements to the data model.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Minimize data differences and inconsistencies.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Improve the data quality and compatibility.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Make decisions from a single high-quality component.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="CDM (Common Data Model)"
          content="Organize data into a standard structure and get a single source of truth for your entire company. Data contained within disparate databases is transformed into a common format and then systematically analyzed."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Define the structure of a robust CDM.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Automate the CDM data ingestion process.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Set up systematic analyses on the most current data.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Ensure interoperability between platform components.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Troubleshoot existing CDM challenges.</li>
          </ul>
        </SubDefinition>
      </Definition>

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Hero from "../components/Hero.vue";
import Promise from "../components/service/Promise.vue";
import Definition from "../components/service/Definition.vue";
import SubDefinition from "../components/service/SubDefinition.vue";
import Footer from "../components/service/Footer.vue";

export default {
  name: "ServiceBigData",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Promise,
    Definition,
    SubDefinition,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/data-integration.jpg)

</style>

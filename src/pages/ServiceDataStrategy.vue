<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Data Strategy"
        kicker="Streamline and create a conscise data implementation and plan."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Data Strategy"
            content="Organizations often spend multiple years in defining their enterprise information architecture, and then develop a large multi-year program to realize it. We leverage our expertise in architecting large-scale complex BI/DW (Business Intelligence/Data Warehousing) applications and provide EIM (Enterprise Information Management) implementation services."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Data Strategy Services</h1>
            </div>
          </div>
          <SubJourney
            title="Enterprise Data Architecture"
            content="Enterprise Data Architecture is typically multi-layered and spans from heterogeneous sources of data to the information delivery layer. Varied levels of expertise are involved in architecting the different layers. Data Warehouses can be centralized, federated or even logical."
          >
            <ul>
              <li>Recommend and design various infrastructure layers of a Data Warehouse.</li>
              <li>Define Massively Parallel Processing (MPP) architectures.</li>
              <li>Design solutions using data warehouse appliances and build them as logical warehouses where Big Data is used.</li>
              <li>Consolidate disparate warehouses into a single unified warehouse.</li>
              <li>Decommission the old platform, and also perform data rationalization activities.</li>
            </ul>
          </SubJourney>
          <SubJourney title="Migration & Integration" content>
            <ul>
              <li>Integrate organizational data from disparate sources and achieve a single version of truth.</li>
              <li>Data may be retained as granular or aggregated, as required by the business.</li>
              <li>With streaming data, we capture and use that data in real-time.</li>
              <li>Implement effective change data capture mechanisms for large data volumes generated.</li>
              <li>Perform data integration application development to handle complexities.</li>
              <li>Migrate data from their legacy databases or other forms of storage into the new system.</li>
              <li>Managing migration planning, execution and post-migration activities.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Data Quality & Governance"
            content="The quality of data depends on design and production processes involved in generating the data. Our Data Quality services help organizations derive reliable, usable and dependable data."
          >
            <ul>
              <li>Perform data profiling, standardization and cleansing.</li>
              <li>Implementing a data quality program.</li>
              <li>Create a data governance program.</li>
              <li>Development, execution and supervision of architecture.</li>
              <li>Propose policies, practices and procedures to manage the entire data lifecycle.</li>
              <li>Collect, prepare, use, maintain and retire data with robust controls and audit trails.</li>
              <li>Leverage proven processes for continuous improvement.</li>
              <li>Reconcile disparate views, ensuring a single version of truth.</li>
              <li>Manage data security.</li>
              <li>Perform data-masking services.</li>
            </ul>
          </SubJourney>
          <SubJourney title="Master Data Management" content>
            <ul>
              <li>Offer MDM strategy and implementation services.</li>
              <li>Enable meaningful data analysis across the enterprise.</li>
              <li>Consolidate, harmonize and centralize.</li>
              <li>Execute MDM implementations through an appropriate style as strategized with business.</li>
              <li>Reference data is shared across transactional and analytical applications.</li>
              <li>Manage temporal referential integrity, cross-domain mapping and hierarchy management.</li>
              <li>Data Governance includes versioning mechanisms for multiple versions of reference data.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Metadata Management"
            content="Information could be meaningless if it is not documented properly."
          >
            <ul>
              <li>Set up an effective metadata repository.</li>
              <li>Cover technical, business and operational metadata.</li>
              <li>Data Warehouse/Data Mart Maintenance.</li>
              <li>Provide model maintenance services at both, logical and physical model levels.</li>
              <li>Offer various DBA services and conduct regular health checks.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Big Data Analytics"
            content="In addition to the huge amount of internal data that organizations churn out every day, they have also started looking at leveraging external data (that could be unstructured, semi-structured or with an unknown structure)."
          >
            <ul>
              <li>Explore and analyze data.</li>
              <li>Provide analysis and direction to run the business efficiently.</li>
              <li>Retire when the data is no longer required.</li>
            </ul>
          </SubJourney>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Related</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper related-wrapper">
                <RelatedBox
                  link="/insights/quick-peek"
                  category="Insight"
                  title="Our World Helping Clients with Data Strategy"
                ></RelatedBox>
                <RelatedBox link="/services/big-data" category="Service" title="Big Data Analytics"></RelatedBox>
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
import SubJourney from "../components/SubJourney.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "ServiceDataStrategy",
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
    SubJourney,
    RelatedBox
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/data-strategy.jpg)

</style>

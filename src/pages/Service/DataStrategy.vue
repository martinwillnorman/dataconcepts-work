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

      <Promise
        subtitle="the promise"
        content="Organizations often spend multiple years in defining their enterprise information architecture, and then develop a large multi-year program to realize it. We leverage our expertise in architecting large-scale complex BI/DW (Business Intelligence/Data Warehousing) applications and provide EIM (Enterprise Information Management) implementation services."
      />

      <Definition subtitle="services">
        <SubDefinition
          title="Enterprise Data Architecture"
          content="Enterprise Data Architecture is typically multi-layered and spans from heterogeneous sources of data to the information delivery layer. Varied levels of expertise are involved in architecting the different layers. Data Warehouses can be centralized, federated or even logical."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Recommend and design various infrastructure layers of a Data Warehouse.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Define Massively Parallel Processing (MPP) architectures.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Design solutions using data warehouse appliances and build them as logical warehouses where Big Data is used.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Consolidate disparate warehouses into a single unified warehouse.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Decommission the old platform, and also perform data rationalization activities.</li>
          </ul>
        </SubDefinition>
        <SubDefinition title="Migration & Integration" content>
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Integrate organizational data from disparate sources and achieve a single version of truth.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Data may be retained as granular or aggregated, as required by the business.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >With streaming data, we capture and use that data in real-time.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Implement effective change data capture mechanisms for large data volumes generated.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Perform data integration application development to handle complexities.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Migrate data from their legacy databases or other forms of storage into the new system.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Managing migration planning, execution and post-migration activities.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Data Quality & Governance"
          content="The quality of data depends on design and production processes involved in generating the data. Our Data Quality services help organizations derive reliable, usable and dependable data."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Perform data profiling, standardization and cleansing.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Implementing a data quality program.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Create a data governance program.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Development, execution and supervision of architecture.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Propose policies, practices and procedures to manage the entire data lifecycle.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Collect, prepare, use, maintain and retire data with robust controls and audit trails.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Leverage proven processes for continuous improvement.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Reconcile disparate views, ensuring a single version of truth.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Manage data security.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Perform data-masking services.</li>
          </ul>
        </SubDefinition>
        <SubDefinition title="Master Data Management" content>
          <ul class="example-work-list">
            <li class="example-work-list-item">Offer MDM strategy and implementation services.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Enable meaningful data analysis across the enterprise.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Consolidate, harmonize and centralize.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Execute MDM implementations through an appropriate style as strategized with business.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Reference data is shared across transactional and analytical applications.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Manage temporal referential integrity, cross-domain mapping and hierarchy management.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Data Governance includes versioning mechanisms for multiple versions of reference data.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Metadata Management"
          content="Information could be meaningless if it is not documented properly."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Set up an effective metadata repository.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Cover technical, business and operational metadata.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Data Warehouse/Data Mart Maintenance.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Provide model maintenance services at both, logical and physical model levels.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Offer various DBA services and conduct regular health checks.</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Big Data Analytics"
          content="In addition to the huge amount of internal data that organizations churn out every day, they have also started looking at leveraging external data (that could be unstructured, semi-structured or with an unknown structure)."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Explore and analyze data.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li
              class="example-work-list-item"
            >Provide analysis and direction to run the business efficiently.</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Retire when the data is no longer required.</li>
          </ul>
        </SubDefinition>
      </Definition>

      <InsightHighlight
        title="A Quick Peek in to  Data Strategy"
        imagesource="../insight-images/dance-2.jpg"
        link="/insights/quick-peek"
      />

      <Related>
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          title="A Quick Peek in to  Data Strategy"
          summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
          category="Data Strategy"
          link="/insights/quick-peek"
          imagesource="../insight-images/dance-2.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          link="/insights/information-architecture"
          category="Data Strategy"
          title="Information Architecture Strategy"
          summary="We identify and analyze our clients’ business requirements, recommend solutions and assist them in implementing these solutions successfully."
          imagesource="../insight-images/building.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          link="/insights/data-strategy-right"
          category="Data Strategy"
          title="Data Strategy is About Doing the Right Things"
          summary="Let’s discuss the process to guide your organization to lay out your organization-specific Data Strategy."
          imagesource="../insight-images/balancing.jpg"
        />
      </Related>

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import InsightCard from "../../components/insight/InsightCard.vue";
import Promise from "../../components/service/Promise.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "DataStrategy",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Promise,
    Definition,
    SubDefinition,
    InsightHighlight,
    Related,
    InsightCard,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/data-strategy.jpg)

</style>

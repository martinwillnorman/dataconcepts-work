<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="BI | Data Warehouse"
        title="Business Intelligence & Data Warehousing"
        summary="We leverage our expertise in architecting large-scale complex BI/DW (Business Intelligence/Data Warehousing) applications and provide EIM (Enterprise Information Management) implementation services."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>

          <InsightSubSection
            title="ETL/BI Application Maintenance"
            content="We leverage data warehouse appliance implementation to provide high-speed analytics and excellent query throughput. We perform ETL/BI platform conversion to newer platforms by redefining the architecture if required, converting applications and enabling migration to production. Our methodology ensures that business is aligned to this change and begins to adopt the newer technology with ease."
          ></InsightSubSection>
          <InsightSubSection
            content="We offer data testing services, which ensure that there is no data discrepancy between the source of data and data warehouse/data mart. Our OLAP (Online Analytical Processing) testing ensures that OLAP cubes accurately reflect data from their source and allow slice and dice across all required dimensions."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="We also perform ETL/BI application maintenance when source data structure changes or when the data warehouse data model changes. We understand and consider changes in ETL/BI scheduling that occur due to changes in data availability timelines and frequency. We also manage user security changes."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Agile BI"
            content="Organizations may adopt different methodologies for developing their enterprise information management infrastructure. However, there is a tendency to expect quick ROI. We offer services around Agile BI solutions by considering smaller subsets of requirements and defining suitable sprints for developing different layers of the architecture."
          ></InsightSubSection>
          <InsightSubSection
            title="ETL/BI Platform Upgrades"
            content="Early adopters of BI, who have been managing with legacy technologies, are now looking at upgrading, as ETL and BI tool vendors offer newer versions with better features. In a few instances, the ETL and BI versions are outdated and no more supported by product vendors. We offer services on upgrading the existing ETL and BI platforms with newer versions by redefining the architecture if required, upgrading the applications and facilitating migration to production. With zero business disruption, we ensure that various environments like development, test and production movement of the upgraded application are carried out smoothly."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="With high adoption of BI over the years, we understand that different departments in an organization might have developed their own BI applications, leaving them with a lot of redundant BI applications. The greater challenge is that these departments refer to different sources of data and present the same information differently. There are instances where different technologies are used. We assist organizations in BI consolidation and rationalization on a single technology. We also help in decommissioning the old BI application and hold the older reports in an archive environment that can be leveraged if necessary."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Create a customer narrative by using the power of Visualization"
            content="By combining data from multiple sources and enabling analyses from various angles, custom visualizations craft a compelling narrative to help digital businesses find deeper insights. We can help you integrate a variety of real-time data sources into a dynamic custom visualization which can boost agility to more quickly pinpoint and resolve issues."
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Spacer from "../../components/Spacer.vue";
import InsightHeader from "../../components/InsightHeader.vue";
import InsightSubSection from "../../components/InsightSubSection.vue";

export default {
  name: "BIDataWarehouse",
  components: {
    NavBar,
    ModalMenu,
    Spacer,
    InsightHeader,
    InsightSubSection
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.insight-image
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(220deg) saturate(6)
  background-image: url(../../assets/background/insights/warehouse.jpg)

</style>

<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block">
        <div class="content-wrapper">
          <div class="nav-block grey"></div>
        </div>
      </section>
      <InsightHeader
        category="Big Data"
        title="Extracting Actionable Insights from Data"
        summary="Data mining is the extraction of actionable insights from data."
      />
      <InsightSubHeader
        content="Leading organizations use data mining techniques target profitable customers and likely prospects, reduce consumer fraud, identify loyal customers, improve customer service, and increase customer retention. Data mining often involves predictive analytics, using sophisticated tools to present large volumes of data within statistical and visual models such as decision trees and three-dimensional graphics."
      ></InsightSubHeader>
      <section class="content-block slant-4 padded-top">
        <div class="container">
          <InsightSubSection
            title="Assess model performance and business impacts"
            content="Data mining is best executed as part of an integrated business intelligence (BI) effort. An organization’s BI strategy will identify questions appropriate for data mining, data marts, data warehouses, or analytical applications. Data Concepts experts can conduct a data mining Proof-of-Value early in the BI life cycle to help identify which data (and combinations of data) will provide new insights and have predictive value."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="Data mining is best executed as part of an integrated business intelligence (BI) effort. An organization’s BI strategy will identify questions appropriate for data mining, data marts, data warehouses, or analytical applications. Data Concepts experts can conduct a data mining Proof-of-Value early in the BI life cycle to help identify which data (and combinations of data) will provide new insights and have predictive value."
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import InsightHeader from "../components/InsightHeader.vue";
import InsightSubHeader from "../components/InsightSubHeader.vue";
import InsightSubSection from "../components/InsightSubSection.vue";

export default {
  name: "InsightDataMining",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    InsightHeader,
    InsightSubHeader,
    InsightSubSection
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"


</style>

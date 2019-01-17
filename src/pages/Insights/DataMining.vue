<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Big Data"
        title="Extracting Actionable Insights from Data"
        summary="Data mining is the extraction of actionable insights from data."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Data mining uses"
            content="Leading organizations use data mining techniques target profitable customers and likely prospects, reduce consumer fraud, identify loyal customers, improve customer service, and increase customer retention. Data mining often involves predictive analytics, using sophisticated tools to present large volumes of data within statistical and visual models such as decision trees and three-dimensional graphics."
          ></InsightSubSection>
          <InsightSubSection
            title="Assess model performance and business impacts"
            content="Data mining is best executed as part of an integrated business intelligence (BI) effort. An organization’s BI strategy will identify questions appropriate for data mining, data marts, data warehouses, or analytical applications. Data Concepts experts can conduct a data mining Proof-of-Value early in the BI life cycle to help identify which data (and combinations of data) will provide new insights and have predictive value."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="A Proof-of-Value helps the organization construct data warehouses or data marts that will support future data mining efforts. Such initiatives can reduce future costs and project life-cycles by as much as 75 percent by dramatically reducing the time necessary for ongoing data collection and preparation."
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
  name: "DataMining",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(290deg) saturate(6)
  background-image: url(../../assets/background/insights/entry.jpg)
</style>

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
        category="Business Intelligence"
        title="Are You Making the Most of Your Business Data?"
        summary="Power BI - Business intelligence like never before."
      />
      <InsightSubHeader
        content="Microsoft Power BI’s flexibility means you can scale and adapt its available tools to whatever your company needs. This way you’ll be sure that you’re only recording and analyzing the most important, relevant data you need to streamline management, make smart predictions, and make confident decisions—in minutes rather than hours, days, or weeks."
      ></InsightSubHeader>
      <section class="content-block slant-4 padded-top">
        <div class="container">
          <InsightSubSection
            title="What is Power BI?"
            content="Power BI is a suite of business analytics tools that deliver insights throughout your organization. Connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis."
          ></InsightSubSection>
          <InsightSubSection
            content="Produce beautiful reports, then publish them for your organization to consume on the web and across mobile devices. Everyone can create personalized dashboards with a unique, 360-degree view of their business. And scale across the enterprise, with governance and security built-in. Performing numerous permutations and combinations on spreadsheets is a time consuming task. With visualizations, analysis becomes automatic."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="When data sources are connected in the right way, all you need to do is ask questions. Our visualization services combined with Power BI’s natural language processing, makes it easy to seek insightful information related to every aspect of your business. Data Concepts brings expertise and a proven track record in Power BI implementation consulting and development – including reporting from data marts and data warehouses, as well as integrations with disparate data sources. We can take you from data to game changing insights by using data from any source to provide a unified view of the business!"
          ></InsightSubSection>
          <InsightSubSection
            title="Power BI Services"
            content="We partner with enterprises across the business intelligence lifecycle – - from BI envisioning, needs assessment and proof of concepts, to data model design (logical and physical), platform implementation, data integration development, reporting & visualization design and development, and ongoing data ops."
          ></InsightSubSection>
          <InsightSubSection content="- Data Platform Development"></InsightSubSection>
          <InsightSubSection
            content="Build a data platform to serve data for Power BI or configure Power BI to leverage existing sources such as data marts, operational data stores, and data warehouse."
          ></InsightSubSection>
          <InsightSubSection content="- Analysis & Planning"></InsightSubSection>
          <InsightSubSection
            content="Analyze your business intelligence requirements, data sources, and plan your Power BI deployment architecture, data integration & transformation and reporting & visualization deliverables."
          ></InsightSubSection>
          <InsightSubSection content="- Data Integration & Transformation"></InsightSubSection>
          <InsightSubSection
            content="A key step in Power BI solutioning is the data integration & transformation involving data extraction, cleansing and data preparation using Power Query M language."
          ></InsightSubSection>
          <InsightSubSection content="- Data Modeling"></InsightSubSection>
          <InsightSubSection
            content="Leverage data modeling constructs such a dimensions, facts and snowflakes with advanced DAX to create robust data models that accurately reflect the BI reporting requirements."
          ></InsightSubSection>
          <InsightSubSection content="- Visualization & Reporting"></InsightSubSection>
          <InsightSubSection
            content="Enable data driven decision making with rich and interactive scorecards, dashboards with drill downs to identify emerging trends, gain access to relevant information, and monitor goals and objectives."
          ></InsightSubSection>
          <InsightSubSection content="- Data Ops"></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="Provide development and support for ongoing data source integration, data quality and performance improvements."
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

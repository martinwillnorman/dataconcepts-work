<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Master Data Management | Data Warehouse"
        title="The difference between Master Data Management & Data Warehousing"
        summary="It may seem like Master Data Management and Data Warehousing have a lot in common, but there are several key differences that are important to delineate."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="Master Data Management"
            content="Master Data Management (MDM) refers to the process of creating and managing data that an organization must have as a single master copy, called the master data. Usually, master data can include customers, vendors, employees, and products, but can differ by different industries and even different companies within the same industry. MDM is important because it offers the enterprise a single version of the truth. Without a clearly defined master data, the enterprise runs the risk of having multiple copies of data that are inconsistent with one another."
          ></InsightSubSection>
          <InsightSubSection
            content="MDM is typically more important in larger organizations. In fact, the bigger the organization, the more important the discipline of MDM is, because a bigger organization means that there are more disparate systems within the company, and the difficulty on providing a single source of truth, as well as the benefit of having master data, grows with each additional data source. A particularly big challenge to maintaining master data occurs when there is a merger/acquisition. Each of the organizations will have its own master data, and how to merge the two sets of data will be challenging. Let's take a look at the customer files: The two companies will likely have different unique identifiers for each customer. Addresses and phone numbers may not match. One may have a person's maiden name and the other the current last name. One may have a nickname (such as 'Bill') and the other may have the full name (such as 'William'). All these contribute to the difficulty in creating and maintain in a single set of master data."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="At the heart of the master data management program is the definition of the master data. Therefore, it is essential that we identify who is responsible for defining and enforcing the definition. Due to the importance of master data, a dedicated person or team should be appointed. At the minimum, a data steward should be identified. The responsible party can also be a group -- such as a data governance committee or a data governance council."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Master Data Management vs. Data Warehousing"
            content="Based on the discussions so far, it seems like Master Data Management and Data Warehousing have a lot in common. For example, the effort of data transformation and cleansing is very similar to an ETL process in data warehousing, and in fact they can use the same ETL tools. In the real world, it is not uncommon to see MDM and data warehousing fall into the same project. On the other hand, it is important to call out the main differences between the two:"
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="1) Different Goals"
            content="The main purpose of a data warehouse is to analyze data in a multidimensional fashion, while the main purpose of MDM is to create and maintain a single source of truth for a particular dimension within the organization. In addition, MDM requires solving the root cause of the inconsistent metadata, because master data needs to be propagated back to the source system in some way. In data warehousing, solving the root cause is not always needed, as it may be enough just to have a consistent view at the data warehousing level rather than having to ensure consistency at the data source level."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="2) Different Types of Data"
            content="Master Data Management is only applied to entities and not transactional data, while a data warehouse includes data that are both transactional and non-transactional in nature. The easiest way to think about this is that MDM only affects data that exists in dimensional tables and not in fact tables, while in a data warehousing environment includes both dimensional tables and fact tables."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="3) Different Reporting Needs"
            content="In data warehousing, it is important to deliver to end users the proper types of reports using the proper type of reporting tool to facilitate analysis. In MDM, the reporting needs are very different -- it is far more important to be able to provide reports on data governance, data quality, and compliance, rather than reports based on analytical needs."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="4) Where Data Is Used"
            content="In a data warehouse, usually the only usage of this 'single source of truth' is for applications that access the data warehouse directly, or applications that access systems that source their data straight from the data warehouse. Most of the time, the original data sources are not affected. In master data management, on the other hand, we often need to have a strategy to get a copy of the master data back to the source system. This poses challenges that do not exist in a data warehousing environment. For example, how do we sync the data back with the original source? Once a day? Once an hour? How do we handle cases where the data was modified as it went through the cleansing process? And how much modification do we need make do to the source system so it can use the master data? These questions represent some of the challenges MDM faces. Unfortunately, there is no easy answer to those questions, as the solution depends on a variety of factors specific to the organization, such as how many source systems there are, how easy / costly it is to modify the source system, and even how internal politics play out."
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
  name: "MDMvsDW",
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

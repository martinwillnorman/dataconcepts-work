<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Data Governance"
        title="Data Governance is a Journey, not a Destination"
        summary="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Data Governance summary"
            content="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes. The Data Governance Institute defines data governance as “a system of decision rights and accountabilities for information-related processes, executed according to agreed-upon models which describe who can take what actions with what information, and when, under what circumstances, using what methods.” That’s a loaded answer but at the end of the day remember that data governance is really is about standards, policies and reusable models."
          ></InsightSubSection>
          <InsightSubSection
            title="Data Governance for Your Company"
            content="If you have a Data Warehouse (DW), which is the traditional approach towards getting insights with data, you probably already have some data governance frameworks and standards in place by having standards for your dimensional tables. So when we talk about best practices in DG, the first step is to understand what really DG is for your company. "
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="So do you have a data governance program? This question is not easy to answer because data governance as a concept is not fully understood. Your company is probably already doing some Data Governance but you just don’t realize it, which begs the question: what is data governance (DG)? DG is a program which sets rules and standards for Data related matters. The IT teams will be responsible to provide solutions for the project and provide development and infrastructure services but it would the responsibility of the data governance team to provide some guidance to the IT teams about Data Related policies and standards. This brings us to the next key consideration."
          ></InsightSubSection>
          <InsightSubSection
            title="The Data Governance Council"
            content="The council would be responsible for setting the data governance framework for the organization. The DG framework itself should be customized for your company’s specific needs but in general, the framework could include strategic planning tasks such as determining data needs, developing data policies and guidelines, planning data management projects. The framework also could include ongoing control tasks such as managing and resolving data related issues, monitor data policies and promote the value of data assets."
          ></InsightSubSection>
          <InsightSubSection
            content="Similar to the IT project leadership teams, the Data Governance Council members would need to include members from the business and also IT. It is critical to get business buy in into this program and they will be actively involved in the DG tasks."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="It is also important to have a flexible org structure for the council. A good practice is to follow a top down approach where the leadership of the council is driving the governance while the business analysts and Data Stewards are implementing the policies. The Data Stewards are responsible to provide the necessary feedback to the leadership."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Communication"
            content="Implementing DG involves bringing in a huge change in the organization. And that’s why it is imperative for the DG Council to come up with a mission which aligns with the business interests and takes into consideration the strengths of the Implementation teams. The mission of the DG programs would need to be communicated clearly and succinctly articulating the DG main drivers within the organization. The mission needs to be communicated repeatedly and consistently using various avenues."
          ></InsightSubSection>
          <InsightSubSection
            title="Focus Area"
            content="A data governance program can include a multitude of focus areas and it is important to pick an area which provides the most value to your company. These initiatives can be at the enterprise level, or at the project level. Below are some focus areas and a brief description:"
          ></InsightSubSection>
          <InsightSubSection
            content="Standards and Policy: This sort of program would collect standards, review existing them and check against the corporate standards. Another main activity is to define a Data Strategy for the company and provide support for any siloed projects trying to join the enterprise landscape."
          ></InsightSubSection>
          <InsightSubSection
            content="Data Quality (DQ): This kind of program deals with finding, correcting and monitoring Data Quality issues in the enterprise. These programs normally involve software for profiling, cleansing and matching engines. DQ initiatives also lead to Master Data Management (MDM) projects, which define the master data and give a 360-degree view of domains such as customer or Vendor."
          ></InsightSubSection>
          <InsightSubSection
            content="Data Security and Privacy: Every company have compliance and regulations requirements and this program would try to address these issues by setting Access Management rights, Information Security controls, Data privacy procedures etc. particularly for sensitive data."
          ></InsightSubSection>
          <InsightSubSection
            content="Architecture/Integration: This focus area aims to achieve operational efficiency by simplifying Data Integration Architecture components such as Data Modelling, Master Data modeling, Service Oriented Architecture etc."
          ></InsightSubSection>
          <InsightSubSection
            content="DW and Business Intelligence (BI): This program promotes the use of building Data Warehouses and Data Marts to support historical reporting and also futuristic reporting."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Self-service architectures: This kind of program takes into consideration the stewardship and Data Preparation challenges and aims to build workflows limiting the ‘shadow IT’ paradigm, which happens so often in organizations."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="It’s a Journey, Not a Destination"
            content="It is important to understand just like Corporate governance, data governance is not a project but it’s an ongoing process. Any ongoing process will need to have goals defined and a method to measure the progress of the program. A recommended approach for this would be to scan the progress against a Data Governance Maturity Model. Depending on the focus area you chose for the DG program, your company should also have metrics defined to measure the success of the program. It is also recommended to use agile practices. Agile methods such as continuous delivery, constant collaboration between IT and business, welcoming change and having continuous attention to technical excellence and good design fit perfectly into data governance practices."
          ></InsightSubSection>
          <InsightSubSection
            title="Evolve"
            content="Just like processes and people, technology is a big part of the data Governance and technology is ever changing. Whether you are in business or IT, it is recommended to embrace technological innovation. New innovations in machine learning, cloud, and the big data space can make data governance initiatives effective. For example, building a data lake on Hadoop could make storage of master data and DW data cheaper and the processing faster."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="There is a very good chance your company already has one of the data governance initiatives successfully implemented. My recommendation is to use that as a base for implementing other focus areas. Have a vision for data governance in your company, get buy in from business and IT leadership and make IT and business collaboration better. With these initial steps in place, DG can successfully evolve and provide true value to the organization!"
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import InsightHeader from "../components/InsightHeader.vue";
import InsightSubSection from "../components/InsightSubSection.vue";

export default {
  name: "InsightGovernanceJourney",
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
@import "../assets/sass/settings.sass"

.insight-image
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(45deg) saturate(6)
  background-image: url(../assets/background/insights/lights-2.jpg)
</style>

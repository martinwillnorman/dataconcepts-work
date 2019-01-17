<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Data Strategy"
        title="A Quick Peek At Our World Helping Clients with Data Strategy"
        summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="Data Architecture"
            content="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind. As such, we help our collaborators to formulate their own unique Data Strategy, so that all data related processes, policies and decisions are focussed on the main goals and direction of the business. These activities are spread across two solutions: Data Architecture and Data Modelling & Design, each of which can be applied dependent on the unique needs of any potential collaborators."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Our Data Architecture activities are just that: systems that allow for a data landscape to be defined and understood so that a well designed and engineered strategy can be implemented across the business. A well formulated data architecture helps organisation to quickly respond to market conditions. By evolving products and services in a dynamic, responsive way – firms can benefit end users and the bottom line both."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Consultation"
            content="Our consulting services help an organisation to identify its data needs, and allows us to create a comprehensive and joined-up architecture blueprint for the governance, quality and integration of data assets. Armed with a full understanding of your business, we bring any data investments into line with wider business strategy; allowing for cohesion across your operation.
In very top-line terms, our approach can be summed up as:"
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Assess"
            content="We establish the current state of play. Our team assess the state and structure of current process, systems, models, policies and principles related to business data."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Analyze"
            content="Very simply, we look at what’s working and what isn’t. We identify and understand the gaps in process, systems, models, policies and principles that are hindering or preventing the business from achieving its objectives."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Plan"
            content="We tell you how things could be running better by producing a comprehensive, methodical blueprint and roadmap of how your people, process and technology can and should work."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Govern"
            content="We communicate the defined architecture to teams that will implement the data architecture, and ensure information systems align with the new roadmap. We set up governance bodies to ensure changes to the architecture are managed, assured and communicated."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Data Modelling & Design"
            content="Data’s of no use if it can’t be understood, analysed and have its insights acted upon. Our team have the expertise and understanding to model enterprise data assets at different levels of abstraction, from conceptual to physical data models. Modelling the structure of data assets – how it enters and flows through the organisation, how it is accessed and managed and the rules that govern its quality – provides organisations with a common language to discuss data concerns and derive value from it."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Consultation"
            content="We help our collaborators define the policies, standards and approach to model their data assets and associated metadata. We support businesses by helping them select and best utilise the ideal data modelling tools for their particular set of needs, wants and desired outcomes."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Implementation"
            content="We can help you create extensive enterprise data models (both conceptual and logical). Our team specialise in the analysis and modelling of data lineage. We’re able to document your metadata and ensure consistency and cohesion throughout."
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
  name: "QuickPeek",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(180deg) saturate(6)
  background-image: url(../../assets/background/insights/dance-2.jpg)
</style>

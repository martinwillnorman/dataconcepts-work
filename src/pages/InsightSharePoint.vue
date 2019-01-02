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
        title="What can you do with SharePoint?"
        summary="Upgrade or Migration is a major challenge for organizations who have invested in SharePoint extensively. Each new edition of SharePoint provides new features which has potential to improve your business case."
      />
      <InsightSubHeader
        content="Having built several applications and customized SharePoint as per each business need, it becomes imperative to migrate these functionalities to the future platform. Not to mention the effort, risk and cost involved. The complexity is even higher when you want to migrate from existing solution platform to SharePoint. Data Concepts has helped several clients migrate their SharePoint environment from one version to the next and from on-premise to hosted model or Office 365. Our Upgrade and Migration consulting helps organizations build a systematic, time tested migration strategy and plan."
      ></InsightSubHeader>
      <section class="content-block slant-4 padded-top">
        <div class="container">
          <InsightSubSection
            class="padded-bottom"
            title="How We Help With SharePoint"
            content="Data Concepts can help with all aspects of your SharePoint implementation – version selection & licensing, infrastructure planning, document management, taxonomy, governance, workflows, system integration, dashboards, custom add-ins and web parts, training, and ongoing support. We can help you customize SharePoint’s look & feel to make it more inviting and boost user adoption."
          ></InsightSubSection>
          <InsightSubSection
            title="What You Can Do with SharePoint"
            content="- Improve Business Processes."
          ></InsightSubSection>
          <InsightSubSection
            content="Use Workflow Automation and Online Forms to streamline business processes."
          ></InsightSubSection>
          <InsightSubSection content="- Find Documents Fast."></InsightSubSection>
          <InsightSubSection
            content="Search indexes every word in every document you store on your network drive or in SharePoint. DMC's SharePoint OCR Solution indexes the words inside image-only PDF files so they can also be discovered via search."
          ></InsightSubSection>
          <InsightSubSection content="- Manage Critical Documents."></InsightSubSection>
          <InsightSubSection
            content="Document Management features like Version Control, Metadata, Approval Workflow, and Audit Trail allow teams to work together and avoid costly mistakes. Ideal for ISO compliance and contract management."
          ></InsightSubSection>
          <InsightSubSection content="- Establish Best Practices."></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="Use Wikis to easily create, maintain, and locate best practices and standard operating procedures."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Sharepoint Upgrade or Migration"
            content="Each new edition of SharePoint provides new features which has potential to improve your business case. Having built several applications and customized SharePoint as per each business need, it becomes imperative to migrate these functionalities to the future platform. Not to mention the effort, risk and cost involved. The complexity is even higher when you want to migrate from existing solution platform to SharePoint. Data Concepts has helped several clients migrate their SharePoint environment from one version to the next and from on-premise to hosted model or Office 365. Our Upgrade and Migration consulting helps organizations build a systematic, time tested migration strategy and plan. Having successfully delivered 100+ projects, we bring all the experience, learning's and best practices to ensure smooth & successful transition."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Pre Upgrade Assessment"
            content="This phase aims at understanding your existing SharePoint environment including the applications, documents, workflows, reports, data, etc. to be migrated. The Pre upgrade analysis will help us identify the risks that need to be handled for successful execution of the project. During the assessment phase, if any changes are needed in the implemented Information Architecture, the same is evaluated."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Pre Migration Assessment"
            content="Primary focus is to identify the functionality available in the existing application, classify them based on usage and design the same functionality in SharePoint. During this phase, the existing application is thoroughly reviewed for possible enhancements that add value to the respective business solution and is considered in the new SharePoint design. The migration project can range from simple migration of content from file system or can be as complex as recreating the functionality of an existing ageing solution."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Approach & Roadmap"
            content="Based on findings during the assessment phase, we will create a detailed Upgrade/Migration plan. We will also provide a recommendation if certain applications need to be rebuilt or enhanced to best utilize capabilities of the future platform."
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
  name: "InsightSharePoint",
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

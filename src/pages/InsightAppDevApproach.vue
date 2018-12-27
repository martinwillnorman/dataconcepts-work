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
        category="Application Development"
        title="Application Development: Our Approach"
        summary="High performance, outcome-driven systems."
      />
      <InsightSubHeader
        content="Data Concepts’ approach to application development and maintenance extends beyond technology and cost reduction. We focus on delivering strategic business outcomes by helping clients fully maximize the value of their applications. Our application services cover all that is needed to build and maintain high-performance, outcome-driven applications that drive operational excellence and competitive advantage."
      ></InsightSubHeader>
      <section class="content-block slant-4 padded-top">
        <div class="container">
          <InsightSubSection class="padded-bottom" title="Our approach:"></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Client-centric governance model:"
            content="Ensures a strong focus on the right outcomes at the right time, the agility to quickly adapt to changing conditions, and efficient and accountable project management that leads to operational excellence. Our IT governance model ensures your business strategies are aligned with your IT priorities. Our management framework fosters operational excellence in accountability, control and service delivery."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Innovation and transformation:"
            content="Drives the development of new ideas and breakthrough solutions through close collaboration with clients, insight and thought leadership. Whether implementing new digital systems and solutions or finding creative ways to digitalize clients’ current investments, our experts follow a practical and collaborative approach characterized by the following attributes: Collaborate and innovate with our clients while maintaining strong delivery excellence, ability to align people, processes and technology to enable true digital transformation."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Application Portfolio Management:"
            content="Enables clients to go beyond simple assessment and optimize the entire application portfolio in line with business objectives through a comprehensive methodology and supporting tools that drive smarter investment strategies."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="Results-driven performance:"
            content="Uncovers the potential for business transformation by combining granular data analysis and collection with continuous business and IT alignment through Data Concepts’ advanced methodologies."
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
  name: "InsightAppDevApproach",
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

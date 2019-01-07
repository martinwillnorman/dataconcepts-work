<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Data Strategy"
        title="Data Strategy is About Doing the Right Things"
        summary="Let’s discuss the process to guide your organization to lay out your organization-specific Data Strategy."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Data Strategy: The Process"
            content="Data Strategy is a 4 step process that we’ve used often and this high-level framework for Data Strategy addresses the key elements of People, Processes, Technology, and Data."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 1: Planning And Discovery"
            content="This step encompasses identifying business objectives & needs, enlisting sponsors & stakeholders, defining scope & schedule, and discovering technology & data assets that have a role in the Data Strategy. I’ll dig little more into business objectives and stakeholders points which I believe are very crucial."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Identify Business Objectives and Problems that need to be solved with data"
            content="Data Strategy should align to business objectives and address key business problems / needs as the primary purpose of Data Strategy is to unlock business value leveraging data. One way to accomplish this is to align with corporate strategic planning process as most organizations have a strategic planning process anyway. Some of the examples for business objectives / business needs: Drive customer insights, Improve product and services efficiently, Lower business risks, Drive revenue growth and/or profitability, Regulatory compliance."
          ></InsightSubSection>
          <InsightSubSection
            title="In our opinion, there are 3 types of people you need to take into account:"
            content="Executive sponsor(s) : I can’t under estimate the importance of finding and aligning with executive sponsor (s) that’ll support you through the ups and downs of formulating the Data Strategy and implementing it."
          ></InsightSubSection>
          <InsightSubSection
            content="Right talent on your team: Make sure to influence and evangelize to the people with right skills / talent to be on your team. Explore both internal talent as well as external consultants."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Potential trouble makers: Every project / initiative will have some ‘stakeholders’ who either deliberately or unintentionally are opposed to change. Knowing who they are and their motivations upfront will help you later in the process."
          ></InsightSubSection>
          <InsightSubSection
            title="Step 2: Current State Assessment"
            content="In this step, focus primarily on current business processes, data sources, data assets, technology assets, capabilities, and policies. The purpose of this exercise is to help with gap analysis of existing state and the desired future state. As an example, if the scope of the data strategy is to get a 360 view of customers and potential customers, the current state assessment would include any business process, data assets including architecture, capabilities (business & IT), and departmental policies that touch customers. Current state assessment is typically conducted with a series of interviews with employees involved in customer acquisition, retention, and processing."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="One important observation I made during assessment is that you’ll come across people in the organization that are natural data evangelists. These people truly believe in the power of data in making decisions and may already be using the data and analytics in a powerful way. Make note of these people and make sure to take their help in later phases to drive a ‘data-driven’ culture in the organization."
          ></InsightSubSection>
          <InsightSubSection
            title="Step 3: Analysis, Prioritization, & Roadmap"
            content="This phase is probably the most intense and contentious phase and without a doubt will account for majority of the time in formulating data strategy. With Big Data and Cloud computing, the analysis has gotten even more complicated than in the past. With the desired future state in mind, analysis should focus on identifying gaps in data architecture, technology & tools, processes and of course people (skills, training etc.). Big Data brings new data sources into the mix and Cloud computing enables new options for data integration and data storage."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="The gap analysis will present multiple strategic options for initiatives and the next task is to prioritize these options with business objectives / needs as the primary criteria. The sponsors and stakeholders will have a key role to play in prioritizing these initiatives. The end result of this phase is a roadmap to roll out the prioritized data initiatives. Without going into too many details, some of these data initiatives could be Data Governance, Data Quality, and Master Data Management (MDM)."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 4: Change Management"
            content="Some people would argue that Change Management is not a distinct step but my past experience has shown that the best of Data strategies have faced an untimely death precisely because of lack of focus on change management. Change management should encompass organizational change, cultural change, technology change, and changes in business processes. Data Governance, which deals with overall management of availability, usability, integrity, and security of data becomes a crucial component of change management. Appropriate incentives and ongoing metrics should be key part of any change management program."
          ></InsightSubSection>
          <InsightSubSection
            title="Data Strategy Components"
            content="As a bonus, I’ve decided to include a section on various components in the final Data Strategy output. I believe that Data Strategy document should include all or at least some of these components:"
          ></InsightSubSection>
          <InsightSubSection
            content="Background / Context: This section should articulate background that necessitated the Data Strategy in the first place. Examples could be: Corporate strategic direction, Digital Transformation initiative, or mergers & acquisition related context etc."
          ></InsightSubSection>
          <InsightSubSection
            content="Business case: The sole purpose of Data Strategy is to unlock business value and this section should articulate the value being unlocked both quantitatively and qualitatively. The business case is probably the toughest one but a necessary one."
          ></InsightSubSection>
          <InsightSubSection
            content="Goals: This section identifies specific Data Strategy related goals and ideally in a SMART fashion (Specific, Measurable, Agreed upon, Realistic, Time-based)."
          ></InsightSubSection>
          <InsightSubSection
            content="Implementation roadmap: This section connects the strategy with tactics with a roadmap on how the strategy will be implemented over a period of time."
          ></InsightSubSection>
          <InsightSubSection
            content="Risks and Success factors: Strategy should directly address various risk factors and success enablers (or accelerators). Time and time again, change management is either a major risk or success enabler if not thought through in a detailed fashion so make sure to address it head on in this section."
          ></InsightSubSection>
          <InsightSubSection
            content="Budget estimates: What good is a strategy if it doesn’t have budget estimates. My advice is to be realistic and as comprehensive as possible. If you take short cuts to get a strategy approved, it’s just a matter of time before it comes back to bite you."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Key Performance Indicators (KPIs) and Metrics: To ensure that the strategy is either on track or needs to be adjusted, identify KPIs that need to be tracked on a short term and long term basis."
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
  name: "InsightDataStrategyRight",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(368deg) saturate(6)
  background-image: url(../assets/background/insights/dance-2.jpg)

</style>

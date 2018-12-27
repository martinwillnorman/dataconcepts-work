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
        category="Data Governance"
        title="Let's Put You on the Path to Data Governance Excellence"
        summary="In the rush to get exciting, advanced analytics projects off the ground, don't overlook the importance of data governance. Data governance practices can sink any analytics initiative before it really has a chance to take shape."
      />
      <InsightSubHeader
        content="Data governance plans have evolved to meet the needs of big data practitioners, resulting in more flexible and agile standards of operation that cultivate collaboration and efficiency. It isn't only about security and compliance anymore—companies need to balance out those evergreen requirements with clear rules for access, organization and authorization."
      ></InsightSubHeader>
      <section class="content-block slant-4 padded-top">
        <div class="container">
          <InsightSubSection
            title="To successfully support data governance, be sure to adhere to these four best practices:"
          ></InsightSubSection>
          <InsightSubSection
            title="1. Follow industry-best security practices"
            content="Striking a robust cyber security posture can often feel like a moving target, but that makes it all the more important to keep up with new developments and implement the latest protections. A well-rounded security plan begins with a tough perimeter and thorough endpoint defenses, but it doesn’t end there. A combination of encryption and tokenization are required to safeguard data that rests behind your perimeter wall."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="As unpleasant a thought as it may be, organizations have to operate under the assumption that network intrusions will occur, and plan accordingly. Encryption and tokenization tools enable stakeholders to access information that is vital to their analytics projects without unduly exposing that data and putting it in harm’s way."
          ></InsightSubSection>
          <InsightSubSection
            title="2. Adhere to compliance standards"
            content="Encryption is especially helpful for obfuscating sensitive data like protected health information and personally identifiable information, which are covered by a variety of data privacy regulations. For instance, the Health Insurance Portability and Accountability Act and the Payment Card Industry Data Security Standard have loomed over the health care and retail industries, respectively, for years. Violating these regulations can be very expensive, adding enormous costs to a data breach or other security incident. Any data governance plan should include a thorough strategy for adhering to compliance guidelines so no detail is missed."
          ></InsightSubSection>
          <InsightSubSection
            content="One important consideration to keep in mind is that industries, governments and other regulatory bodies are always looking to revamp and strengthen these standards. Actions that are considered compliant today could be viewed as a violation a few years from now. Businesses need to stay up-to-date on any emerging regulations that may affect them."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="For a recent example, look no further than the European Union’s General Data Protection Regulation, which will go into effect May 25, 2018. Any organization that has access to European consumer data will need to abide by these new guidelines, and with the clock winding down, there’s no reason to delay compliance efforts any longer."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            title="3. Establish clear access and authorization rules"
            content="Organizations want to strike the right balance here, as overly rigid authorization rules may block analysts from accessing the very data they need, while guidelines that are too lax will put sensitive data at risk. One of the best ways to achieve this is to assign access rules to metadata at the moment it’s captured with the help of automated tools. It’s an efficient way to accelerate and streamline access control requirements without worrying about arduous and time-consuming manual processes."
          ></InsightSubSection>
          <InsightSubSection
            title="4. Prioritize your data accordingly"
            content="Not all data is created equal. Some of it will be immediately relevant to analytics projects, while other information may not usable in its current state—if it ever will be at all. CIO contributor Paul Barth explained that a sizeable portion of raw data may never see the light of day with analytics projects. If you treat all data the same, you may waste time and resources cleaning up information that was never going to provide much tangible value in the first place."
          ></InsightSubSection>
          <InsightSubSection
            content="Prioritization can be handled at the metadata level, separating the wheat from the chaff. This quickly puts useable, relevant data into the hands of project stakeholders and saves data governance officials in time that would have otherwise been essentially wasted cleaning up information that served no immediate purpose."
          ></InsightSubSection>
          <InsightSubSection
            class="padded-bottom"
            content="Following these four best practices will certainly put you on the path to data governance excellence, but it’s only the beginning of that particular journey. Not sure what your destination should be? Reach out to one of Data Concepts’ experts today for a consultation."
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
  name: "InsightGovernancePath",
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

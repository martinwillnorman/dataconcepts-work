<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Virginia State Police" kicker="Web Portal.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Virginia State Police [VSP] is a statewide law enforcement agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Dashboard Development</li>
          <li>Portal Development</li>
          <li>Legal Compliance</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          class="text-white"
        >VSP’s existing Firearms Transaction Program provided a point-of-sale approval or disapproval decision regarding the sale or transfer of all firearms in the State of Virginia. VSP wanted to replace the existing application with a more scalable, extensible and robust web architecture and add major new features and functionalities including enhancements based on new laws enacted by the State General Assembly after the Virginia Tech incident. In addition to improving the UI for external users including firearms dealers and sellers, most importantly VSP wanted to provide a custom portal to its internal team of users that were tasked with conducting the background checks and hence, enable them to be more productive, efficient and to minimize the probability of any lapses in processing of background checks.</p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >LEGAL COMPLIANCE ASSURED, PUBLIC SAFETY PROMOTED</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts was awarded by VSP the work to completely redesign, rewrite and replace the current Firearms system in web technologies. This system developed by Data Concepts is used statewide by VSP personnel, firearm dealers and sellers. Every firearm sold or bought in the Commonwealth of Virginia is processed through this portal. Major Custom Web Portal features:</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Allows each VSP team member take a case/request from a queue.</li>
          <li>- Each team member has a personalized Dashboard.</li>
          <li>- For each firearm request, users can do a study, take notes, approve or disapprove, or escalate to a supervisor directly from their personal homepage.</li>
          <li>- Portal interfaces with State and Federal Law Enforcement Databases/systems including National Instant Criminal Background Check System (NICS), Interstate Identification Index (III), and National Crime Information Center (NCIC).</li>
          <li>- Allows supervisors to view performance reports for VSP team members.</li>
          <li>- Role-based Security.</li>
          <li>- Integration with VSP Single Sign on.</li>
          <li>- Approximately 60-70 Web Pages for Dealers and Firearms Transaction Center (VSP) Users.</li>
          <li>- Instant Background Check decision processing.</li>
          <li>- Supports approximately 300,000 transactions per year.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts successfully managed, executed and deployed the Firearms Application in production for the Virginia State Police and continues to maintain and support it.</p>
      </Outcome>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import Summary from "../../components/work/Summary.vue";
import Challenge from "../../components/work/Challenge.vue";
import Role from "../../components/work/Role.vue";
import SolutionHeader from "../../components/work/SolutionHeader.vue";
import Solution from "../../components/work/Solution.vue";
import Outcome from "../../components/work/Outcome.vue";

export default {
  name: "WebPortal",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Summary,
    Challenge,
    Role,
    SolutionHeader,
    Solution,
    Outcome
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/work-large/web-portal.jpg)
  background-position: center

#first
    background-color: #cb3694

.challenge-header
    font:
        size: 1.8rem
    color: #cb3694
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #cb3694

.solution-header:after
    background-color: #cb3694

</style>
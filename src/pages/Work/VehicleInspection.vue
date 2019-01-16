<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Virginia State Police" kicker="Vehicle Inspection Program.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        Challenge="The administration of the Commonwealth of Virginia’s statewide Motor Vehicle Safety Inspection Program [MVIP] is the responsibility of Virginia State Police."
      />
      <Spacer/>
      <Role>
        <li>Java</li>
        <li>JEE</li>
        <li>Web Services</li>
        <li>JavaScript</li>
        <li>XML</li>
        <li>DB2</li>
        <li>IBM WebSphere</li>
        <li>Oracle</li>
      </Role>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          class="text-white"
        >As of December 31, 2007, there were 4,388 active inspection stations located throughout the Commonwealth of Virginia. There were over 14,000 licensed safety inspectors who performed approximately 8,000,000 inspections at appointed stations during 2007. Approximately 25% of all vehicles submitted for inspection were rejected for unsafe components. This program was a manual and laborious process which resulted in data discrepancy and slow processes.</p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">BUSINESS PROCESS RE-ENGINEERING AND AUTOMATION</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >The new MVIP web application automated the entire Inspection Safety Program. Data Concepts built a new, state-of-the-art Web Based Application to automate and entirely re-engineer the previous labor intensive and error prone process.</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Approximately 30-50 Views / Web pages.</li>
          <li>- View customization based on Roles and Group.</li>
          <li>- Web 2.0.</li>
          <li>- Section 508 Compliant.</li>
          <li>- Follows Virginia Information Technology Agency [VITA] Architecture Guidelines.</li>
          <li>- Designed to handle around one million plus transactions a month.</li>
          <li>- Designed to handle approximately 4000+ station users.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts successfully managed, executed and delivered this system into production. The development and deployment of the new system was a huge endeavor and initiative by Virginia State Police to radically improve the efficiency and productivity of the Motor Vehicle Safety Inspections Program. It also involved major Business Process Re-engineering and an automation push. This was a deliverable based, fixed price project.</p>
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
  name: "VehicleInspection",
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
  background-image: url(../../assets/background/work-large/vehicle-inspection.jpg)
  background-position: center

#first
    background-color: #EF4C23

.challenge-header
    font:
        size: 1.8rem
    color: #EF4C23
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #EF4C23

.solution-header:after
    background-color: #EF4C23

</style>
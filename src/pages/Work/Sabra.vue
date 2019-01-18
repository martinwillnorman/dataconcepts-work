<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Sabra" kicker="Excel to .Net Conversion">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Data Concepts client is a leading snacks manufacturer most famous for their hummus and ethical business model."
      >
        <Role>
          <li>Asp.Net & C#</li>
          <li>Visual Studio 2015</li>
          <li>SQL Server 2008 R2</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          class="text-white"
        >Our client needed to convert their Physical Chem Excel application written in a VBA code into a .Net application with a SQL Server database.</p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">Legacy Modernization and Re-Architecture</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts delivered a fully-tested, redesigned architecture blueprint and application system to host historical and future data.</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Requirements Elicitation.</li>
          <li>- Requirements Documentation.</li>
          <li>- Analysis & Design.</li>
          <li>- Code Architecture Setup.</li>
          <li>- Database Design.</li>
          <li>- Security Implementation & Network Authentication.</li>
          <li>- Development of Admin Screens.</li>
          <li>- Development of User Screens.</li>
          <li>- Deployment to QA and Prod.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Our client was able to leave their less-functional and cumbersome Spreadsheet behind and harness the power of a SQL server for their Physical Chem Data Capture, increasing the usefulness of their data.</p>
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
  name: "Sabra",
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
  background-image: url(../../assets/background/work-large/scala-architecture.jpg)
  background-position: center

#first
    background-color: #426EFF

.challenge-header
    font:
        size: 1.8rem
    color: #426EFF
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #426EFF

.solution-header:after
    background-color: #426EFF

</style>
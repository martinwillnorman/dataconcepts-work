<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Energy" kicker="Mobile business solution.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Data Concepts’ client is one of the nation’s largest producers and transporters of 
energy, with a portfolio of approximately 26,000 megawatts of electric generation. It also
operates one of the largest natural gas storage systems in the U.S. with 1 trillion cubic 
feet of capacity, and serve more than 6 million utility and retail energy customers."
      >
        <Role>
          <li>Microsoft Web Stack (Asp.Net MVC, WebAPI)</li>
          <li>jQuery/Bootstrap</li>
          <li>WPF</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p data-aos="fade-up" data-aos-duration="600" class="text-white">
          There was a number of tool and disconnected/old systems that enabled more than 200
          servicers with more than 100 service trucks to run down the areas serviced by the client
          with work orders. There were problems is streamlining the process and maintaining
          timely information flow between so many small systems.
        </p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">A REENGINEERED SOLUTION</p>
      </SolutionHeader>

      <Solution>
        <p data-aos="fade-up" data-aos-duration="600">
          Data Concepts started working on a solution by starting to understand the data flows
          from and to each of the systems involved. Once data is identified, it was transformed,
          normalized and loaded into a single data store. A single responsive web application was
          developed for management team to assign and manage work orders in the office. A
          windows application was developed for the services to use inside the truck on the field
          to collect and manipulate data from the field. And an intelligent sync process was
          developed to merge data from both ends understanding precedence based on complex
          business logic.
        </p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Deployable .Net assemblies to IIS web servers.</li>
          <li>- Deployable WPF application pushed through to all servicers tough-books.</li>
          <li>- Database setup in SQL Server 2016.</li>
          <li>- Reports in COGNOS.</li>
          <li>- Project source code and documentation.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 dat class="section-header medium outcome-header">OUTCOME</h1>
        <p data-aos="fade-up" data-aos-duration="600">
          The solution deployed by Data Concepts enabled clients easily manage and service
          consumer work orders using a single streamlined system that aesthetically provides
          similar experience irrespective of whether it is used inside business premises or on the
          field; also cutting down cost of managing several different systems and complete data
          flow mechanisms.
        </p>
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
  name: "Energy2",
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
//   background-image: url(../../assets/background/work-large/energy.jpg)
  background-position: center

#first
    background-color: #FF2828

.challenge-header
    font:
        size: 1.8rem
    color: #FF2828
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #FF2828

.solution-header:after
    background-color: #FF2828

</style>
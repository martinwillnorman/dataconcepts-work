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
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p data-aos="fade-up" data-aos-duration="600" class="text-white">
          With more than 2 million customers trying to make monthly bill payments, the company
          wanted to reduce the amount of people walking into physical locations. Although online
          bill payment was an option, there was no mobile solution.
        </p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">A REENGINEERED SOLUTION</p>
      </SolutionHeader>

      <Solution>
        <p data-aos="fade-up" data-aos-duration="600">
          Data Concepts started working on a mobile solution with the client’s preferred payment
          provider. Developing this feature involved evaluating between the two choice of using
          SOAP services exposed by the provider with custom built UI or embedding HTML
          content from provider. Once it was decided, security was implemented using SSL
          handshake through exchange of valid digital certificates. This resulted in every
          consumer having the choice of easily and securely complete bill payments through
          mobile devices.
        </p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Deployable .Net assemblies to IIS web servers and databases in Oracle.</li>
          <li>- Project source code and documentation.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 dat class="section-header medium outcome-header">OUTCOME</h1>
        <p data-aos="fade-up" data-aos-duration="600">
          The solution deployed by Data Concepts enabled client to expand of base of users
          using online payment system thereby cutting down on expense of having physical bill
          collection centers as well as increasing secure and fast payments.
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
  name: "Energy",
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
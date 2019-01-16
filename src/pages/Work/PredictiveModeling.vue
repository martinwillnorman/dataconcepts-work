<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Predictive Modeling for Debt Collection" kicker>
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Data Concepts’ client is one of the fastest growing on-demand marketplaces in the burgeoning gig economy. Moonlighting lets everyone participate in the new “on-demand economy” and collaborate to create and fill jobs in every state across United States."
      >
        <Role>
          <li>Python</li>
          <li>SQL</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          class="text-white"
        >More than 1500 collection agents across the country deal with approximately 3.5 M debtors per month with nearly 2 M total monthly outreaches. Our client wanted to take steps to reduce the amount collections using predictive analytics.</p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >UNDERSTANDING RISK THROUGH PREDICTIVE ANALYTICS</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts started working on a machine learning model for predicting the probability of promise to pay from verified accounts. Developing the predictive model included construction of a pipeline for data processing and feature creation in SQL Server, training the predictive model based on lightgbm, and establishing a second pipeline for prediction outputs. The prediction enabled strategic targeting of accounts to improve collection rates and reduce costs.</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Deployable Python Module with Data Processing Engine and Predictive Engine.</li>
          <li>- Python module deployed into MS SQL 2017.</li>
          <li>- Project source code and documentation.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >The model delivered by Data Concepts accurately predicted the probability of promise to pay from an account as measured by a ROC_AUC score of ≈0.775, which was a significant improvement. The Client used the information to optimize collection agents’ time by directing them to target the most promising accounts first.</p>
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
  name: "PredictiveModeling",
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
  background-image: url(../../assets/background/work-large/predictive-modeling.jpg)
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
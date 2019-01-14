<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Capital One" kicker="Salesforce Data Load Automation.">
        <div v-parallax="0.4" class="cover-image work-hero-background tinted"></div>
      </Hero>

      <Summary
        content="Our client is a major credit card company recognized around the world that holds a coveted spot on the Fortune 500 list."
      >
        <Role>
          <li>Spring</li>
          <li>Spring Boot</li>
          <li>REST</li>
          <li>Gradle</li>
          <li>JIRA</li>
          <li>CICD</li>
          <li>Eclipse</li>
          <li>Chef</li>
          <li>Jenkins</li>
          <li>Amazon Lambda</li>
          <li>AWS SWF, EC2, S3, RDS, CloudFormation</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 data-aos="fade-up" data-aos-duration="600" class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          class="text-white"
        >To automate data load into Salesforce using Java/JEE and replace the legacy manual process.</p>
      </Challenge>

      <SolutionHeader>
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          class="section-header solution-header"
        >SOLUTION</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >MICROSERVICES ARCHITECTURE SOLUTION WITH SALESFORCE</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts built a solution for the Investments Line Of Business to automate data load into the Salesforce instance using Java/JEE as the underlying programming language. This solution automates the loading of referral data from Touchpoint application into their Salesforce instance, and replaces the current manual process. The solution has been developed as a framework so that it can be extended for other business use cases. Data Concepts stood up the AWS Cloud environment from scratch. The technology stack for the solution includes AWS Cloud – Lambda, SWF, S3, RDS, & EC2 Services; Spring Boot Microservices Architecture, Java/JEE along with Jenkins/Gradle for the CICD piece.</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Data Concepts built a microservices architecture solution to automate data load into the Salesforce instance on an AWS environment designed and architected from scratch.</li>
          <li>- The solution automates the loading of referral data from Touchpoint application into the Salesforce instance replacing the current manual process.</li>
          <li>- The solution has been developed as a framework that can be extended for other business use cases.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          class="section-header medium outcome-header"
        >OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >Data Concepts developed an automation process into Salesforce, using JEE technologies for Capital One Investments; we stood up the AWS Cloud Environment from scratch.</p>
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
  name: "CapitalOne",
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

.work-hero-background
  background-image: url(../../assets/background/work-large/capital-one.jpg)
  background-position: center

#first
    background-color: #0e414c

.challenge-header
    font:
        size: 1.8rem
    color: #0e414c
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #0e414c

.solution-header:after
    background-color: #0e414c

</style>
<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Scala Architecture Migration" kicker>
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="Our Client, a Credit Union, was invested in Legacy systems with zero test coverage, in a tightly coupled Microsoft infrastructure which was difficult to scale and maintain. Its web interface was buggy and not mobile enabled."
          />
          <Spacer/>
          <WorkRole>
            <li>Scala</li>
            <li>Akka</li>
            <li>Docker</li>
            <li>Ansible</li>
            <li>AWS</li>
            <li>ElasticSearch</li>
            <li>CI/CD</li>
            <li>Mobility</li>
            <li>UI/UX/li></li>
          </WorkRole>
        </div>
      </section>
      <section class="content-block black">
        <div class="container">
          <WorkChallenge>
            <h1 data-aos="fade-up" data-aos-duration="600" class="challenge-header">CHALLENGE</h1>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              class="text-white"
            >Data Concepts’ mission was to deliver high quality, scalable code and architecture that was easy to extend and maintain. Test coverage and infrastructure automation were two of the most important goals.</p>
          </WorkChallenge>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolutionHeader>
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              class="section-header solution-header"
            >SOLUTION</h1>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >SEAMLESS MIGRATION TO SCALA MICROSERVICES</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >We developed the client’s vision for a beautiful web interface by first resolving the underlying issues. Data concepts identified Scala Micro Services as the best platform, and the migration to Scala served as the foundation for an architectural transformation that solidly supported test coverage and automated deployment.</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- New responsive web front-end, developed in a “mobile-first” spirit.</li>
              <li>- Highly scalable API bridge that provides consistent and uniform REST API and makes further migration to Scala micro services fully transparent.</li>
              <li>- Mobile-aware, WYSIWYG CMS.</li>
              <li>- Automated deployment.</li>
            </ul>
          </WorkSolution>
        </div>
      </section>
      <section class="content-block light-grey">
        <div class="container">
          <WorkOutcome>
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              class="section-header medium outcome-header"
            >OUTCOME</h1>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >To ensure our client was able to maximize their investment, the system was set up to avoid “vendor lock-in” and our consultants collaborated to train the client’s in-house dev team. Due to automated tests coverage and zero-downtime Continuous Delivery, coupled with the advantages of applying git-flow patterns, deployments became a matter of formality.</p>
          </WorkOutcome>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import Hero from "../components/Hero.vue";
import WorkSummary from "../components/WorkSummary.vue";
import WorkChallenge from "../components/WorkChallenge.vue";
import WorkRole from "../components/WorkRole.vue";
import WorkSolutionHeader from "../components/WorkSolutionHeader.vue";
import WorkSolution from "../components/WorkSolution.vue";
import WorkOutcome from "../components/WorkOutcome.vue";

export default {
  name: "WorkVehicleInspection",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Hero,
    WorkSummary,
    WorkChallenge,
    WorkRole,
    WorkSolutionHeader,
    WorkSolution,
    WorkOutcome
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/work-large/scala-architecture.jpg)
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
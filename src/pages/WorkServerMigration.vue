<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Virginia State Police" kicker="WebSphere Server Migration.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="Data Concepts’ client is the predominant statewide Law Enforcement Agency for the Commonwealth of Virginia."
          />
          <Spacer/>
          <WorkRole>
            <li>Java</li>
            <li>Modernization</li>
            <li>Architecture Development</li>
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
            >The client had 14 critical Enterprise Java applications running on WebSphere 6.1 ND with Java 1.5, Java EE 1.4, Spring 2.5 and iBatis. The inter-application communication was achieved by JMS and Soap Webservices. The existing Production environment consisted of Vertical two node WebSphere 6.1 ND setup on two physical Fujitsu M5000 running Solaris 10. This infrastructure was designed almost 10 years prior and the business needs had evolved. Internet Security and Data Integrity have become critical. There was an increasing demand to implement functionalities that required new technology stack and emerging frameworks requiring Java 1.7 and J2EE 1.6 specification. IBM had stopped supporting WebSphere 6.1 ND version. which made it more challenging to manage the current applications. This created an urgent need to upgrade the architecture to be robust, scalable and up-to-date to meet business needs.</p>
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
            >MODERNIZATION OF A LEGACY SYSTEM</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >Keeping the clients requirements in mind and constraints related to the current architecture being used, Data Concepts implemented the following solution:</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- To mitigate scalability issues, Data Concepts migrated the web applications to a clustered WebSphere v8.5 ND environment.</li>
              <li>- For a more robust and secure database to tackle demanding database workloads, migrated the client from Fujitsu M5000 to Oracle T52 database server.</li>
              <li>- To take advantage of a more clustered environment, Data Concepts set up the new server to use Solaris 11.2 which enabled features like Solaris LDOMs with horizontal clusters as compared to Solaris Zones.</li>
              <li>- To take advantage of latest frameworks and technology advancements, Data Concepts upgraded all the existing applications to Java 1.7 and J2EE 1.6.</li>
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
            >Data Concepts successfully migrated all the applications deployed in the new environment with minimum down time and no major delays. This upgrade resulted in the application performance improvement by 50%. These upgrades and changes enabled the client to take advantage of new features like session replication, XSLT 2.0 for XML transformation, Single Sign on for all the applications, Dyna Cache etc. The Jenkins integration immensely helped the client to stream line its web application deployment and prevented frequent deployment issues that were common before the migration.</p>
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
  name: "WorkServerMigration",
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
  background-image: url(../assets/background/work-large/server-migration.jpg)
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
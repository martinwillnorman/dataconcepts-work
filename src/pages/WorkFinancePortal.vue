<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Courts Of Virginia" kicker="Finance Portal.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="The Supreme Court of Virginia supports the administration of the court system comprised all courts in thirty-one judicial circuits, general district and juvenile and domestic relations district courts, and Magistrates in offices in thirty-two districts across the Commonwealth of Virginia."
          />
          <Spacer/>
          <WorkRole>
            <li>Legacy Modernization</li>
            <li>Drools</li>
            <li>UI/UX</li>
            <li>Java</li>
            <li>Spring</li>
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
            >Our client wanted to modernize its legacy Financial Accounting System [FAS] with a Java / JEE based custom web portal to significantly improve its shelf life, provide an easy integration with other vital court systems, significantly reduce maintenance costs, enhance its user-friendliness and make it flexible, secure and scalable. Data Concepts was tasked to reengineer, redesign and rewrite the system and provide a single gateway to manage all online payment requirements across the entire court system. The new system provided easy integration with external entities such as the Virginia Department of Motor Vehicles, the Virginia State Police, etc.</p>
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
            >ENTERPRISE PORTAL DESIGNED FOR SECURITY AND SCALABILITY</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >Our client required a scalable, extensible, reusable, secure and user-friendly web portal that allows for better productivity and lower maintenance costs. Taking into account the project timelines and the client’s IT investments, Data Concepts proposed the following solution:</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- Implement UI frameworks like AngularJS, Bootstrap, jQuery, and CSS3 backed by Jersey RESTful Web Services framework to develop a light-weight and user-friendly custom web portal where users record financial accounting information to significantly increase operational efficiency and reduce training time.</li>
              <li>- Utilize Drools as Business Rules Management System to develop a configurable business logic component with support for dynamic data and business rule updates for maximum extensibility.</li>
              <li>- Leverage Spring Security and IBM single sign-on solution to secure the portal and provide a seamless mechanism to track any changes made to the data in the form of audit trails..</li>
              <li>- Deploy a lightweight Java Messaging System over secured ESB channels to ensure that qualified internal court systems can share data and access with FAS without fear of threats to data integrity and security.</li>
              <li>- Leverage SOA (Service Oriented Architecture) based application architecture for greater integration flexibility with other court systems and external interfaces.</li>
              <li>- Develop components that conform to industry standard architecture norms and follow best practices to ensure code reusability.</li>
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
            >A re-engineered enterprise portal which reduced the court’s dependency on mainframe systems and eliminated multiple risks related to governance and compliance. Designed for security, the portal advanced the legacy system 30 years and is an extensible and scalable modern solution with reusable components to meet current and future business needs.</p>
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
  name: "WorkFinancePortal",
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
  background-image: url(../assets/background/work-large/finance-portal.jpg)
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
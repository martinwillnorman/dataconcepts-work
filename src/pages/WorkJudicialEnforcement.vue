<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Courts Of Virginia" kicker="Judicial Enforcement Management System.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="The Courts of Virginia is comprised of all courts in thirty-one judicial circuits, general district and juvenile and domestic relations district courts, and Magistrates in offices in thirty-two districts across the Commonwealth of Virginia."
          />
          <Spacer/>
          <WorkRole>
            <li>Java/JEE</li>
            <li>IBM Websphere</li>
            <li>Enterprise Architecture</li>
            <li>Data Warehousing</li>
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
            >The Judicial Enforcement Management System [JEMS] was a siloed case management system which manually handled day to day processes and workflows.</p>
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
            >E-FILING SYSTEM FOR THE COURTS OF VIRGINIA – THE FIRST IN THE COUNTRY</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >JEMS is a flexible and configurable product, where courts can “set and forget” business rules to remove the human variable from many routine court tasks. With the ability to automate business processes for municipal, county, state and provincial government courts, JEMS is a one-size-fits all tool that benefits all those working in the court.</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- Workflow was streamlined with document management, automatic sequencing of actions, accelerated task performance, docket management, conflict resolution, the ability to set vacation notices, track aging cases, receive payments, issue warrants, generate forms, and print reports directly from JEMS.</li>
              <li>- JEMS simplified the case process with its capability to initiate, maintain, track, dispose, and calendar cases with ease.</li>
              <li>- Judges receive real-time mobile access to cases and calendars and can add secure notes to cases or send off instructions to administrative staff on letters to attorneys and prosecutors.</li>
              <li>- With CSDC’s e-Filing application, attorneys enjoy the convenience of filing cases online, right from their offices – JEMS even collects the payments.</li>
              <li>- With the JEMS docket scheduling system you can: create complex case dockets, schedule dockets using Microsoft Outlook™, and view and update cases in real-time.</li>
              <li>- JEMS allows you to access common data, such as warrants, and party biographies, and set up security levels, restrict access, and edit options for individuals and departments, so everyone can use the same system.</li>
              <li>- JEMS guides court clerks step-by-step through every process, which minimizes training and errors. The result is that you dramatically improve your efficiency and accuracy by using a system that helps workflows and courtroom processing.</li>
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
            >Our product, Judicial Enforcement Management System [JEMS] is an integrated case management software that automates all common procedures in the court. JEMS helps the courts automate their processes and workflows while applying the court’s unique business rules, easily share data with other law agencies, manage documents, enable electronic filings, and help citizens pay online.</p>
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
  background-image: url(../assets/background/work-large/judicial-enforcement.jpg)
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
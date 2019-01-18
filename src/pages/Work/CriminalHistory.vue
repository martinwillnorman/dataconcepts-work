<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Virginia State Police" kicker="Computerized Criminal History.">
        <div v-parallax="0.4" class="cover-image service-header-image tinted"></div>
      </Hero>

      <Summary
        content="Virginia State Police [VSP] is a statewide law enforcement agency for the Commonwealth of Virginia."
      >
        <Role>
          <li>Migration Vision from Legacy to Open system.</li>
          <li>Solutions Architect.</li>
          <li>Lead Software Development.</li>
          <li>Documentation and Source Code.</li>
          <li>Core Java 1.8.</li>
          <li>Java based Spring Boot framework.</li>
          <li>Java based Spring Batch framework.</li>
          <li>Java based Spring Security framework.</li>
          <li>Atomikos for Distributed transaction management.</li>
          <li>Angular Js.</li>
          <li>Jquery.</li>
          <li>Bootstrap 3.x.</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p data-aos="fade-up" data-aos-duration="600" class="text-white">
          The legacy Computerized Criminal History (CCH) application uses proprietary technology and multiple
          software products, thus creating complicated and costly enhancements and maintenance efforts.
          Additionally, support for the proprietary technology is offered by only one small vendor which places the
          Virginia State Police at risk. The risk to the Agency is further exacerbated by the difficulty of finding
          qualified resources with the skill sets required to maintain the legacy CCH application . The impact of this
          is difficulty implementing new features, legislative mandates or architecture changes.
          The system is capable of handling more than a million transaction per day, providing data transfer and
          interaction across different legacy and federal systems.
          Total of 12 Daily, weekly and monthly job processes make up to approximately 1.3 million transactions in
          a month.
        </p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">Rearchitecture of a Legacy Application</p>
      </SolutionHeader>

      <Solution>
        <p data-aos="fade-up" data-aos-duration="600">
          Data Concepts teamed up to strategize the complete migration of the existing legacy system to an open
          architecture-based system. A replacement CCH application offers productivity improvements for VSP
          business users, creating satisfied customers owing to reduced decision-making turnaround times.
        </p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>
            - Web browser User Interface designed using HTML 5, advanced Javascript frameworks like
            Angular Js and CSS technology.
          </li>
          <li>- Java Middleware module to process Name Search, Search Results and fingerprint data response.</li>
          <li>
            - Total of 12 deployable Spring batch Module for processing court dispositions and different
            external queries from federal systems against criminal history records.
          </li>
          <li>
            - JMS queue processing modules to integrate and communicate between interdependent systems
            to store the accurate response.
          </li>
          <li>- Project source code and documentation.</li>
          <li>- Customizable reports that support a variety of document formats.</li>
          <li>- Comprehensive auditing capabilities to track any and all case inquiries and updates.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p data-aos="fade-up" data-aos-duration="600">
          In terms of the technology stack and approach, this system was built from scratch, putting open source
          technology at the front. This gives immense cost savings, provides more control over technology and
          makes it secure as never before.
        </p>
        <br>
        <p>
          The successful solution provided by Data Concepts was an application built on open standards using
          industry-wide, Virginia State Police best-practices which provide the following benefits:
        </p>
        <ul class="text-white outcome-list">
          <li>- Enhanced usability (screen design and workflows).</li>
          <li>- Well defined workflows.</li>
          <li>- Reduce maintenance costs.</li>
          <li>- Open/independent architecture.</li>
          <li>- Federation with VSP Sign-On.</li>
          <li>- Reusability.</li>
          <li>- Scalability.</li>
          <li>- Service Oriented Architecture.</li>
          <li>- Enhanced failover capabilities.</li>
          <li>- Better scalability and extensibility, allowing for better maintainability in the years ahead.</li>
          <li>- An open architecture that is compliant with industry and VITA standards.</li>
        </ul>
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
  name: "CriminalHistory",
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

.service-header-image
  background-image: url(../../assets/background/work-large/police.jpg)
  background-position: center 0%

#first
    background-color: #ffc200

.challenge-header
    font:
        size: 1.8rem
    color: #ffc200
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #ffc200

.solution-header:after
    background-color: #ffc200

.outcome-list
    padding-left: 20px
    columns: 2
    margin-top: 40px

.outcome-list li
    line-height: 2
    font:   
        size: 1rem
        weight: 400
        family: $font-body

</style>
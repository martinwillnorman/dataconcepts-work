<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Estes Trucking" kicker="Performance Improvement.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Our client, one of the top 25 carriers in the transportation industry, provides full-service freight transportation and is the largest privately held less-than-truckload (LTL) company in the United States."
      >
        <Role>
          <li>Migration</li>
          <li>Application Development</li>
          <li>Spring</li>
          <li>Angular</li>
          <li>Automation</li>
          <li>Jenkins</li>
          <li>Java</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 data-aos="fade-up" data-aos-duration="600" class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          class="text-white"
        >The centralized web portal that received over 100,000 hits per day by the clients of the company was unable to scale due to the constraints of WebSphere v6.1 Express installed on IBM iSeries hardware using Java 1.5. This bottleneck affected the performance of 43 critical customer facing web applications that supported functionalities like shipment tracking, rate calculations, document services, pickup scheduling, claims, and inquiry management. Frequent outages meant there was an urgent need to migrate all customer-facing applications to a scalable infrastructure and optimize the web applications to improve performance and provide an easy deployment pathway.</p>
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
        >A SCALABLE INFRASTRUCTURE TO GROW WITH THE CLIENT</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Being in a high growth phase with constantly evolving business models, our client required scalable deployment infrastructure architecture, performance improvements in the existing web applications and deployment automation for web applications. Taking into account the client’s existing IT skill set, project timelines and IT investments, Data Concepts proposed the following solution:</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Migrate the web applications to a clustered WebSphere v8.0 ND environment on Red Hat Enterprise Linux to solve the scalability problem.</li>
          <li>- Implement the business needs through a new enterprise web application using Java and latest technologies like Spring MVC, Spring Security, Spring Framework, Maven, OpenJPA, JMS, AJAX, JSP, log4j, PDF and Excel open source frameworks, and WebSphere Distributed Cache.</li>
          <li>- Develop a responsive UI application for route planners using latest Angular 2, HTML5, Bootstrap, CSS3 and extensively using middle tier Restful API services.</li>
          <li>- Utilize the Java 1.6 version support of WebSphere v8.0 Application Server and migrate all web applications from Java 1.5 to Java 1.6.</li>
          <li>- For deployment automation, write ant build script for each web application and integrate it with Jenkins. Configure Jenkins to integrate with Enterprise Active Directory for user authentication, integrate with SVN version control for application build management, perform automated staging and deployment of applications to WebSphere Application Server, and provide build notifications to respective teams with relevant artifacts.</li>
          <li>- Refactor the code base to utilize WebSphere Application Server datasource capabilities instead of manual database connection management.</li>
          <li>- Externalize all application environment-related properties and load them on application startup, so that QA approved EAR files can be promoted to UAT and then to PROD without changes.</li>
          <li>- Use WebSphere distributed clustered cache with cache replication to manage application data caching requirements.</li>
          <li>- Implement Apache log4j logging framework to effectively capture application logs.</li>
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
        >Data Concepts successfully implemented the solution, resulting in a 40% application performance improvement. The upgrade and changes have been running since, with virtually no outages reported. The Jenkins integration streamlined the web application deployment, and enhanced application logging capabilities enable rapid identification and remediation of application issues.</p>
      </Outcome>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Hero from "../components/Hero.vue";
import Summary from "../components/Summary.vue";
import Challenge from "../components/Challenge.vue";
import Role from "../components/Role.vue";
import SolutionHeader from "../components/SolutionHeader.vue";
import Solution from "../components/Solution.vue";
import Outcome from "../components/Outcome.vue";

export default {
  name: "EstesImprovement",
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
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/work-large/estes-improvement.jpg)
  background-position: center

#first
    background-color: #ca0853

.challenge-header
    font:
        size: 1.8rem
    color: #ca0853
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #ca0853

.solution-header:after
    background-color: #ca0853

</style>
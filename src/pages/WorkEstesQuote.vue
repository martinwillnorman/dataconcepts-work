<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Estes Trucking" kicker="Quote Generation System.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="Our client, one of the top 25 carriers in the transportation industry, provides full-service freight transportation and is the largest privately held less-than-truckload (LTL) company in the United States."
          />
          <Spacer/>
          <WorkRole>
            <li>Application Development</li>
            <li>UI/UX</li>
            <li>Spring</li>
            <li>Jenkins</li>
            <li>Active Directory</li>
            <li>JavaScript</li>
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
            >To maximize their network of trucks, the client wanted to venture into moving personal household goods for longer distances. This new service was expected to provide cost-effective coast-to-coast moving services that saves individuals money by packing and loading everything onto a moving trailer driven by licensed and experienced truck drivers. The client wanted to provide customers with a responsive and easy to use web application to automatically generate and modify a quote, apply promotions, search moves, reserve a move, track the progress of a move and view any historical quote.</p>
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
            >A RESPONSIVE, SCALABLE APPLICATION TO INTRODUCE THEIR NEW SERVICE</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >Our client required a highly available, full-featured, immediately responsive and scalable enterprise web application to manage and grow their footprint in this new venture. Taking into account the client’s existing IT skill set, project timelines and IT investments, Data Concepts proposed the following solution:</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- Develop a responsive customer facing web application implementing the critical requirements.</li>
              <li>- Develop an Enterprise web application using Java with the latest technologies like Spring MVC, Bootstrap, Spring Security, Spring Batch, Spring Framework, Maven, OpenJPA, JMS, AJAX, JSP, log4j, PDF and Excel open source frameworks, and WebSphere Distributed Cache.</li>
              <li>- Develop an intranet web application with the same functionality of the web application so the customer service team can aid clients by phone or submit requests on their behalf.</li>
              <li>- For data privacy, deploy the application using database and application server instance installed in an on-premise infrastructure. Implement Spring Security to manage user authentication and authorization using on-premise Active Directory.</li>
              <li>- Provide high availability and scalability by deploying the web application in a clustered WebSphere v8.0 ND environment installed on Red Hat Enterprise Linux. Deploy the outside-facing web application and the intranet web application on separate clusters to maintain high availability.</li>
              <li>- For deployment automation, use Maven to generate enterprise application archive files and integrate it with Jenkins for build automation and automated deployments to the target application server.</li>
              <li>- To quickly serve any static contents for a customer-facing web application like images, videos, JavaScript, html, etc., and deploy and serve static content from Clustered IBM HTTP Server.</li>
              <li>- For rapid expansion and marketing, expose secured APIs to 3PL companies for creating, reserving and tracking a move.</li>
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
            >A new enterprise customer facing web application and intranet support web application was developed by Data Concepts accomplishing all the business requirements and was the key to attract a new line of business. The integration with 3PL companies drove a 100x increase in traffic to the application. The customer support application proved to be extremely useful to quickly resolve customer issues and increase confidence for the new service. The company has recorded exponential increase in the revenue from the new venture and has been able to significantly increase its resource utilization outcomes.</p>
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
  background-image: url(../assets/background/work-large/estes-quote.jpg)
  background-position: center

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

</style>
<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image tinted"></div>
        <div class="container">
          <div class="row">
            <div @click="scrollDown" class="show-more">
              <svg
                data-aos="fade-down"
                data-aos-duration="600"
                fill="#fff"
                version="1.1"
                id="Ebene_2_1_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="53px"
                height="20px"
                viewBox="0 0 53 20"
                enable-background="new 0 0 53 20"
                xml:space="preserve"
              >
                <g>
                  <polygon
                    points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"
                  ></polygon>
                </g>
              </svg>
            </div>
            <div class="column col-2 no-content"></div>
            <div class="column col-4 responsive-8 responsive-12 center-content">
              <ServiceHeader title="Cloud Data Lake" kicker="Business Transformation."/>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="Since its founding 80 years ago, our client has provided insurance and financial services to credit unions and their members. They sought to transform their business model to include direct-to-consumer [DTC] sales."
          />
          <Spacer/>
          <WorkRole>
            <li>Analytics Development</li>
            <li>AWS Migration</li>
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
            >The company turned to Data Concepts to overhaul their entire approach to data, which included migrating their on-premise systems to the cloud and transforming from a B2B to a DTC model. The firm lacked an enterprise-wide data strategy, which hindered their ability to use member and policyholder data to personalize the customer experience. In particular, they suffered from siloed data systems that were difficult to integrate, manage and support. Inconsistent data definitions and the absence of cohesive data governance meant that mission-critical reports were unaligned with business needs.</p>
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
            >A CLOUD DATA LAKE WITH FULL ANALYTICS CAPABILITIES</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >We began by assessing the firm’s big data and cloud analytics platform requirements and evaluating the best-fit technologies for their consumer data warehouse. We defined the reference architecture for a cloud data lake, their new analytics platform, as well as tools for analysts to develop and execute models, perform data discovery activities and create visualizations. With the data environment established, we operationalized its capabilities by using call center data to capture, enrich and prioritize marketing leads. Lastly, we created analytics and innovation sandboxes to allow data scientists to quickly build models and score them against full datasets.</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- The data lake provides uniform data across applications and platforms within the enterprise system.</li>
              <li>- Analytics became streamlined and powerful due to resolution of data consistency issues.</li>
              <li>- New data could become incorporated and used with little to no processing or uptime.</li>
              <li>- Innovation was bolstered by implementing sandboxes, ensuring a perpetual business edge.</li>
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
            >Data Concepts helped drive change from within, transforming the firm into an insights-driven organization. They are now able to operationalize insights and turn them into measurable business outcomes. Analytics maximized the value of each customer, with measurable results in just 60 days.</p>
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
import ServiceHeader from "../components/ServiceHeader.vue";
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
    ServiceHeader,
    WorkSummary,
    WorkChallenge,
    WorkRole,
    WorkSolutionHeader,
    WorkSolution,
    WorkOutcome
  },
  methods: {
    scrollDown() {
      document.getElementById("first").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.cover-image
  background-image: url(../assets/background/work-large/data-lake.jpg)
  background-position: center

#first
    background-color: #cb3694

.challenge-header
    font:
        size: 1.8rem
    color: #cb3694
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #cb3694

.solution-header:after
    background-color: #cb3694

</style>
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
              <ServiceHeader title="Jury Management System" kicker/>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="Since its founding 100 years ago, our client has provided insurance and financial services to credit unions and their members around the world. They sought to transform their business model to include direct-to-consumer [DTC] sales."
          />
          <Spacer/>
          <WorkRole>
            <li>Analytics Development</li>
            <li>AWS Platform Migration</li>
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
            >TAKE THE HEADACHE OUT OF THE JURY PROCESS</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >With Jury Management System (JMS), many of the common pain points when selecting jurists are eliminated.</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- Shorten check-in time when jurors are excused, or deferred online.</li>
              <li>- Reduce telephone calls to the clerk.</li>
              <li>- Streamline judge and juror interaction when the judge disqualifies online.</li>
              <li>- Fewer jurors report absent.</li>
              <li>- Reduces number of clerks requiredReduces number of clerks required.</li>
              <li>- Prospective jurors receive immediate responses to questions online.</li>
              <li>- Customized websites educate jurors about the jury process.</li>
              <li>- Online disqualifications and deferrals reduce jurors reporting absent.</li>
              <li>- Reduces citizen trips to the courthouse.</li>
              <li>- Shortens lines at check-in.</li>
              <li>- Reduces waiting in the courtroom.</li>
              <li>- JMS can handle payroll records for court staff. You can base the payroll on the number of days served. The system generates reports for verification, prints juror checks, and tracks payment history.</li>
              <li>- JMS recognizes prior services of a juror regardless of the jurisdiction, excludes the juror for selection, for the defined number of days.</li>
              <li>- Retain a complete juror history for multiple years.</li>
              <li>- Eliminate the need to pay jurors for services, before loading new juror data.</li>
              <li>- Track the status of jurors.</li>
              <li>- Respond to inquiries, quickly.</li>
              <li>- Determine whether a juror has been summoned, is active on a panel, has been disqualified, transferred, or excused.</li>
              <li>- Store the complete juror biography.</li>
              <li>- Make custom reports.</li>
              <li>- Speed up check-in by scanning bar-coded summons.</li>
              <li>- Generate forms and notices that the court designs.</li>
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
            >Faster time to insight. Advanced analytics resulted in a more tailored customer experience. Reports became meaningful guides to organizational decision-making. Better customer identification and targeting of DTC marketing. $1.5 M annual increase in projected revenues. Data Concepts helped drive change from within, transforming the firm into an insights-driven organization. They are now able to operationalize insights and turn them into measurable business outcomes. Analytics maximized the value of each customer, with measurable results in just 60 days.</p>
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
  background-image: url(../assets/background/work-large/jury-management.jpg)
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
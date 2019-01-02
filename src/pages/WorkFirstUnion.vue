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
              <ServiceHeader title="First Union Bank" kicker="Crowd-Sourcing Web Portal."/>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block" id="first">
        <div class="container">
          <WorkSummary
            content="Data Concepts’ banking client is one of the largest community banks headquartered in Virginia. It offers traditional, freestanding banking locations as well as full-service in-store locations in certain grocery stores in Virginia."
          />
          <Spacer/>
          <WorkRole>
            <li>.Net</li>
            <li>SharePoint</li>
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
            >Our client’s philosophy is that nobody knows better how to do their job than the employees actually filling the roles. They sought to develop an internal organizational crowdsourcing portal that would provide their associates with the ability to share, foster and receive feedback on insights to drive workplace innovation and keep the organization in alignment with business needs and best-practices.</p>
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
            >A CUSTOM WEB PORTAL TO PROMOTE EMPLOYEE ENGAGEMENT</p>
          </WorkSolutionHeader>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <WorkSolution>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
            >Data Concepts built a custom web portal for the client to provide an enterprise platform to promote employee engagement by harnessing employee ideas. The product was built using .Net Framework, SharePoint APIs and Service Applications. The portal offered group- and role-based customizations and features. Data Concepts worked closely with the customer stakeholders to build a system with a very attractive and intuitive UI to ensure maximum participation by the company employees. The portal functional highlights included:</p>
            <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <li>- Personalized Idea Lab Homepage.</li>
              <li>- Posting an Idea & answering challenges.</li>
              <li>- Search Duplicates.</li>
              <li>- Crowdsourcing by voting & comments.</li>
              <li>- Idea filtering & Search.</li>
              <li>- Configure keywords for matching ideas.</li>
              <li>- Leaderboard.</li>
              <li>- Responsive UI for desktops, tablets & smartphones.</li>
              <li>- Points system & Bonus points.</li>
              <li>- Idea Promotion.</li>
              <li>- Configure departments & Subject Matter Experts.</li>
              <li>- Configure departments & Subject Matter Experts.</li>
              <li>- Manage static content & navigation.</li>
              <li>- Add Challenges.</li>
              <li>- Backup timer job with PowerShell scripts.</li>
              <li>- Web analytics for reporting.</li>
              <li>- Custom reports with download features.</li>
              <li>- Activities and events logging.</li>
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
            >The Ideation Crowd Sourcing portal has been deployed in production for over a year and is fully embraced by the user community.</p>
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
  background-image: url(../assets/background/work-large/first-union.jpg)
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
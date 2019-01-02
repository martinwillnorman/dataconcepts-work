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
              <ServiceHeader title="Digital Strategy" kicker="Reinventing for a digital future."/>
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Digital Strategy"
            content="Enterprises today have access to unprecedented volumes of data, originating from social media, connected devices, as well as transactional data and enterprise data sets. With smart strategies and the right Big Data solutions, they can convert this huge treasure-trove of data into a core strategic asset. Digital is evolving to connect everyone and everything, to digitize transactions and interactions, to become more contextual, more predictive, more cognitive. That puts Insights & Data at the heart of Digital. At Data Concepts, we are Delivering Insights at the point of action."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Digital Strategy Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  title="Cloud Strategy"
                  content="Unite key stakeholders and understand the key elements of cloud adoption."
                />
                <SubService
                  title="Cloud Planning"
                  content="Create a step-by-step action plan and strategy for migrating to the cloud."
                />
                <SubService
                  title="Cloud Migration"
                  content="Applications and data are securely migrated to the new target environment."
                />
                <SubService
                  title="Cloud Optimization"
                  content="Improve the reliability, security, and ROI of your cloud environment."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block slant-3">
        <div class="container">
          <div class="row">
            <div class="column col-5 responsive-12">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header left"
              >Roadmap: The Digital Strategy Journey</h1>
            </div>
          </div>
          <SubJourney
            title="Elevating Agility to C-Suite"
            content="Elevating agility to a strategic C-suite objective fosters a cultural change that ripples through the whole organization. It changes the mindset from thinking of projects as discreet events to thinking of them as part of a greater journey toward a more responsive and efficient organization. Organizations that adopt agility as a core strategic tenet worry about the basic underlying assets that allow them to iterate and learn faster. They invest in enabling capabilities that many organizations see as high cost with uncertain returns. Agile organizations realize these investments un-bottleneck everything they do, and create byproducts from ongoing projects that make future change faster and easier."
          ></SubJourney>
          <SubJourney
            title="Understand and Explore Digital Possibilities"
            content="In this phase, our team of consultants and subject matter experts help you explore and understand the digital possibilities in your business environment. To achieve effective digital outcomes, you need a macro view of your business landscape. We achieve this by reviewing your business models, customer preferences, your employees and their processes, your partner ecosystem and your competitors’ digital initiatives. With this in-depth view in hand,we help you evaluate the impact of digital initiatives and how they can be strategically used to increase your overall business value. We then isolate and define the digital initiatives that are best aligned to your unique business strategies and desired outcomes."
          >
            <ul>
              <li>Understand the macro business landscape.</li>
              <li>Evaluate current-state business functions and delivery models.</li>
              <li>Identify candidates for digital use cases.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Digital Experience Journey Mapping"
            content="This phase explores the art of the possible. It dives deeper into the digital transformation process by helping you define the strategies required for you to implement initiatives and the appropriate key performance indicators (KPIs) to measure success. Digital experience journey maps are created during this phase. Journey maps illustrate the impact revised processes will have on your organization internally and externally, detailing the new digital customer and employee experience from start to finish. For example, if a hospital wants to enhance the patient experience, we can help them visualize a digital future state by building an end-to-end customer journey map."
          >
            <ul>
              <li>Define a future-state vision and the appropriate KPIs for your digital initiatives.</li>
              <li>Assess the impact of digital through journey maps Determine key digital initiatives.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Prototype and Measure the Full Solution"
            content="During this phase, we help you further evaluate digital initiatives by building out detailed architectural prototypes. These mock-ups take into account relevant business processes, people management and technology requirements, as well as potential ROI. Each prototype is supported by examples of digital initiatives in action to show you the true value of the proposed solution. In this phase, a hospital’s new digitally- enabled patient experience translates into practical solutions."
          >
            <ul>
              <li>Prototype digital ideas and evaluate real-world impact.</li>
              <li>Document required digital technology architecture.</li>
              <li>Advance the best course of action based on ROI.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Plan and Prepare for Implementation"
            content="In this phase, we assess and prioritize your projects by how much impact each transformation will have on your business operations. This helps inform business continuity and allocate your resources for executing digital programs across your enterprise. We then define the policies and governance mechanisms that will ensure success and incorporate any risk and compliance measures. Our team of experts will also help you determine what new skills will be required and show you how to develop training programs to get your staff up to speed."
          >
            <ul>
              <li>Identify the right resources and plan for execution.</li>
              <li>Define policies and governance mechanisms.</li>
              <li>Establish the path to achieve successful digital initiatives.</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Execute the Vision: Analytics, Mobility & Solutions"
            content="During the final phase, we help you execute your digital vision, backed by our proven experience implementing digital technologies across the globe. Our experts can also guide your staff in project management tasks and help you execute your new initiatives."
          ></SubJourney>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Related</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper related-wrapper">
                <RelatedBox
                  link="/insights/information-architecture"
                  category="Insight"
                  title="Information Architecture Strategy"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/bi-data-warehousing"
                  category="Insight"
                  title="Business Intelligence & Data Warehousing"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/digital-landscape"
                  category="Insight"
                  title="The Modern Digital Landscape"
                ></RelatedBox>
                <RelatedBox link="/services/data-strategy" category="Service" title="Data Strategy"></RelatedBox>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkTogether/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import ServiceHeader from "../components/ServiceHeader.vue";
import ServicePromise from "../components/ServicePromise.vue";
import Spacer from "../components/Spacer.vue";
import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import WorkTogether from "../components/WorkTogether.vue";
import SubJourney from "../components/SubJourney.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "DigitalStrategy",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    ServiceHeader,
    ServicePromise,
    SubService,
    ServiceAsideRight,
    ServiceAsideLeft,
    ServiceLeft,
    ServiceRight,
    WorkTogether,
    SubJourney,
    RelatedBox
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
  background-image: url(../assets/background/services-large/digital-strategy.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

.reg-link
  margin: 20px 0 0
</style>

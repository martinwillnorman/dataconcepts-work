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
              <ServiceHeader
                title="Master Data Management"
                kicker="Create and define the critical point of reference for all your data."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="MDM"
            content="Implementing a master data management strategy is key to improving your data. Proper master data management architecture is crucial for businesses that face data quality and consistency issues. A solid data management strategy will ensure that business-critical data is error-free and streamlined."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">MDM Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService title="d" content="d"/>
                <SubService title="d" content="d"/>
                <SubService title="d" content="d"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <ServiceLeft
            title="What is MDM?"
            content="Master Data Management (MDM) refers to the process of creating and managing data that an organization must have as a single master copy, called the master data. Poor Master Data Management Can Lead to Major Quality Issues A range of applications within a business uses a company’s master data. Failing to manage data can have a detrimental chain-reaction effect on a business’s general operations. An error in customer master data, for example, could lead to bills or deliveries being sent to the wrong organization, impacting your business reputation and negatively effecting your bottom-line."
          />
          <ServiceRight
            title="How to Implement MDM?"
            content="Our precise master data management strategy and roadmap ensures that data is consistent, complete and contextual. Master data management benefits include improved accessibility of accurate business data for systems and stakeholders across the enterprise. Holistic Approach to Master Data Management We take a holistic view of master data management. It is a framework of people, processes and technology that help to manage the information that is deeply embedded in our businesses. "
          />
          <ServiceLeft
            title="How to Get Started?"
            content="Whether your business requires a single master data management system to master your customers or products, or a complete enterprise MDM solution using SAP, Oracle we will craft a solution to address the specific needs of your organization."
          ></ServiceLeft>
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

export default {
  name: "MasterDataManagement",
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
    WorkTogether
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
  background-image: url(../assets/background/services-large/mdm.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

.reg-link
  margin: 20px 0 0
</style>

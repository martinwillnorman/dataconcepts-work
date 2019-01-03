<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Mobility"
        kicker="We build custom consumer mobile applications and enterprise mobility solutions across all major platforms."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Mobility"
            content="Mobile development refers to the creation of apps for use on devices such as tablets, smartphones, automobiles and watches. Mobile development often incorporates features of mobile devices that may not be available on desktop devices. An example of this is the ability to operate a device or play a game simply by moving the smartphone around in space. Another popular example is the augmented reality game Pokémon Go. Mobile apps are designed and built for different operating systems. The Android operating system is the most popular followed by Apple’s iOS."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Mobility Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService title="Native iOS and Android Applications" content="Description"/>
                <SubService title="Custom Mobile App Development" content="Descriptiond."/>
                <SubService title="Enterprise Mobility Applications" content="Description."/>
                <SubService title="Cross-Platform Mobile Apps" content="Description."/>
                <SubService title="Mobile Games" content="Description."/>
                <SubService title="UI/UX Design" content="Description."/>
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
              >Roadmap: The Mobility Journey</h1>
            </div>
          </div>
          <SubJourney
            title="Discovery and Business Analysis"
            content="Our cross-functional team scrutinizes the app’s initial concept. We study how the application addresses particular business objectives and solves users’ problems. Our mobile experts analyze the client’s business model and collaborate closely with client’s teams to identify the key challenges. We scrutinize the app’s target audiences and outline project development milestones."
          ></SubJourney>
          <SubJourney
            title="UX and Visual Design"
            content="We evaluate customer expectations and use cases of the application. At this stage, we define how user experience of the future app will help achieve project’s business objectives. Our team proceeds to UX concept development, wireframing, user interface mapping, and testing."
          ></SubJourney>
          <SubJourney
            title="Product Development"
            content="Our teams use Agile/Scrum methodologies to create an early working application, and then add features and improve the application with every iteration. Our mobile testers are involved at every stage of the development process to help identify improvement areas."
          ></SubJourney>
          <SubJourney
            title="Release and Support"
            content="Once the production version of the enterprise mobility solution is ready, we integrate it with organization’s business processes. As for consumer apps, our engineers launch them in mobile app stores. After the release, we help enterprises support and maintain mobile applications."
          ></SubJourney>
        </div>
      </section>
      <ServiceApproach title="Mobile Application Expertise">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                title="Mobile Development"
                content="Mobile development is an integral part of nearly every project. Our teams deliver native, hybrid, and cross-platform mobile products with particular focus on security, usability, and UI / UX. We collaborate with companies across various domains creating mobile applications for smartphones, tablets, and wearables. We dedicate development teams deliver top value for every outsourced mobile development solution. Our teams have over ten years of experience in enterprise mobility, as well as strong expertise in iOS, Android, Unity, and Unreal Engine platforms."
              ></SubApproach>
              <SubApproach
                title="Development of Native Mobile Applications"
                content="Our teams help enterprises build intuitive native mobile applications. As an example, We dedicated development center created four mobile applications for FaceDrive, a ride-sharing service in Canada. We developed native iOS and Android apps for drivers and passengers. Mobile development unit at our accumulated massive experience in native enterprise mobility solutions for logistics, industrial automation, and more. As an example, our team helps to build their warehouse management system, including iOS development and user experience design."
              ></SubApproach>
              <SubApproach
                title="100+ Projects of Different Size"
                content="Mobile product development is an integral part of nearly every project. We form strategic partnerships with many tech and non-tech companies, helping them solve various technological and business challenges."
              ></SubApproach>
              <SubApproach
                title="Diverse Portfolio in Various Industries"
                content="We have over a decade of experience in mobile product development. We have been creating mobile products for companies that operate in multiple industries, including financial services, healthcare, hospitality, communications, and real estate."
              ></SubApproach>
              <SubApproach
                title="Full-Cycle Mobile App Development"
                content="We cover the complete lifecycle of mobile app development. We help enterprises along the whole process of app creation, including conceptualization, UI/UX, graphic design, prototyping, development, quality assurance, and integration."
              ></SubApproach>
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
import Hero from "../components/Hero.vue";
import ServicePromise from "../components/ServicePromise.vue";
import Spacer from "../components/Spacer.vue";
import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import SubHeader from "../components/SubHeader.vue";
import SubJourney from "../components/SubJourney.vue";

export default {
  name: "ServiceMobility",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Hero,
    ServicePromise,
    SubService,
    ServiceAsideRight,
    ServiceAsideLeft,
    ServiceLeft,
    ServiceRight,
    ServiceApproach,
    SubApproach,
    WorkTogether,
    SubHeader,
    SubJourney
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/mobility.jpg)

#approach
  background-image: url(../assets/background/services-large/approach-8.jpg)

</style>

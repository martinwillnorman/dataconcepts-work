<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div id="cloud" v-parallax="0.4" class="cover-image tinted"></div>
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
                title="Cloud"
                kicker="We plan, architect, and build custom cloud environments so that you can migrate with confidence."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Cloud"
            content="Cloud adoption is a tremendous technical and operational challenge for most organizations. Based on our experience from several successful cloud projects, Data Concepts will help you confront the unknowns and accelerate IT transformation."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Cloud Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Cloud Strategy"
                  content="Unite key stakeholders and understand the key elements of cloud adoption."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Cloud Planning"
                  content="Create a step-by-step action plan and strategy for migrating to the cloud."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Cloud Migration"
                  content="Applications and data are securely migrated to the new target environment."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Cloud Optimization"
                  content="Improve the reliability, security, and ROI of your cloud environment."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <ServiceLeft
            title="Strategy, Assessment & Roadmap"
            content="We start by helping organizations define their own Journey to Cloud, providing industry-tailored insights and prioritizing planning so that you can maximize cloud capabilities in order to reach your most urgent business targets. We assess your business requirements and current technology to create an actionable plan."
          >
            <ul>
              <li>Cloud Application Strategy</li>
              <li>Business Goal Determination</li>
              <li>Application Migration Assessment</li>
              <li>Application Migration Planning</li>
              <li>Infrastructure Assessment And Planning</li>
            </ul>
          </ServiceLeft>
          <ServiceRight
            title="Cloud Transformation & Migration"
            content="We offer tools and processes to move and modernize applications, build new cloud-based apps and transform your architecture and infrastructure, helping ease the transition to a new technology operating model and culture by taking on the complexity. We securely migrate your applications to the cloud using automated tools."
          >
            <ul>
              <li>Cloud Infrastructure Transformation</li>
              <li>Cloud Native Custom Development</li>
              <li>Cloud Application And Modernization</li>
              <li>Cloud Migration Services</li>
              <li>DevOps Services</li>
              <li>Cloud Journey Management</li>
            </ul>
          </ServiceRight>
          <ServiceLeft
            title="Cloud Management & Optimization"
            content="In this phase, we become part of your company’s fabric, helping you to maximize value from your cloud investments. We offer a cloud management platform, tools that provide cost controls, governance & accountability, and help you evolve to a DevOps culture. We will continue to audit Cloud Security."
          >
            <ul>
              <li>Cloud Operations</li>
              <li>Security Operations</li>
              <li>Cloud Optimization Analytics</li>
              <li>Application Management</li>
              <li>Business Process Operations</li>
              <li>Governance</li>
            </ul>
          </ServiceLeft>
        </div>
      </section>
      <section class="content-block clear-bottom">
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
                <RelatedBox link="/work/" category="Work" title="Cloud Data Lake Transformation"></RelatedBox>
                <RelatedBox link="/services/iot" category="Service" title="Cloud Solution and IoT"></RelatedBox>
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
              >Roadmap: Journey to the Cloud</h1>
            </div>
          </div>
          <SubJourney
            title="Cloud Adoption Workshop"
            content="Align your technology leadership around a unanimous charter and establish an organization-wide action plan with our Cloud Adoption Workshop, a full day event that brings together our best cloud architects with your team for a facilitated discussion. Data Concepts is an approved AWS Delivery Partner."
          >
            <ul>
              <li>Unite stakeholders around common goals</li>
              <li>Identify key pain points and potential gaps in people, technology, and process</li>
              <li>Create a high-level action plan for cloud adoption</li>
              <li>Migration Planning</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Migration Planning"
            content="Gather the right intelligence on your existing systems and create a clear, comprehensive plan during a custom Migration Readiness & Planning engagement. Depending on the size and complexity of your cloud project, Data Concepts can help you collect and process data, assess workloads, prioritize applications for migration, and prepare your team for the cloud."
          >
            <ul>
              <li>Get expert advice on AWS services and 3rd party tools that are right for your applications</li>
              <li>Build best practices into your architecture from the ground up</li>
              <li>Ensure that your architecture adheres to official AWS Well-Architected Framework</li>
              <li>Migration Planning</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Minimum Viable Cloud"
            content="In this phase of adoption, we build out your AWS resources, networks, and tools and hand over a fully-configured Minimum Viable Cloud that is ready for your applications. Then we help you determine the best AWS or 3rd party tools to migrate your applications and data to the cloud securely."
          >
            <ul>
              <li>Get a custom-built cloud environment without having to hire an additional team</li>
              <li>Build a template for the Minimum Viable Cloud in order to easily repeat entire system</li>
              <li>Improve the security, reliability, and consistency of your system</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Cloud Migration"
            content="Cloud migrations can take many different forms, from carefully re-architecting applications to take advantage of next-generation platforms to using a “lift-and-shift” tool to automatically copying servers in bulk. Data Concepts will advise your team of available options and execute a migration strategy that optimizes effort and investment based on the desired end state."
          >
            <ul>
              <li>Select and utilize the latest migration tools</li>
              <li>Migrate quickly and securely to the public cloud</li>
              <li>Prioritize and project manage backlog for migration</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Well-Architected Review"
            content="Does your cloud infrastructure meet security, cost, availability and performance best practices? Let our Certified Engineers assess and remediate your cloud infrastructure to ensure that it is efficient, secure, and up to date with the latest cloud tools and practices."
          >
            <ul>
              <li>Assess your cloud against the AWS Well-Architected Framework</li>
              <li>Improve the cost, security, and performance efficiency of your cloud</li>
              <li>Rely on Data Concepts to remediate critical issues and get your cloud environment optimized</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="DevOps Automation Service"
            content="We help you lay the foundation for DevOps practices in the cloud with infrastructure automation, deployment automation, and configuration management."
          >
            <ul>
              <li>Build architecture templates</li>
              <li>Configure your environment for continuous deployment</li>
              <li>Implement a Docker container solution in AWS</li>
            </ul>
          </SubJourney>
          <SubJourney
            title="Cost Optimization"
            content="Our engineers take a deep-dive into your cloud billing history designed to uncover savings and improve Return-on-Investment. Save an average of 30% on your monthly budget."
          >
            <ul>
              <li>Removing unused instances, right-sizing</li>
              <li>Govern spending and monitor your billing in a single interface</li>
              <li>Automate scaling and fine-tune usage for high performance</li>
            </ul>
          </SubJourney>
        </div>
      </section>
      <ServiceApproach title="Cloud Technology">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 flex">
              <ServiceLeft
                class="text-white"
                title="Azure"
                content="Cloud-based business intelligence, predictive analytics, and the exponential volume of mobile, social and online information are not only driving agility, efficiency, and competitive advantage, but are also making it an imperative for enterprises to be in the ‘business of data.’ In these times of aggressive digital transformation, effective workload management is the need of the hour and Azure, by offering more than 100 cloud services to build, deploy, and manage a breath of workloads, does this and more."
              >
                <router-link class="reg-link white" to="/insights">Read More</router-link>
              </ServiceLeft>
              <ServiceRight
                class="text-white"
                title="AWS"
                content="AWS IaaS ‘on-click’ infrastructure services, built using CloudFormation templates and Lambda, provides a platform for significantly lower costs, faster innovation, and building a scalable Opex-based infrastructure. AWS Developer pipeline leveraging Code Build and Code Deploy ensures shorter release cycles on existing products and services. AWS PaaS services like IoT and API gateway provide a comprehensive set of services for organizations to very quickly design, build, and deploy APIs that connect and integrate multiple devices seamlessly."
              >
                <router-link class="reg-link white" to="/insights">Read More</router-link>
              </ServiceRight>
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
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import SubJourney from "../components/SubJourney.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "Cloud",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    ServiceHeader,
    ServicePromise,
    SubService,
    ServiceLeft,
    ServiceRight,
    ServiceApproach,
    SubApproach,
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
#cloud
  background-image: url(../assets/background/services-large/cloud.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

#approach
  background-image: url(../assets/background/services-large/approach-5.jpg)

.reg-link
  margin: 20px 0 0





</style>

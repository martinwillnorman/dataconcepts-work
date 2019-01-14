<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Cloud"
        kicker="We plan, architect, and build custom cloud environments so that you can migrate with confidence."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Cloud adoption is a tremendous technical and operational challenge for most organizations. Based on our experience from several successful cloud projects, Data Concepts will help you confront the unknowns and accelerate IT transformation."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Cloud Strategy"
          content="Unite key stakeholders and understand the key elements of cloud adoption."
        />

        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Cloud Planning"
          content="Create a step-by-step action plan and strategy for migrating to the cloud."
        />

        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Cloud Migration"
          content="Applications and data are securely migrated to the new target environment."
        />

        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Cloud Optimization"
          content="Improve the reliability, security, and ROI of your cloud environment."
        />
      </Services>

      <Definition subtitle="roadmap">
        <SubDefinition
          title="Cloud Adoption Workshop"
          content="Align your technology leadership around a unanimous charter and establish an organization-wide action plan with our Cloud Adoption Workshop, a full day event that brings together our best cloud architects with your team for a facilitated discussion. Data Concepts is an approved AWS Delivery Partner."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Unite stakeholders around common goals</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Identify key pain points and potential gaps in people, technology, and process</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Create a high-level action plan for cloud adoptiong</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Migration Plannin</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Migration Planning"
          content="Gather the right intelligence on your existing systems and create a clear, comprehensive plan during a custom Migration Readiness & Planning engagement. Depending on the size and complexity of your cloud project, Data Concepts can help you collect and process data, assess workloads, prioritize applications for migration, and prepare your team for the cloud."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Get expert advice on AWS services and 3rd party tools that are right for your applications</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Build best practices into your architecture from the ground up</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Ensure that your architecture adheres to official AWS Well-Architected Framework</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Minimum Viable Cloud"
          content="In this phase of adoption, we build out your AWS resources, networks, and tools and hand over a fully-configured Minimum Viable Cloud that is ready for your applications. Then we help you determine the best AWS or 3rd party tools to migrate your applications and data to the cloud securely."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Get a custom-built cloud environment without having to hire an additional team</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Build a template for the Minimum Viable Cloud in order to easily repeat entire system</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Improve the security, reliability, and consistency of your system</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Cloud Migration"
          content="Cloud migrations can take many different forms, from carefully re-architecting applications to take advantage of next-generation platforms to using a “lift-and-shift” tool to automatically copying servers in bulk. Data Concepts will advise your team of available options and execute a migration strategy that optimizes effort and investment based on the desired end state."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Select and utilize the latest migration tools</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Migrate quickly and securely to the public cloud</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Prioritize and project manage backlog for migration</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Well-Architected Review"
          content="Does your cloud infrastructure meet security, cost, availability and performance best practices? Let our Certified Engineers assess and remediate your cloud infrastructure to ensure that it is efficient, secure, and up to date with the latest cloud tools and practices."
        >
          <ul class="example-work-list">
            <li
              class="example-work-list-item"
            >Assess your cloud against the AWS Well-Architected Framework</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Improve the cost, security, and performance efficiency of your cloud</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Rely on Data Concepts to remediate critical issues and get your cloud environment optimized</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="DevOps Automation Service"
          content="We help you lay the foundation for DevOps practices in the cloud with infrastructure automation, deployment automation, and configuration management."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Build architecture templates</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Configure your environment for continuous deployment</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Implement a Docker container solution in AWS</li>
          </ul>
        </SubDefinition>

        <SubDefinition
          title="Cost Optimization"
          content="Our engineers take a deep-dive into your cloud billing history designed to uncover savings and improve Return-on-Investment. Save an average of 30% on your monthly budget."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Removing unused instances, right-sizing</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Govern spending and monitor your billing in a single interface</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li
              class="example-work-list-item"
            >Automate scaling and fine-tune usage for high performance</li>
          </ul>
        </SubDefinition>
      </Definition>

      <Capabilities subtitle="capabilities">
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Strategy, Assessment & Roadmap"
          content="We start by helping organizations define their own Journey to Cloud, providing industry-tailored insights and prioritizing planning so that you can maximize cloud capabilities in order to reach your most urgent business targets. We assess your business requirements and current technology to create an actionable plan."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Cloud Application Strategy</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Business Goal Determination</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Application Migration Assessment</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Application Migration Planning</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Infrastructure Assessment And Planning</li>
          </ul>
        </SubCapability>

        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Cloud Transformation & Migration"
          content="We offer tools and processes to move and modernize applications, build new cloud-based apps and transform your architecture and infrastructure, helping ease the transition to a new technology operating model and culture by taking on the complexity. We securely migrate your applications to the cloud using automated tools."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Cloud Infrastructure Transformation</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Cloud Native Custom Development</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Cloud Application And Modernization</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Cloud Migration Services</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">DevOps Services</li>
          </ul>
        </SubCapability>

        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Cloud Management & Optimization"
          content="We become part of your company’s fabric, helping you to maximize value from your cloud investments. We offer a cloud management platform, tools that provide cost controls, governance & accountability, and help you evolve to a DevOps culture. We will continue to audit Cloud Security."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Cloud Operations</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Security Operations</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Cloud Optimization Analytics</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Application Management</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Business Process Operations</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Governance</li>
          </ul>
        </SubCapability>
      </Capabilities>

      <InsightHighlight
        imagesource="../insight-images/space-7.jpg"
        link="/insights/cloud-application-development"
        title="Cloud Application Development"
      />

      <Technology subtitle="technology">
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Azure"
          content="Cloud-based business intelligence, predictive analytics, and the exponential volume of mobile, social and online information are not only driving agility, efficiency, and competitive advantage, but are also making it an imperative for enterprises to be in the ‘business of data.’ In these times of aggressive digital transformation, effective workload management is the need of the hour and Azure, by offering more than 100 cloud services to build, deploy, and manage a breath of workloads, does this and more."
        >
          <router-link class="reg-link" to="/services/microsoft-azure">Read More</router-link>
        </SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="AWS"
          content="AWS IaaS ‘on-click’ infrastructure services, built using CloudFormation templates and Lambda, provides a platform for significantly lower costs, faster innovation, and building a scalable Opex-based infrastructure. AWS Developer pipeline leveraging Code Build and Code Deploy ensures shorter release cycles on existing products and services. AWS PaaS services like IoT and API gateway provide a comprehensive set of services for organizations to very quickly design, build, and deploy APIs that connect and integrate multiple devices."
        >
          <router-link class="reg-link" to="/services/microsoft-azure">Read More</router-link>
        </SubTechnology>
      </Technology>

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Hero from "../components/Hero.vue";
import Promise from "../components/service/Promise.vue";
import Services from "../components/service/Services.vue";
import SubService from "../components/service/SubService.vue";
import Definition from "../components/service/Definition.vue";
import SubDefinition from "../components/service/SubDefinition.vue";
import Capabilities from "../components/service/Capabilities.vue";
import SubCapability from "../components/service/SubCapability.vue";
import InsightHighlight from "../components/service/InsightHighlight.vue";
import Footer from "../components/service/Footer.vue";
import Technology from "../components/service/Technology.vue";
import SubTechnology from "../components/service/SubTechnology.vue";

export default {
  name: "Cloud",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    Capabilities,
    SubCapability,
    InsightHighlight,
    Footer,
    Technology,
    SubTechnology
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/cloud.jpg)

</style>

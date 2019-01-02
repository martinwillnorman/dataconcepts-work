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
                title="Microsoft Azure"
                kicker="Modernize your IT infrastrucure with the help of Azure."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Azure"
            content="Azure is an enterprise-grade cloud service platform: a complete set of secure application services for computing, storage, data, networking, and app development. We can implement Azure on its own or leverage it for hybrid solutions that allow on-premises systems to integrate with cloud offerings, like Office 365. Data Concepts helps customers modernize their infrastructure and migrate applications and data to the Microsoft Azure cloud. Our Microsoft consulting services team will help you plan your cloud strategy."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Azure Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="AWS Migration & Strategy"
                  content="We conduct an in-depth assessment of your current systems and help you plan for migration to AWS cloud. At the end of this process, you receive the keys to a fully-configured, automated cloud environment that is ready to receive your application."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  title="AWS Technical Support & Monitoring"
                  content="Our Certified AWS Engineers take care of day-to-day IT operations for your cloud environment, partnering with your in-house engineers as an extension of your IT team."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="AWS Security & Compliance Management"
                  content="Data Concepts is a leader in cloud security and compliance with 20+ years of experience in IT management for healthcare, financial services, and public sector clients."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="AWS DevOps Automation"
                  content="Data Concepts uses a mature, tested cloud DevOps framework that incorporates configuration management, continuous delivery techniques, and cloud-native analytics to build infrastructure that can adapt at the speed of business."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  title="Database Migration & Management"
                  content="Our database experts can migrate your databases and then take responsibility for managing your cluster in AWS. Our DBA team provides full-time equivalent service to support database clustering and replication, extending our 100% SLA to your database platform."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="AWS Cost Optimization"
                  content="We help customers keep cloud costs under control with monitoring and data-driven management, then reduce costs with alternative AWS instance types and advanced automation."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block slant-3">
        <div class="container">
          <div class="row padded-bottom">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header short"
              >Why Data Concepts?</h1>
            </div>
          </div>
          <ServiceLeft
            title="20+ Years of Experience"
            content="We have managed IT operations for risk-averse enterprises for over 20 years. This means that in addition to being an AWS Premier Partner with advanced DevOps capabilities, we can also help companies bridge the gap between legacy technology and practices and the cloud. We understand what it really takes to transform technology teams for the cloud."
          />
          <ServiceRight
            title="Security Expertise"
            content="Data Concepts specializes in managing IT operations for companies in healthcare, financial services, and government. We undergo multiple, independent annual assessments of our security practices, including HIPAA, SOC, and PCI-DSS, and are highly-experienced in preparing companies to meet security goals on the cloud."
          />
          <ServiceLeft
            title="Dedicated DevOps Team"
            content="Our DevOps Engineering Team has an average of 17 years of experience building and deploying enterprise-grade software and IT automation. If you need to deploy containers, automate infrastructure buildout, or build a custom CI/CD pipeline, our team can help."
          ></ServiceLeft>
        </div>
      </section>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-9 centered">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header text-white"
              >Managing the Business of Data on the Azure Cloud</h1>
            </div>
            <div class="column col-6 responsive-12">
              <div class="content-wrapper text-white">
                <p>Cloud-based business intelligence, predictive analytics, and the exponential volume of mobile, social and online information are not only driving agility, efficiency, and competitive advantage, but are also making it an imperative for enterprises to be in the ‘business of data.’</p>
                <br>
                <p>In these times of aggressive digital transformation, effective workload management is the need of the hour and Azure, by offering more than 100 cloud services to build, deploy, and manage a breath of workloads, does this and more. From simple microservices and internet-scale applications, to adding 120,000 subscriptions per month, Azure spans 42 global datacenter regions -- more than any other cloud provider.</p>
                <br>
              </div>
            </div>
            <div class="column col-6 responsive-12">
              <div class="content-wrapper text-white">
                <p>Common Azure workloads include .Net applications, SQL Server databases and DevTest environments, SharePoint collaboration, Office and Exchange productivity, and Big Data analytics. Azure uniquely enables data-driven, intelligent applications -- from image recognition to bot services. Its artificial intelligence services support deep learning and real-time analytics, and its market-leading security includes 50 compliance offerings, exceeding all other providers.</p>
                <br>
                <p>Your business depends on the security, availability, and performance of your applications and infrastructure. We give you access to the best engineers and tools to guarantee that your infrastructure is well-architected and operated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Related</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper related-wrapper">
                <RelatedBox
                  link="/insights/blockchain-world"
                  category="Insight"
                  title="Our Insights on the World of Blockchain"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/azure-migration"
                  category="Insight"
                  title="What is Your Azure Migration Strategy?"
                ></RelatedBox>
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
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "IoT",
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
    ServiceApproach,
    SubApproach,
    WorkTogether,
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
  background-image: url(../assets/background/services-large/cyber-security.jpg)
//   filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

.reg-link
  margin: 20px 0 0
</style>

<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Microsoft Azure"
        kicker="Modernize your IT infrastrucure with the help of Azure."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Azure is an enterprise-grade cloud service platform: a complete set of secure application services for computing, storage, data, networking, and app development. We can implement Azure on its own or leverage it for hybrid solutions that allow on-premises systems to integrate with cloud offerings, like Office 365. Data Concepts helps customers modernize their infrastructure and migrate applications and data to the Microsoft Azure cloud. Our Microsoft consulting services team will help you plan your cloud strategy."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="AWS Migration & Strategy"
          content="We conduct an in-depth assessment of your current systems and help you plan for migration to AWS cloud. At the end of this process, you receive the keys to a fully-configured, automated cloud environment that is ready to receive your application."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="AWS Technical Support & Monitoring"
          content="Our Certified AWS Engineers take care of day-to-day IT operations for your cloud environment, partnering with your in-house engineers as an extension of your IT team."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="AWS Security & Compliance Management"
          content="Data Concepts is a leader in cloud security and compliance with 20+ years of experience in IT management for healthcare, financial services, and public sector clients."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="AWS DevOps Automation"
          content="Data Concepts uses a mature, tested cloud DevOps framework that incorporates configuration management, continuous delivery techniques, and cloud-native analytics to build infrastructure that can adapt at the speed of business."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Database Migration & Management"
          content="Our database experts can migrate your databases and then take responsibility for managing your cluster in AWS. Our DBA team provides full-time equivalent service to support database clustering and replication, extending our 100% SLA to your database platform."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="AWS Cost Optimization"
          content="We help customers keep cloud costs under control with monitoring and data-driven management, then reduce costs with alternative AWS instance types and advanced automation."
        />
      </Services>

      <Definition subtitle="why data concepts">
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          title="20+ Years of Experience"
          content="We have managed IT operations for risk-averse enterprises for over 20 years. This means that in addition to being an AWS Premier Partner with advanced DevOps capabilities, we can also help companies bridge the gap between legacy technology and practices and the cloud. We understand what it really takes to transform technology teams for the cloud."
        />
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Security Expertise"
          content="Data Concepts specializes in managing IT operations for companies in healthcare, financial services, and government. We undergo multiple, independent annual assessments of our security practices, including HIPAA, SOC, and PCI-DSS, and are highly-experienced in preparing companies to meet security goals on the cloud."
        ></SubDefinition>
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Dedicated DevOps Team"
          content="Our DevOps Engineering Team has an average of 17 years of experience building and deploying enterprise-grade software and IT automation. If you need to deploy containers, automate infrastructure buildout, or build a custom CI/CD pipeline, our team can help."
        />
      </Definition>

      <InsightHighlight
        title="What is Your Azure Migration Strategy?"
        imagesource="../insight-images/lights-8.jpg"
        link="/insights/azure-migration"
      />

      <Related>
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          link="/insights/azure-migration"
          category="Microsoft Azure"
          title="What is Your Azure Migration Strategy?"
          summary="Most Enterprises are moving to the Cloud as a cost-effective means to develop, deploy and manage their infrastructure."
          imagesource="../insight-images/lights-8.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          link="/insights/azure-machine-learning"
          category="Machine Learning"
          title="5 Reasons Why We Love Azure ML for Machine Learning Solutions"
          summary="From virtual assistants to chatbots and automation to smart homes, Artificial Intelligent (AI) and Machine Learning have become prominent in our daily life."
          imagesource="../insight-images/lights-10.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          link="/insights/cloud-application-development"
          category="Cloud | Application Development"
          title="Cloud Application Development"
          summary="Data Concepts’ cloud application development offerings help you take an advantage of everything Microsoft Azure has to offer – from migrating lgacy applications to creating custom solutions which exploit the full value of the platform."
          imagesource="../insight-images/space-7.jpg"
        />
      </Related>

      <BlockText title="Managing the Business of Data on the Azure Cloud">
        <div class="column col-6 responsive-12">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper">
            <p>Cloud-based business intelligence, predictive analytics, and the exponential volume of mobile, social and online information are not only driving agility, efficiency, and competitive advantage, but are also making it an imperative for enterprises to be in the ‘business of data.’</p>
            <br>
            <p>In these times of aggressive digital transformation, effective workload management is the need of the hour and Azure, by offering more than 100 cloud services to build, deploy, and manage a breath of workloads, does this and more. From simple microservices and internet-scale applications, to adding 120,000 subscriptions per month, Azure spans 42 global datacenter regions -- more than any other cloud provider.</p>
            <br>
          </div>
        </div>
        <div class="column col-6 responsive-12">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            class="content-wrapper"
          >
            <p>Common Azure workloads include .Net applications, SQL Server databases and DevTest environments, SharePoint collaboration, Office and Exchange productivity, and Big Data analytics. Azure uniquely enables data-driven, intelligent applications -- from image recognition to bot services. Its artificial intelligence services support deep learning and real-time analytics, and its market-leading security includes 50 compliance offerings, exceeding all other providers.</p>
            <br>
            <p>Your business depends on the security, availability, and performance of your applications and infrastructure. We give you access to the best engineers and tools to guarantee that your infrastructure is well-architected and operated.</p>
          </div>
        </div>
      </BlockText>

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import InsightCard from "../../components/insight/InsightCard.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Definition from "../../components/service/Definition.vue";
import SubDefinition from "../../components/service/SubDefinition.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import Footer from "../../components/service/Footer.vue";
import BlockText from "../../components/service/BlockText.vue";

export default {
  name: "MicrosoftAzure",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    InsightHighlight,
    Related,
    InsightCard,
    Footer,
    BlockText
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/cyber-security.jpg)

</style>

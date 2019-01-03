<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Application Development"
        kicker="Modern software execution and mission agility requires continuous deployment of robust apps."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Application Development"
            content="Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency. Every app-building process follows the same steps: gathering requirements, designing prototypes, testing, implementation, and integration."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Application Development Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Application Development"
                  content="Follow defined, standardized methodologies to develop and maintain applications for open source, mainframe and other platforms."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Application Architecture"
                  content="Get the Benefits of Adaptive and Intuitive Applications. Are you ready to build a lasting, adaptable IT foundation to support growth and change?"
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Application Modernization"
                  content="Harness the full potential of your applications, simplify your IT environment and easily leverage cloud, mobility and virtualization."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Enterprise Applications"
                  content="Capitalize on your cloud and traditional enterprise applications by leveraging a comprehensive portfolio of lifecycle services."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Business Analysis"
                  content="Get consistent, predictable project results with our award-winning Business Analysis services."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Application Migration"
                  content="Changing business conditions and needs require constant vigilance in adapting your information systems to keep pace."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Mainframe Modernization"
                  content="We modernize mainframes that contain accumulated years of data, which requires creating intelligent systems, automated processes and digitizing the enterprise to respond to future needs."
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
              >The Six Key Application Areas</h1>
            </div>
          </div>
          <SubJourney
            title="Data"
            content="Harnessing the power of big data can be a challenge for traditional software and database companies. Understanding when and how to incorporate big data analysis into your strategy for growth is not always obvious, but critical."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
          <SubJourney
            title="Mobile"
            content="Customers are demanding increasingly more mobile solutions. For technology companies, a consumer-focused lens is unavoidable in product strategy: understanding consumer needs is key to drive growth."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
          <SubJourney
            title="Cloud"
            content=" As cloud adoption becomes widespread, its characteristic of enhancing business agility is driving demand. Investing wisely to achieve speed to market is as important to small pure-play organizations as it is to well-established enterprises."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
          <SubJourney
            title="Internet of Things"
            content=" The technology ecosystem is composed of a vast array of smart devices, applications and services. Understanding and evaluating the opportunities for growth can be overwhelming but are essential to thriving in this landscape."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
          <SubJourney
            title="Transition to Digital"
            content="When facing an evolving digital landscape with increasing modes and channels for distribution, we help clients determine where to strategically allocate investment and how to use analytics to understand how to reach the right customer segment with the right solution at the right time."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
          <SubJourney
            title="Customization of Data & Analysis"
            content="With the increasing availability and complexity of data and analytics, we help create customer-driven strategies by understanding how to best segment client markets, evaluate specific customer needs and generate the best product and go-to-market strategy to reach your target audience."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
          <SubJourney
            title="IT Performance Improvement"
            content="When IT underperforms, it hurts business performance and hinders innovation. A sluggish IT department limits a company's ability to adapt to shifting market demands, increases the time it takes to release new products and services, and damages customer satisfaction."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </SubJourney>
        </div>
      </section>
      <ServiceApproach title="Application Development Approach & Technology">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                title="Software Acceleration and DevSecOps"
                content="Our DevOps practice drives productivity and efficiency by automating your software delivery pipeline. Our purpose-built, open source tool stacks deliver fully automated continuous integration and continuous deployment pipelines for speed, agility, and bottom-line savings. We put the Sec in DevSecOps by practicing “shift left” security throughout our software development life cycle."
              ></SubApproach>
              <SubApproach
                title="Mission Software"
                content="Mission application development, systems re-engineering, and effective utilization of embedded, real-time software are capabilities essential to meeting your mission goals. Our portfolio includes ERP solutions and COTS software integration, plus IoT capability development, for contributing to battlespace superiority."
              ></SubApproach>
              <SubApproach
                title="Lean-Agile"
                content="With the fast-paced nature of technology, fielding secure systems rapidly has never been more important, and we relentlessly adopt, improve, and scale services. We help you achieve mission objectives by utilizing established frameworks and best practices that promote collaboration across the enterprise."
              ></SubApproach>
              <SubApproach
                title="COTS Software Integration"
                content="Mission application development, systems re-engineering, and effective utilization of embedded, real-time software are capabilities essential to meeting your mission goals. Our portfolio includes ERP solutions and COTS software integration, plus IoT capability development, for contributing to battlespace superiority."
              ></SubApproach>
              <SubApproach
                title="Intelligent Software"
                content="We have expert insights on tools and approaches for the practical integration of artificial intelligence/machine learning into existing software to create smart applications, blockchain solutions tailored for specific industries or common business challenges, and mobility applications that increase accessibility and productivity."
              ></SubApproach>
            </div>
          </div>
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
                  link="/insights/application-development-approach"
                  category="Insight"
                  title="Application Development: Our Approach"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/cloud-application-development"
                  category="Cloud | Application Development"
                  title="Cloud Application Development"
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
import SubJourney from "../components/SubJourney.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "ServiceApplicationDevelopment",
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
    SubJourney,
    RelatedBox
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/app-dev.jpg)

#approach
  background-image: url(../assets/background/services-large/approach-3.jpg)

</style>

<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Big Data" kicker="Empower your organization with data-driven insights.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Big Data"
            content="Big data analytics holds great potential for organizations that want to increase revenue and reduce cost. With big data you can go beyond traditional descriptive analytics and incorporate predictive and prescriptive analysis, which will help drive better decision-making. We help you rapidly deploy big data analytics solutions that integrate, store, manage, and protect your data."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Big Data Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Integrate & Access Your Data"
                  content="Analytics requires having availability to all data. This is possible by removing silos and consolidating all your data into a Data Lake. Incorporating diverse sources and unifying data types gives you richer insights that will drive better business outcomes."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Analyze Your Data"
                  content="Enhance your competitive edge with data driven decisions. Empower your end users with accelerated queries and reporting with anywhere, anytime, all-data analytics. Enable your organization with self-service analytics capabilities."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Eliminate Silos & Simplify"
                  content="Streamline to an enterprise-proven, scale-out platform for unstructured and structured data. Using a single volume is easy to manage without data migrations."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Optimize Storage"
                  content="With flexible deployment and protection capabilities, expand seamlessly to the cloud while being transparent to users and applications."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Use Analytics to Gain Insight"
                  content="Leverage Big Data Analytics & enable in-place analytics to discover actionable insights at the speed your business decisions require."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceAsideRight
        title="Big Data Opportunities"
        content="The IT department obviously plays a critical role in the organization’s efforts to effectively harness all of the potential of Big Data. By implementing a data analytics architecture, you enable business units to collaborate, breaking boundaries and eliminating duplication of efforts. In this process of transforming an organization’s information structure, the IT department gains stature as an expert consultant and trusted provider. United in purpose with the business side, you form a partnership that fosters success for your organization."
      />
      <section class="content-block">
        <div class="container">
          <ServiceLeft
            title="What is Big Data?"
            content="Because of advances in technology, the definition of Big Data has changed over the years. Yet, one thing that remains the same is that the amount of data is continuously growing at an extremely rapid rate. All data, in any form, that is used for gaining insight and generating value is considered Big Data."
          />
          <ServiceRight
            title="What is a Data Lake?"
            content="A Data Lake is scale-out storage for your Big Data. It allows for Big Data accessibility– via traditional and next-generation access methods– to enable in-place analytics. With a Data Lake, you can keep more data and keep it longer, making it essential for true Hadoop environments."
          >
            <router-link class="reg-link" to="/insights">Read More</router-link>
          </ServiceRight>
          <ServiceLeft
            title="What is Big Data Analytics?"
            content="Big Data Analytics is the practice of applying modern analytics software tools across data of all types, including unstructured, semi-structured, and structured data; as well as real-time/streaming and batch. At Data Concepts, we use Big Data Analytics is to discover insights and irregularities, and to enhance the understanding of business performance and customer behavior. These analytics-driven insights can be used to shape business outcomes, improve competitive advantage, enhance financial decisions and develop more concise projections for our Clients."
          ></ServiceLeft>
        </div>
      </section>
      <ServiceAsideLeft
        title="Big Data Transforms your Business"
        content="Empower your organization with deeper insights and enhanced data-driven decision-making by using the right infrastructure for the right data. With solutions that integrate, store, manage, and protect your data, you can rapidly deploy Big Data analytics applications."
      />
      <ServiceApproach title="Big Data Approach">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                title="Actionable Insights"
                content="Develop actionable insights and help identify and tackle problems."
              >
                <ul>
                  <li>Synthesis</li>
                  <li>Insights</li>
                  <li>Analysis</li>
                  <li>Reporting</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                title="Secure Architecture"
                content="Engineer secure data architectures, harness data from all sources, and synthesize it for analysis and action."
              >
                <ul>
                  <li>Data Architecture</li>
                  <li>Data Engineering</li>
                  <li>Mirroring</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                title="Dynamic Visualization"
                content="Powerful, real-time and dynamic visualization tools give us a new understanding of how your business runs."
              >
                <ul>
                  <li>Data Visualization</li>
                  <li>Data Analysis</li>
                  <li>Modeling</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
                title="Intelligence Development"
                content="Use AI and machine-learning to create intelligent customer experiences, tools, and services for your business and its customers."
              >
                <ul>
                  <li>Artificial Intelligence</li>
                  <li>Machine Learning</li>
                  <li>Feedback Looping</li>
                  <li>Optimization</li>
                  <li>Intelligent CX</li>
                </ul>
              </SubApproach>
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

export default {
  name: "ServiceBigData",
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
    WorkTogether
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/big-data.jpg)

#approach
  background-image: url(../assets/background/services-large/approach-1.jpg)

</style>
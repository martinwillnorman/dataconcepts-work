<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Big Data" kicker="Empower your organization with data-driven insights.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        content="Big data analytics holds great potential for organizations that want to increase revenue and reduce cost. With big data you can go beyond traditional descriptive analytics and incorporate predictive and prescriptive analysis, which will help drive better decision-making. We help you rapidly deploy big data analytics solutions that integrate, store, manage, and protect your data."
      />

      <Services>
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Identify Your Use Cases"
          content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Integrate"
          content="Analytics requires having availability to all data. This is possible by removing silos and consolidating all your data into a Data Lake. Incorporating diverse sources and unifying data types gives you richer insights that will drive better business outcomes."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Analyze"
          content="Enhance your competitive edge with data driven decisions. Empower your end users with accelerated queries and reporting with anywhere, anytime, all-data analytics. Enable your organization with self-service analytics capabilities."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Eliminate Silos & Simplify"
          content="Streamline to an enterprise-proven, scale-out platform for unstructured and structured data. Using a single volume is easy to manage without data migrations."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Optimize Storage"
          content="With flexible deployment and protection capabilities, expand seamlessly to the cloud while being transparent to users and applications."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Use Analytics to Gain Insight"
          content="Leverage Big Data Analytics & enable in-place analytics to discover actionable insights at the speed your business decisions require."
        />
      </Services>

      <Questions title="definition">
        <WhatIs
          title="Big Data"
          content="Because of advances in technology, the definition of Big Data has changed over the years. Yet, one thing that remains the same is that the amount of data is continuously growing at an extremely rapid rate. All data, in any form, that is used for gaining insight and generating value is considered Big Data."
        />
        <WhatIs
          title="Data Lake"
          content="A Data Lake is scale-out storage for your Big Data. It allows for Big Data accessibility– via traditional and next-generation access methods– to enable in-place analytics. With a Data Lake, you can keep more data and keep it longer, making it essential for true Hadoop environments."
        >
          <router-link class="reg-link" to="/insights">Read More</router-link>
        </WhatIs>
        <WhatIs
          title="Big Data Analytics"
          content="Big Data Analytics is the practice of applying modern analytics software tools across data of all types, including unstructured, semi-structured, and structured data; as well as real-time/streaming and batch. At Data Concepts, we use Big Data Analytics is to discover insights and irregularities, and to enhance the understanding of business performance and customer behavior. These analytics-driven insights can be used to shape business outcomes, improve competitive advantage, enhance financial decisions and develop more concise projections for our Clients."
        />
      </Questions>
      <Capabilities title="capabilities">
        <SubCapability
          title="Actionable Insights"
          content="Develop actionable insights and help identify and tackle problems."
        >
          <ul>
            <li>Synthesis</li>
            <hr>
            <li>Insights</li>
            <hr>
            <li>Analysis</li>
            <hr>
            <li>Reporting</li>
          </ul>
        </SubCapability>
      </Capabilities>
      <BigDataPlan></BigDataPlan>
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
// import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import Promise from "../components/service/Promise.vue";
import Services from "../components/service/Services.vue";
import SubService from "../components/service/SubService.vue";
import Questions from "../components/service/Questions.vue";
import WhatIs from "../components/service/WhatIs.vue";
import Capabilities from "../components/service/Capabilities.vue";
import SubCapability from "../components/service/SubCapability.vue";
import BigDataPlan from "../components/service/BigDataPlan.vue";

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
    WorkTogether,
    Promise,
    Services,
    Questions,
    WhatIs,
    Capabilities,
    SubCapability,
    BigDataPlan
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/big-data.jpg)

#approach
  background-image: url(../assets/background/services-large/approach-1.jpg)

.subtitle-header
  margin-bottom: 30px
  letter-spacing: 3px
  color: #aaaaaaa
  text-transform: uppercase

.subtitle
  width: 50%
  background: transparent
  display: block
  border-top: solid 1px #000
  margin: 0 0 15px

</style>
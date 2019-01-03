<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="IoT" kicker="Harness the power of IoT to make the ordinary, extraordinary.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="IoT"
            content="Our IoT consulting program is designed for companies who want to launch their first IoT project and need an execution plan to gain actionable outcomes from their data, which remained unutilized otherwise. The execution plan includes: requirement gathering based on 
specific business needs, assessment of IoT maturity level, identification of operations that require automation, deliverance of actionable insights, building of use cases & quantization of KPI's, a robust implementation plan, & development and deployment of pilot project."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Iot Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="IoT Architecture Consulting"
                  content="We offer IoT Platform Selection, based on your requirements and infrastructure. We put together a comprehensive IoT Technology Roadmap & Solution Architecture, beginning with a proof of concept."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Device Integration"
                  content="We offer device integration and Sensor Data Injection services along with Device troubleshooting & day-to-day Device Management, along with [OTA] over the air updates."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Real-Time Processing"
                  content="We offer Automation through Streaming Analytics for Device Data and put together a Big Data strategy for Device Data time series, and Next Best Action Recommendations."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceApproach title="IoT Solutions">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                title="Fleet Tracking"
                content="In the logistics sector, fleet monitoring is challenging. Changing regulatory environments, increased traffic, rising labor costs, and the volatile nature of the fuel costs makes operations challenging for logistics companies. Our Fleet Tracking Solution facilitates vehicle & asset tracking with sensors, data and the Internet to manage and monitor the fleet. Integrated devices fueled by IoT are completely transforming transportation, growing with improved connectivity. The placing of hardware sensors inside vehicles enables efficiency and control of the fleet. Insights generated through data and sensors assist with compliance and regulations."
              >
                <ul>
                  <li>Vehicle Monitoring</li>
                  <li>Tracking Fuel, Speed & Mileage</li>
                  <li>Ignition Monitoring</li>
                  <li>Driving Slate Management</li>
                  <li>Driver Accountability</li>
                  <li>Reducing Downtime</li>
                  <li>Delivery Update</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                title="Smart Farming System"
                content="Our client is one of the largest coffee plantations that produces a wide range of high quality coffee and delivers the best customer service to agricultural companies across the world. The increasing number of water disputes and issues in farming industries has created a huge demand for a smart irrigation system that can conserve water. To cater to this demand, the company wanted to develop an IoT-based irrigation system. We built a smart farming solution that can facilitate remote monitoring of soil moisture content, reduction in water usage and automated release and stoppage of water supply as per the moisture content."
              >
                <ul>
                  <li>Push Notifications</li>
                  <li>Real-Time Monitoring Of The Water Usage</li>
                  <li>Comprehensive Water Consumption Reports</li>
                  <li>Remote Access And Control Of The Irrigation System</li>
                  <li>Intelligent CX</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                title="Smart Factory"
                content="Track and control machines from anywhere. Our IoT solution brings all connected assets to a single dashboard giving you a bird’s eye view into plant performance. When machines connect to the IoT platform, a powerful data processing engine crunches time series data from machine sensors and control units to provide near real-time analytics. These insights help with:"
              >
                <ul>
                  <li>Optimizing Machine Utilization</li>
                  <li>Predicting And Preventing Failures</li>
                  <li>Reducing Maintenance Costs</li>
                  <li>Improving Machine Performance</li>
                  <li>Increasing Customer Satisfaction</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                title="Power and Water Management"
                content="Interlinking equipment and operations with a cloud analytics platform can create unprecedented benefits in power generation and transmission. Solutions built on the cloud successfully combine IoT-generated data with traditional data to deliver intelligence to:"
              >
                <ul>
                  <li>Improve Demand Forecasting</li>
                  <li>Decrease Outage Times</li>
                  <li>Improve Grid Performance</li>
                  <li>Reduce Safety Incidents</li>
                  <li>Optimize Energy Use</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                title="IoT-based Ventilation System"
                content="In the manufacturing industry, worker safety is an important aspect, especially where toxic substances are a byproduct. A polymer plastic manufacturer was facing numerous challenges due to increased absenteeism and decreased operational efficiency. Data Concepts designed a smart ventilation system that constantly monitors the environment inside the manufacturing plant and detects the amount of toxic substances present in the air. Preventative measures were taken to maintain the purity of air."
              >
                <ul>
                  <li>IoT-Based Monitoring System</li>
                  <li>Improved Worker Safety</li>
                  <li>Preventive Approach</li>
                  <li>Alerts Notification</li>
                  <li>Early Detection</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                title="Intelligent Parking Deck"
                content="Real-time parking space information with presence-sensing IoT sensors are used to monitor and prevent parking vacancies, violations and vehicle theft. Our Intelligent Parking Solution monitors all activities that are occurring across the Parking Deck. The system can be configured and customized to provide decision makers the ability to monitor space usage and energy usage based on various parameters. The data that is gathered can be filtered and analyzed to get detailed insights with the use of BI tools."
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
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">IoT Capabilities</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Asset Management"
                  content="Track and guard high value assets deployed at various locations."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Remote Monitoring"
                  content="Monitor machines and access data from anywhere via mobile apps."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Predictive Maintenance"
                  content="Enable your organization with self-service analytics capabilities."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Operational Efficiency"
                  content="Increase output with real-time insight into production bottlenecks."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Integrated View"
                  content="View data from multiple locations on a single portal."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Informed Decisions"
                  content="Accelerate decisions with predictive modeling and visualizations."
                />
              </div>
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
                  link="/insights/modern-utility"
                  category="Insight"
                  title="The Needs of Modern Utility Consumers"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/data-security-bi"
                  category="Insight"
                  title="Data Security in the BI & IoT World"
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
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "ServiceIoT",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Hero,
    ServicePromise,
    SubService,
    ServiceApproach,
    SubApproach,
    WorkTogether,
    RelatedBox
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/iot.jpg)

#approach
  background-image: url(../assets/background/services-large/approach-7.jpg)

</style>

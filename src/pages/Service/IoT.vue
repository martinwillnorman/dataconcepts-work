<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="IoT" kicker="Harness the power of IoT to make the ordinary, extraordinary.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="consultation program"
        content="Our IoT consulting program is designed for companies who want to launch their first IoT project and need an execution plan to gain actionable outcomes from their data, which remained unutilized otherwise. The execution plan includes: requirement gathering based on 
        specific business needs, assessment of IoT maturity level, identification of operations that require automation, deliverance of actionable insights, building of use cases & quantization of KPI's, a robust implementation plan, & development and deployment of pilot project."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="IoT Architecture Consulting"
          content="We offer IoT Platform Selection, based on your requirements and infrastructure. We put together a comprehensive IoT Technology Roadmap & Solution Architecture, beginning with a proof of concept."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Device Integration"
          content="We offer device integration and Sensor Data Injection services along with Device troubleshooting & day-to-day Device Management, along with [OTA] over the air updates."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Real-Time Processing"
          content="We offer Automation through Streaming Analytics for Device Data and put together a Big Data strategy for Device Data time series, and Next Best Action Recommendations."
        />
      </Services>

      <Definition subtitle="example work">
        <SubDefinition
          title="Fleet Tracking"
          content="In the logistics sector, fleet monitoring is challenging. Changing regulatory environments, increased traffic, rising labor costs, and the volatile nature of the fuel costs makes operations challenging for logistics companies. Our Fleet Tracking Solution facilitates vehicle & asset tracking with sensors, data and the Internet to manage and monitor the fleet. Integrated devices fueled by IoT are completely transforming transportation, growing with improved connectivity. The placing of hardware sensors inside vehicles enables efficiency and control of the fleet. Insights generated through data and sensors assist with compliance and regulations."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Vehicle Monitoring</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Tracking Fuel, Speed & Mileage</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Ignition Monitoring</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Driving Slate Management</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Driver Accountability</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Reducing Downtime</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Delivery Update</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Smart Farming System"
          content="Our client is one of the largest coffee plantations that produces a wide range of high quality coffee and delivers the best customer service to agricultural companies across the world. The increasing number of water disputes and issues in farming industries has created a huge demand for a smart irrigation system that can conserve water. To cater to this demand, the company wanted to develop an IoT-based irrigation system. We built a smart farming solution that can facilitate remote monitoring of soil moisture content, reduction in water usage and automated release and stoppage of water supply as per the moisture content."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Push Notifications</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Real-Time Monitoring Of The Water Usage</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Comprehensive Water Consumption Reports</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Remote Access And Control Of The Irrigation System</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Intelligent CX</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Smart Factory"
          content="Track and control machines from anywhere. Our IoT solution brings all connected assets to a single dashboard giving you a bird’s eye view into plant performance. When machines connect to the IoT platform, a powerful data processing engine crunches time series data from machine sensors and control units to provide near real-time analytics. These insights help with:"
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Optimizing Machine Utilization</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Predicting And Preventing Failures</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Reducing Maintenance Costs</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Improving Machine Performance</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Increasing Customer Satisfaction</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Power and Water Management"
          content="Interlinking equipment and operations with a cloud analytics platform can create unprecedented benefits in power generation and transmission. Solutions built on the cloud successfully combine IoT-generated data with traditional data to deliver intelligence to:"
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Improve Demand Forecasting</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Decrease Outage Times</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Improve Grid Performanc</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Reduce Safety Incidentst</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Optimize Energy Use</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="IoT-based Ventilation System"
          content="In the manufacturing industry, worker safety is an important aspect, especially where toxic substances are a byproduct. A polymer plastic manufacturer was facing numerous challenges due to increased absenteeism and decreased operational efficiency. Data Concepts designed a smart ventilation system that constantly monitors the environment inside the manufacturing plant and detects the amount of toxic substances present in the air. Preventative measures were taken to maintain the purity of air."
        >
          <ul class="example-work-list">
            <li class="example-work-list-item">Monitoring System</li>
            <span class="example-work-list-bullet">&bull;</span>
            <li class="example-work-list-item">Improved Worker Safety</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Preventive Approach</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Alerts Notification</li>
            <span class="example-work-list-bullet">&bull;</span>

            <li class="example-work-list-item">Early Detection</li>
          </ul>
        </SubDefinition>
        <SubDefinition
          title="Intelligent Parking Deck"
          content="Real-time parking space information with presence-sensing IoT sensors are used to monitor and prevent parking vacancies, violations and vehicle theft. Our Intelligent Parking Solution monitors all activities that are occurring across the Parking Deck. The system can be configured and customized to provide decision makers the ability to monitor space usage and energy usage based on various parameters. The data that is gathered can be filtered and analyzed to get detailed insights with the use of BI tools."
        />
      </Definition>

      <Capabilities subtitle="capabilities">
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Asset Management"
          content="Track and guard high value assets deployed at various locations."
        ></SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Remote Monitoring"
          content="Monitor machines and access data from anywhere via mobile apps."
        ></SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Predictive Maintenance"
          content="Enable your organization with self-service analytics capabilities."
        ></SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Operational Efficiency"
          content="Increase output with real-time insight into production bottlenecks."
        ></SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Integrated View"
          content="View data from multiple locations on a single portal."
        ></SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Informed Decisions"
          content="Accelerate decisions with predictive modeling and visualizations."
        ></SubCapability>
      </Capabilities>

      <InsightHighlight
        title="The Needs of Modern Utility Consumers."
        imagesource="../insight-images/camera.jpg"
        link="/insights/modern-utility"
      />

      <Related>
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          link="/insights/data-security-bi"
          category="Data Security"
          title="Data Security in the BI & IoT World"
          summary="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer."
          imagesource="../../insight-images/abstract.jpg"
        />
      </Related>

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
import Capabilities from "../../components/service/Capabilities.vue";
import SubCapability from "../../components/service/SubCapability.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "IoT",
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
    Related,
    InsightCard,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/iot.jpg)

</style>

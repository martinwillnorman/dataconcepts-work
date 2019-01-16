<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Unified Data Processing Platform" kicker>
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Our Client, a leading non-profit needed their data to get to a deeper understanding of what’s going on in their business. They needed a scalable data lake that could handle the size and complexity of a massive, growing data set. They turned to Data Concepts to guide them in designing and developing a technology architecture that would be cost effective, efficient, and yet flexible enough to meet their current and future needs."
      >
        <Role>
          <li>Big Data</li>
          <li>Data Lake Architecture</li>
          <li>Cloud Migration</li>
          <li>Kafka</li>
          <li>Scala</li>
          <li>Fast Data & IoT</li>
          <li>Spark</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>S3</li>
          <li>Cassandra</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          class="text-white"
        >Our client wanted to design and develop a scalable data lake that supports both, Batch & Stream data that works along with their platform. Also, the objective was to make a self-containing application that can be packaged into an image [Docker] and deployed on any cloud service or on-premise.</p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">ACCELERATED DIGITAL TRANSFORMATION JOURNEY</p>
      </SolutionHeader>

      <Solution>
        <p data-aos="fade-up" data-aos-duration="600">
          Data Concepts worked on two key parts –
          Fast API – An interface that provides various actions for processing Batch and streaming data. Also, they help in connecting information from Kafka & other static resources like Files, DB(s), etc. Microservice Service (based on Lagom) for Background Tasks – which was developed to take load off the processing engine for saving data to the data lake (S3 and Cassandra) and assign it to a separate node. The new platform and technologies recommended and architected by Data Concepts successfully did the following:
        </p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Created streaming and batch pipelines along with workflows, in the same platform.</li>
          <li>- Handled different sources of data like files, tables, streams (Kafka, Kinesis, etc) in the same platform.</li>
          <li>- Supported 100,000 streams with zero latency.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >We dramatically increased processing speed, saved money while scaling their business, and substantially increased storage capacity. If you are looking to build a Reactive Product with Scala, Akka, Play Framework or a Big Data Solution leveraging Spark, we are here to help.</p>
      </Outcome>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import Summary from "../../components/work/Summary.vue";
import Challenge from "../../components/work/Challenge.vue";
import Role from "../../components/work/Role.vue";
import SolutionHeader from "../../components/work/SolutionHeader.vue";
import Solution from "../../components/work/Solution.vue";
import Outcome from "../../components/work/Outcome.vue";

export default {
  name: "UnifiedData",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Summary,
    Challenge,
    Role,
    SolutionHeader,
    Solution,
    Outcome
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/work-large/unified-data.jpg)
  background-position: center

#first
    background-color: #0e414c

.challenge-header
    font:
        size: 1.8rem
    color: #0e414c
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #0e414c

.solution-header:after
    background-color: #0e414c

</style>
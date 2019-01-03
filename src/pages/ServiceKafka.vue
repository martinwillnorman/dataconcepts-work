<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Kafka" kicker="Utilize real-time insights provided by Kafka data streaming.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Kafka"
            content="Imagine a process which converts unstructured, unreadable pieces of information into something that is extremely valuable for your organization? information that gives you insights about your business, your products, customers and their preferences. Now imagine getting those insights in real time! We are talking about a process that gives you instant information about an active transaction. Such information is always valuable, isn't it? Companies who often deal with Big Data have massive databases and millions or billions of files they are processing. Data streaming, as the name implies, is a stream or flow of raw data that is captured from multiple sources and sent for processing continuously. Analyzing and processing such data streams makes an organization more efficient and opens up new opportunities."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Kafka Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService title="d" content="d"/>
                <SubService title="d" content="d"/>
                <SubService title="d" content="d"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <ServiceLeft
            title="Highly Scalable"
            content="Kafka is a distributed data streaming platform that can be horizontally scaled across many clusters of servers thus avoiding any downtime. It is capable of handling terabytes of data within seconds."
          />
          <ServiceRight
            title="Highly Performant"
            content="It is capable of handling huge volumes of data using cheap servers and gives throughput of thousands of messages. It is capable of handling and processing messages within milliseconds thus making it a real-time streaming platform."
          />
          <ServiceLeft
            title="Fault Tolerant"
            content="When messages are published to Kafka clusters, they replicate and store them on disks for a limited period of time. If a failure occurs, Kafka is easily able to resist that failure by using replicated data. Thus, it is fault tolerant and highly reliable when compared to other messaging systems."
          ></ServiceLeft>
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
import WorkTogether from "../components/WorkTogether.vue";

export default {
  name: "ServiceKafka",
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
    WorkTogether
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/kafka.jpg)

</style>

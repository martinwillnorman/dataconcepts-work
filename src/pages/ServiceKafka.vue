<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Kafka" kicker="Utilize real-time insights provided by Kafka data streaming.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Imagine a process which converts unstructured, unreadable pieces of information into something that is extremely valuable for your organization? information that gives you insights about your business, your products, customers and their preferences. Now imagine getting those insights in real time! We are talking about a process that gives you instant information about an active transaction. Such information is always valuable, isn't it? Companies who often deal with Big Data have massive databases and millions or billions of files they are processing. Data streaming, as the name implies, is a stream or flow of raw data that is captured from multiple sources and sent for processing continuously. Analyzing and processing such data streams makes an organization more efficient and opens up new opportunities."
      />

      <Services subtitle="services">
        <SubService data-aos="fade-up" data-aos-duration="600" title="d" content="d"/>
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="d"
          content="d"
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="d"
          content="d"
        />
      </Services>

      <Technology subtitle="advantages">
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Highly Scalable"
          content="Kafka is a distributed data streaming platform that can be horizontally scaled across many clusters of servers thus avoiding any downtime. It is capable of handling terabytes of data within seconds."
        />
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Highly Performant"
          content="It is capable of handling huge volumes of data using cheap servers and gives throughput of thousands of messages. It is capable of handling and processing messages within milliseconds thus making it a real-time streaming platform."
        />
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Fault Tolerant"
          content="When messages are published to Kafka clusters, they replicate and store them on disks for a limited period of time. If a failure occurs, Kafka is easily able to resist that failure by using replicated data. Thus, it is fault tolerant and highly reliable when compared to other messaging systems."
        />
      </Technology>

      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import Promise from "../../components/service/Promise.vue";
import Services from "../../components/service/Services.vue";
import SubService from "../../components/service/SubService.vue";
import Technology from "../../components/service/Technology.vue";
import SubTechnology from "../../components/service/SubTechnology.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "MachineLearning",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Promise,
    Services,
    SubService,
    Technology,
    SubTechnology,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/kafka.jpg)

</style>

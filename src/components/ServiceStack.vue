<template>
  <section class="content-block mostpage">
    <div v-parallax="0.2" class="cover-image tinted"></div>
    <div class="container">
      <div class="row">
        <div class="column col-12 center-content">
          <div class="content-wrapper">
            <h1
              data-aos="fade-in"
              data-aos-duration="600"
              class="section-header text-white"
            >{{title}}</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div data-aos="fade-down" data-aos-duration="600" class="column col-6 responsive-12">
          <div class="content-wrapper stack-wrapper">
            <div class="stack">
              <h3>Data Storage</h3>
              <p>HDFS, Apache HBase, Apache Kudu, Apache Cassandra, DataStax, Cloudera, Redis, Microsoft Azure, Amazon.</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="200"
          class="column col-6 responsive-12"
        >
          <div class="content-wrapper stack-wrapper">
            <div class="stack">
              <h3>ETL & Data Processing</h3>
              <p>Hadoop MapReduce, Apache Flume, Apache Sqoop, Apache Spark, Apache Storm, Apache Hive, Apache Kafka, StreamSets Data Collector, ELK.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceStack",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.cover-image
  background-image: url("../assets/background/services-large/approach-9.jpg")
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(210deg) saturate(6)

h1
  position: relative
  z-index: 999

.col-6
    display: flex

.stack-wrapper
    color: #fff
    background: $bround-c-3
    height: 60%
    margin-top: auto
    border-top-left-radius: 10px
    border-top-right-radius: 10px

.stack
    max-width: 90%
    margin: 0 auto
    margin-top: 5%

.section-header
    margin-top: 40px
    
h3
    margin-bottom: 10px

@media only screen and (max-width: 800px)
    .stack-wrapper
        height: 90%
        margin-top: unset
        border-radius: 0

    .stack
        margin-bottom: 40px
</style>
<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Supreme Court of Virginia"
        kicker="Data warehouse rearchitecture leveraging Kafka."
      >
        <div v-parallax="0.4" class="cover-image service-header-image tinted"></div>
      </Hero>

      <Summary
        content="We owned the full responsibility of building and delivering this project including 
managing the complete end-to-end software development lifecycle as well as 
production deployment and support. We architected and developed the system using 
the next-generation big data and real-time streaming data processing technologies."
      >
        <Role>
          <li>Migration Vision from Legacy to Open system.</li>
          <li>Solutions Architect.</li>
          <li>Lead Software Development.</li>
          <li>Documentation and Source Code.</li>
          <li>Core Java 1.8.</li>
          <li>IBM DB2.</li>
          <li>IBM InfoSphere Data Replication (IIDR).</li>
          <li>Apache Kafka.</li>
          <li>Apache ZooKeeper.</li>
          <li>Confluent Schema Registry.</li>
          <li>Apache Storm.</li>
          <li>Couchbase.</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p data-aos="fade-up" data-aos-duration="600" class="text-white">
          The client has been maintaining different relational databases to support Case
          Management Systems for each of the different court types i.e. Circuit, Juvenile &
          Domestic Relations, and General District. Additionally, even within each court type, data
          is stored across multiple databases based on the jurisdiction.
          This posed a significant challenge for building any new Application or Microservice
          that needs to query case information across all the different court types and
          jurisdictions since that application would need to connect individually to several
          different and disparate databases before returning the search results.
          Also, since the existing court specific relational databases are used primarily to
          support existing transactional workloads from the respective Case Management
          Systems, adding the query-only workloads generated from these new applications
          would add significant operational overhead to these existing relational databases
          thereby potentially degrading their performance.
          Combining transactional workloads with pure read-only workloads would
          unnecessarily tightly couple the systems thereby making system maintenance more
          challenging since all the existing Systems as well as the new Search-only Systems
          would need to be taken offline during regular scheduled maintenance as well as
          during any unplanned outages.
          It’s difficult to evolve the schema of the existing relational databases to meet the
          continually expanding needs of these new Search applications that simply need to
          query the case information stored in these databases without potentially impacting
          the operation and functionality of the existing Case Management Systems and
          thereby also incurring expensive QA verification testing time.
        </p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p data-aos="fade-up" data-aos-duration="600">Case Data Warehouse</p>
      </SolutionHeader>

      <Solution>
        <p data-aos="fade-up" data-aos-duration="600">
          Our client needed a scalable solution that could accommodate all new applications (that
          only needed to query case data) to be able to connect to a single consolidated
          centralized data repository to search for case data across all courts types and
          jurisdictions. They needed an innovative solution that could decouple their existing
          relational databases (that are supporting the transactional workloads) from the primarily
          read-only search traffic from applications that were only interested in querying data
          without needing to modify them.
          What our client really needed was a centralized Case Data Warehouse that could store
          all case data in a non-relational, schema-less format that could be easily modified and
          updated without being tied down to a rigid and inflexible relational data model that was
          hard to evolve. Since the case data warehouse needed to be always kept in sync with
          the transactional relational databases in real-time, we also needed a real-time data
          streaming platform that was fault-tolerant, horizontally scalable, be able to deliver
          consistent performance at any scale, and seamlessly able to support a large number of
          applications in the future that need to query case data.
        </p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>
            - We implemented the Case Data Warehouse and the real-time data streaming
            pipeline using a combination of modern enterprise big data and streaming
            technologies including IBM IIDR, Apache Kafka, Apache Storm, and Couchbase.
          </li>
          <li>
            - To achieve real-time data streaming from the source IBM DB2 relational
            databases, we used IBM's InfoSphere Data Replication (IIDR) to automatically
            capture changed data from the DB2 transaction logs and stream that to Apache
            Kafka.
          </li>
          <li>
            - We used Apache Kafka, which is a distributed streaming data platform, to publish
            incoming streaming data from IIDR to Kafka Topics. Kafka Topics stores these
            streams of data in a fault-tolerant, durable way and works similarly to a traditional
            ESB and the publisher-subscriber messaging model.
          </li>
          <li>
            - Apache Storm was used as a distributed real-time streaming data processing
            system to consume messages from Apache Kafka Topics. We built custom Storm
            Topologies including Spouts to consume streams of data from Kafka Topics and
            process those using multiple Storm Bolts by repartitioning the streams between
            each stage of the computation to achieve scalability, resilience, and high
            throughput.
          </li>
          <li>
            - The resulting output from these computations inside Storm Topologies is a JSON
            document that is schemaless and easy to evolve, which was finally persisted in
            Couchbase to be queried by various applications. We chose Couchbase Data
            Platform for its powerful NoSQL support with flexible schema and fully-featured
            SQL support for JSON documents, as well as its features supporting
            development agility and consistent performance at any scale to build our case
            data warehouse.
          </li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p data-aos="fade-up" data-aos-duration="600">
          The Case Data Warehouse has been deployed to production with resounding success.
          New applications that need to query for case data state-wide across all jurisdictions are
          now able to leverage the centralized data warehouse for all their search needs without
          impacting the performance of the existing transactional databases. Because of the
          scalable and fault-tolerant architecture of the real-time data streaming platform, our
          client is now able to rapidly build new data-driven applications and microservices and
          generate significant business value by more effectively serving its customers.
        </p>
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
  name: "Court",
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

.service-header-image
  background-image: url(../../assets/background/work-large/bookcase.jpg)
  background-position: center 30%

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

.outcome-list
    padding-left: 20px
    columns: 2
    margin-top: 40px

.outcome-list li
    line-height: 2
    font:   
        size: 1rem
        weight: 400
        family: $font-body

</style>
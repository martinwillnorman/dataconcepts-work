<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Cloud | Application Development"
        title="Cloud Application Development"
        summary="Data Concepts’ cloud application development offerings help you take an advantage of everything Microsoft Azure has to offer – from migrating legacy applications to creating custom solutions which exploit the full value of the platform."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Why cloud applications"
            content="Enterprises are increasingly embracing the economics, speed and scale of public cloud platforms to drive their digital and growth agenda. At the same time the Microsoft® Azure platform is fast becoming a leading choice for migrating existing applications or building a new generation of applications which take advantage of a global network of datacenters, accelerated deployment times, and increased efficiencies and cost savings. At Data Concepts, we believe the cloud can deliver the speed you need to become a digital business and we bring expertise to help you take full advantage of the cloud and Microsoft® Azure."
          ></InsightSubSection>
          <InsightSubSection
            title="Data Concepts’ offerings include:"
            content="- Cloud roadmap and strategy assessments."
          ></InsightSubSection>
          <InsightSubSection content="- Cloud application migration."></InsightSubSection>
          <InsightSubSection content="- Datacenter extensions."></InsightSubSection>
          <InsightSubSection content="- Cloud services for mobile devices and sensors."></InsightSubSection>
          <InsightSubSection content="- Custom web and cloud scale applications."></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Additionally, Data Concepts can help you navigate the security, governance, and integration challenges often associated with a move to the cloud and provide managed services for your cloud applications."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Cloud can accelerate your digital journey"
            content="Successful enterprises today are driving growth with digital experiences which effectively connect systems, people, devices and insight. The ability to respond rapidly to market needs through innovative digital applications is fast becoming a competitive necessary. The cloud can play a crucial role in this journey by providing the speed enterprises need in order to become digital businesses."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="But the cloud often introduces new complexity"
            content="Organizations have heterogeneous IT environments with varying requirements and often face complex tradeoffs in maximizing beneft while minimizing risk – including identity, security, integration, and governance. The cloud can also bring additional complexity by introducing new approaches to development, delivery and management – including refactoring existing applications, faster and more frequent releases, and increased interdependence between development and operations."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Choose a cloud-first approach with Data Concepts"
            content="With a core competency in Application Development on the Microsoft platform and a preferred partnership with Microsoft, Data Concepts is uniquely positioned to help you with your cloud application development needs. We can help you: Identify and prioritize the right applications to migrate or build new for Azure, Deliver skills to build modern business applications that take full advantage of cloud scale and requirements, Provide Managed Services and an agile, continuous delivery model based on rapid iteration using the cloud Cloud Application Development Offerings."
          ></InsightSubSection>
          <InsightSubSection
            title="We provide an end-to-end approach from assess, to build, and to run and we can apply this to a range of scenarios and engagements."
            content="Examples of some of the types of projects we can do for you include:"
          ></InsightSubSection>
          <InsightSubSection
            content="Cloud Strategy – Change approach from a set of technologies and services to an organic and controlled ecosystem."
          ></InsightSubSection>
          <InsightSubSection
            content="Cloud Migration – Assessing, prioritizing, and migrating existing applications in order to beneft from effciencies and economics of the cloud."
          ></InsightSubSection>
          <InsightSubSection
            content="Cloud Mobile Services – Enable secure and reliable data access to a wide range of mobile and connected devices."
          ></InsightSubSection>
          <InsightSubSection
            content="Digital Strategy – Digital Marketing and Collaboration platforms hosted on the Cloud for better scalability and global reach."
          ></InsightSubSection>
          <InsightSubSection
            content="Internet Services – Web based applications leveraging Cloud Platforms in PaaS and SaaS models."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Data Center Extension – Applications hosted on Microsoft Azure with full integration with on premises infrastructure."
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import InsightHeader from "../components/InsightHeader.vue";
import InsightSubSection from "../components/InsightSubSection.vue";

export default {
  name: "InsightCloudAppDev",
  components: {
    NavBar,
    ModalMenu,
    Spacer,
    InsightHeader,
    InsightSubSection
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.insight-image
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(120deg) saturate(6)
  background-image: url(../assets/background/insights/space-7.jpg)
</style>

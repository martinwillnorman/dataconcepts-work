<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Digital"
        title="The Modern Digital Landscape"
        summary="Consumers have become accustomed to smartphones, mobile applications and ubiquitous connectivity, demanding a better user experience in their daily interactions."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="What this means for modern infrastructure"
            content="Consumers have become accustomed to smartphones, mobile applications and ubiquitous connectivity, demanding a better user experience in their daily interactions. With the shift to cloud serving as the inflection point, the operating model is naturally shifting from infrastructure to everything as a service, with a focus on applications and business outcomes. Thus, enterprises are being challenged to launch a new generation of digital initiatives, including the creation of agile applications that provide rich digital experiences. Companies must focus on a business-wide — not merely an IT — transformation. They can do this by deploying modernized enterprise and cloud applications that drive shifts in reach, insight and responsiveness to the increased market pressures that threaten to drive them out of business."
          ></InsightSubSection>
          <InsightSubSection
            content="Enterprises are moving beyond an application landscape based on service-oriented architecture to a second generation characterized by web services, microservices, APIs, analytics and a stronger emphasis on mobility and user experience. In addition, ecosystems are emerging in which asymmetrical players are establishing a niche in the fabric of an industry. Meanwhile, underlying architectures, applications and enabling technologies are quickly evolving. As companies move forward with digital transformation, the integrated functionality of these applications and services is essential. Above all, enterprises must view the digital transformation as a businesswide transformation, not just a transformation of IT."
          ></InsightSubSection>
          <InsightSubSection
            content="Business leaders must not underestimate the amount of logic that lies within their legacy applications. Doing so can lead to painful outcomes, for example when attempting to move an entire SAP or Oracle portfolio into Salesforce.com. In contrast, applications can benefit from a number of maturity constructs that are happening around them, such as networks, mobility, the increasing digitization of communication and the ability to sample internet of things (IoT) data repositories."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="The journey to agile applications and digital experiences cannot be undertaken without a clear understanding of what technology is available and what it can do. Enterprises need to be positioned to build and deliver scalable applications that are “cloud native” and operate as microservices that can communicate via published APIs. Older applications still have value, and they need to be accessed using a service approach that is both more cost-effective and less risky than wholesale replacement."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="A modern digital application platform typically includes some combination of the following technologies and methodologies:"
          ></InsightSubSection>
          <InsightSubSection title="- Microservices and APIs"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="A microservices architecture fosters software development as a suite of independently deployable, lightweight modular services. Each can serve specific business goals by running unique processes, and development can be made more efficient by smaller teams working in parallel to deploy services independently. These microservices are made accessible by language- and technology-independent APIs that facilitate consumption across a diverse set of devices and foster a way to measure use. This enables companies to determine business value and even drive fee-based consumption. Moreover, APIs open up avenues for accessing critical enterprise information locked inside disparate and closed systems, as well as for the production and consumption of a broad set of valuable user stories."
          ></InsightSubSection>
          <InsightSubSection title="- Agile development"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Efficiency can be gained by using an agile development approach that employs several iterative and incremental steps. This allows for improved collaboration and continuous feedback that helps refine the delivery of a software system."
          ></InsightSubSection>
          <InsightSubSection title="- Internet of Things"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="In the applications world, leveraging IoT is all about using data that comes from sensors and other connected devices, as well as building IoT applications that enhance business operations. IoT’s uses are endless. For example, an airline can build an IoT app that sets off an alert when a plane’s engine needs maintenance. Other possibilities include connected health, smart supply chains and automated metering of utility grids."
          ></InsightSubSection>
          <InsightSubSection title="- Virtualization and containers"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="These scalable resources make it easier to create loosely coupled components for application composition. They are true game changers, allowing for rapid movement and scalability of services without overhead costs."
          ></InsightSubSection>
          <InsightSubSection title="- Artificial intelligence (AI)"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="AI and machine learning are opening a new world of possibilities in application development. From predictive analytics to chatbots, AI is having a strong impact on companies, such as allowing data to be utilized in better ways and contributing to more meaningful user experiences. As the use of AI grows, the core of a business’s applications will become increasingly algorithmic. Applications will be built on efficient intelligence constructs, eventually becoming structural equation models that can be translated into something humans can more easily understand."
          ></InsightSubSection>
          <InsightSubSection title="- Data services"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Data services provide access to petabytes of structured and unstructured data that can reside closer to the source, reducing the need to build large centralized repositories while offering both transactional and eventual consistency options. These data sources combine to offer common, stateful requirements, as well as ongoing analytical analysis needed for today’s machine learning and business intelligence requirements."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="To complement partner offerings, Data Concepts also provides in-depth consulting services. Data Concepts' highly experienced consultants help our clients meet their needs for creating modern digital applications. Whether you need help with planning, transformation or transition, security or operational management, Data Concepts is ready and able to assist."
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
  name: "InsightDigitalLandscape",
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
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(25deg) saturate(6)
  background-image: url(../assets/background/insights/graffiti-2.jpg)
</style>

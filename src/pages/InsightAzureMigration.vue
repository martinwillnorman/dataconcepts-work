<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Microsoft Azure"
        title="What is Your Azure Migration Strategy?"
        summary="Most Enterprises are moving to the Cloud as a cost-effective means to develop, deploy and manage their infrastructure."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Advantages of Azure"
            content="A Cloud platform provides competitive advantages such as higher efficiency, greater flexibility, lower costs and better performance of applications to name a few; and Microsoft Azure is one such Cloud platform that offers security, reliability & scalability to an Enterprise."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Azure Capabilities"
            content="Microsoft Azure’s IaaS, PaaS and SaaS capabilities provides on-demand computing, storage resources, networking, web and mobile app services to accelerate time-to-value. It is ideal for hosting collaboration systems, running big data applications, and migrating on-premise infrastructure. Azure platform can be effortlessly assimilated with an existing IT environment allowing businesses to take full advantage of their infrastructure on cloud. It offers an ability to use latest technologies in a way that adds greatest value to a business. Whether you are pushing an existing infrastructure to cloud, migrating legacy applications, or deploying business-critical applications on Azure, one needs to carefully plan a migration strategy that best fits their specific requirements. Let’s take a walk through the simple steps to successfully plan the best-fit Azure Migration Strategy for your Enterprise."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Ascertain"
            content="You need to catalog your software and workloads as the first step towards Azure Migration. Documentation of all inventory, assessment of applications and workflow related to each data entity should be carried-out. If it is just about the infrastructure that needs to be pushed, then catalog the workloads."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Assess"
            content="The second step is to start with a custom, simple assessment to categorize the applications and workloads. You will get to know the exact amount of work required. There are few tools like Microsoft’s Virtual Machine Readiness Assessment Tool and Microsoft Assessment and Planning (MAP) toolkit that can help in the assessment. This will lead to effort and time savings, thus avoiding needless frustration as well as costly resource consumption."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Target"
            content="Identifying the destination of workloads will ease and minimize efforts. Factors like speed, ease of migration, cost and desired functionality, virtual machines and operating system are to be considered in this step."
          ></InsightSubSection>
          <InsightSubSection
            title="Migrate"
            content="Finally, the last and -most important step is to make the actual move after following all the aforementioned steps. Microsoft Azure handles infrastructure such as servers, storage, networking and virtual machines and managing their operations after migrating as well. An Enterprise can start with a simple application which can be divided into components to migrate to Azure environment. After testing a single component thoroughly, the next part can be moved. This can be continued until all the components or workloads are migrated to Azure. This helps in ensuring minimal to zero application/user disturbance and 100% availability of migrated application. Microsoft promises 99.99% system uptime SLA once an application/system is hosted on Azure platform."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="These broad phases simplify the complexity involved in an Azure migration. There are many automated tools that will help you to screen, calculate and model possible cloud configurations. A strategy involving value-based approach to application rationalization is highly recommended for Azure migration. Cloud adoption must have full buy-in and executive sponsorship from the leadership team, Azure consultants and the CEO."
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
  name: "InsightAzureMigration",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(150deg) saturate(6)
  background-image: url(../assets/background/insights/lights-8.jpg)
  
</style>

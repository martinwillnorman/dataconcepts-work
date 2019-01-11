<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Big Data" kicker="Empower your organization with data-driven insights.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Big data analytics holds great potential for organizations that want to increase revenue and reduce cost. With big data you can go beyond traditional descriptive analytics and incorporate predictive and prescriptive analysis, which will help drive better decision-making. We help you rapidly deploy big data analytics solutions that integrate, store, manage, and protect your data."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Identify Your Use Cases"
          content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Integrate"
          content="Analytics requires having availability to all data. This is possible by removing silos and consolidating all your data into a Data Lake. Incorporating diverse sources and unifying data types gives you richer insights that will drive better business outcomes."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Analyze"
          content="Enhance your competitive edge with data driven decisions. Empower your end users with accelerated queries and reporting with anywhere, anytime, all-data analytics. Enable your organization with self-service analytics capabilities."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Eliminate Silos & Simplify"
          content="Streamline to an enterprise-proven, scale-out platform for unstructured and structured data. Using a single volume is easy to manage without data migrations."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Optimize Storage"
          content="With flexible deployment and protection capabilities, expand seamlessly to the cloud while being transparent to users and applications."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Use Analytics to Gain Insight"
          content="Leverage Big Data Analytics & enable in-place analytics to discover actionable insights at the speed your business decisions require."
        />
      </Services>

      <Definition subtitle="definition">
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          title="Big Data"
          content="Due to the advances in technology, the definition of Big Data has changed over the years. Yet, one thing that remains the same is that the amount of data is continuously growing at an extremely rapid rate. All data, in any form, that is used for gaining insight and generating value is considered Big Data."
        />
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Data Lake"
          content="A data lake is scale-out storage for your Big Data. It allows for Big Data accessibility– via traditional and next-generation access methods– to enable in-place analytics. With a Data Lake, you can keep more data and keep it longer, making it essential for true Hadoop environments."
        >
          <router-link class="reg-link" to="/insights">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Analytics"
          content="Analytics is the practice of applying modern analytics software tools across data of all types, including unstructured, semi-structured, and structured data; as well as real-time/streaming and batch. At Data Concepts, we use Big Data Analytics is to discover insights and irregularities, and to enhance the understanding of business performance and customer behavior. These analytics-driven insights can be used to shape business outcomes, improve competitive advantage, enhance financial decisions and develop more concise projections for our Clients."
        />
      </Definition>

      <Capabilities subtitle="capabilities">
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Actionable Insights"
          content="Develop actionable insights and help identify and tackle problems. Engage data to provide powerful trends and insights."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Synthesis</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Insights</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Analysis</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Reporting</li>
          </ul>
        </SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Secure Architecture"
          content="Engineer secure data architectures, harness data from all sources, and synthesize it for analysis and action."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Data Architecture</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Data Engineering</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Mirroring</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Data Security</li>
          </ul>
        </SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Dynamic Visualization"
          content="Powerful, real-time and dynamic visualization tools give us a new understanding of how your business runs."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Data Visualization</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Data Analysis</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Modeling</li>
          </ul>
        </SubCapability>
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Intelligence Development"
          content="Use AI and machine-learning to create intelligent customer experiences, tools, and services for your business and its customers."
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Artificial Intelligence</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Machine Learning</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Feedback Looping</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Optimization</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Intelligent CX</li>
          </ul>
        </SubCapability>
      </Capabilities>

      <InsightHighlight
        title="The Plan to Move to Big Data."
        imagesource="../insight-images/lights-7.jpg"
        link="/insights/big-data-plan"
      />

      <Related>
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          title="A Quick Peek in to  Data Strategy"
          summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
          category="Data Strategy"
          link="/insights/quick-peek"
          imagesource="../insight-images/dance-2.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          link="/insights/data-mining"
          category="Big Data"
          title="Extracting Actionable Insights from Data"
          summary="Data mining is the extraction of actionable insights from data."
          imagesource="../insight-images/entry.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          link="/insights/analytics-is-popular"
          category="Data & Analytics"
          title="The Popularity of Analytics"
          summary="Ten imperatives for successfully developing an analytics capability."
          imagesource="../insight-images/model.jpg"
        />
      </Related>

      <AdditionalServices
        subtitle="additional"
        title="Big Data Development and Big Data Consulting Services."
        paragraphOne="We addresses the challenges of collecting, storing and processing ever-growing volumes of Big Data on an industry scale. We deliver Big Data consulting and development services tailored to businesses in the healthcare, Retail, public safety, judiciary, and more."
        paragraphTwo="Our Big Data teams make data science serve the enterprises striving to harness complex data processing operations. What you get is powerful insights derived from the vastness of mission-critical information, which makes your daily decision-making fact-based and agile."
      >
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Data Governance"
          content="The quality of data is paramount. We ensure that all the data on your hands is complete, clean, and de-duplicated. Moreover, we set up rules and policies for proactive governance and quality verification to keep that data up to your standards at all times."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Big Data Analytics"
          content="With our advanced Business Intelligence expertise, we transform vast amounts of unstructured data into visualized, customizable reports enhanced with interactive dashboards that make analytics manageable even for non-tech users."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Customer MDM"
          content="Delivering great customer experiences by having a unified, all-round view of your customers. We enable customer master data management across your enterprise applications, such as CRM, ERP, or accounting, and ensure accuracy."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Big Data Strategy"
          content="Our experts will help you evaluate your current capabilities and take them further with a strategy to reveal the true value of Big Data for your business goals."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Big Data Integration"
          content="To deliver a real-time and complete picture of your data assets, we connect data, systems and processes into a single manageable silo."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Data Mining and Aggregation"
          content="We help you embrace the variety of Big Data sources by bringing them together on a holistic map so that your enterprise can look for the right answers."
        />
      </AdditionalServices>

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
import AdditionalServices from "../../components/service/AdditionalServices.vue";

export default {
  name: "ServiceBigData",
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
    Footer,
    AdditionalServices
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/bigdata-5.jpg)
  background-size: contain
  background-position: center 40%

</style>
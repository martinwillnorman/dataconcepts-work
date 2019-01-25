<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Application Development"
        kicker="Modern software execution and mission agility requires continuous deployment of robust apps."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency. Every app-building process follows the same steps: gathering requirements, designing prototypes, testing, implementation, and integration."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Application Development"
          content="Follow defined, standardized methodologies to develop and maintain applications for open source, mainframe and other platforms."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Application Architecture"
          content="Get the Benefits of Adaptive and Intuitive Applications. Are you ready to build a lasting, adaptable IT foundation to support growth and change?"
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Application Modernization"
          content="Harness the full potential of your applications, simplify your IT environment and easily leverage cloud, mobility and virtualization."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Enterprise Applications"
          content="Capitalize on your cloud and traditional enterprise applications by leveraging a comprehensive portfolio of lifecycle services."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Business Analysis"
          content="Get consistent, predictable project results with our award-winning Business Analysis services."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Application Migration"
          content="Changing business conditions and needs require constant vigilance in adapting your information systems to keep pace."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Mainframe Modernization"
          content="We modernize mainframes that contain accumulated years of data, which requires creating intelligent systems, automated processes and digitizing the enterprise to respond to future needs."
        />
      </Services>

      <Definition subtitle="the seven key application areas">
        <SubDefinition
          title="Data"
          content="Harnessing the power of big data can be a challenge for traditional software and database companies. Understanding when and how to incorporate big data analysis into your strategy for growth is not always obvious, but critical."
        >
          <router-link class="reg-link" to="/services/big-data">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Mobile"
          content="Customers are demanding increasingly more mobile solutions. For technology companies, a consumer-focused lens is unavoidable in product strategy: understanding consumer needs is key to drive growth."
        >
          <router-link class="reg-link" to="/services/mobility">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Cloud"
          content=" As cloud adoption becomes widespread, its characteristic of enhancing business agility is driving demand. Investing wisely to achieve speed to market is as important to small pure-play organizations as it is to well-established enterprises."
        >
          <router-link class="reg-link" to="/services/cloud">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Internet of Things"
          content=" The technology ecosystem is composed of a vast array of smart devices, applications and services. Understanding and evaluating the opportunities for growth can be overwhelming but are essential to thriving in this landscape."
        >
          <router-link class="reg-link" to="/services/iot">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Transition to Digital"
          content="When facing an evolving digital landscape with increasing modes and channels for distribution, we help clients determine where to strategically allocate investment and how to use analytics to understand how to reach the right customer segment with the right solution at the right time."
        >
          <router-link class="reg-link" to="/services/digital-strategy">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="Customization of Data & Analysis"
          content="With the increasing availability and complexity of data and analytics, we help create customer-driven strategies by understanding how to best segment client markets, evaluate specific customer needs and generate the best product and go-to-market strategy to reach your target audience."
        >
          <router-link class="reg-link" to="/services/data-analytics">Read More</router-link>
        </SubDefinition>
        <SubDefinition
          title="IT Performance Improvement"
          content="When IT underperforms, it hurts business performance and hinders innovation. A sluggish IT department limits a company's ability to adapt to shifting market demands, increases the time it takes to release new products and services, and damages customer satisfaction."
        >
          <router-link class="reg-link" to="/services/business-intelligence">Read More</router-link>
        </SubDefinition>
      </Definition>

      <Technology subtitle="how we help">
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Software Acceleration and DevSecOps"
          content="Our DevOps practice drives productivity and efficiency by automating your software delivery pipeline. Our purpose-built, open source tool stacks deliver fully automated continuous integration and continuous deployment pipelines for speed, agility, and bottom-line savings. We put the Sec in DevSecOps by practicing “shift left” security throughout our software development life cycle."
        ></SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Mission Software"
          content="Mission application development, systems re-engineering, and effective utilization of embedded, real-time software are capabilities essential to meeting your mission goals. Our portfolio includes ERP solutions and COTS software integration, plus IoT capability development, for contributing to battlespace superiority."
        ></SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Lean-Agile"
          content="With the fast-paced nature of technology, fielding secure systems rapidly has never been more important, and we relentlessly adopt, improve, and scale services. We help you achieve mission objectives by utilizing established frameworks and best practices that promote collaboration across the enterprise."
        ></SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="COTS Software Integration"
          content="Mission application development, systems re-engineering, and effective utilization of embedded, real-time software are capabilities essential to meeting your mission goals. Our portfolio includes ERP solutions and COTS software integration, plus IoT capability development, for contributing to battlespace superiority."
        ></SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Intelligent Software"
          content="We have expert insights on tools and approaches for the practical integration of artificial intelligence/machine learning into existing software to create smart applications, blockchain solutions tailored for specific industries or common business challenges, and mobility applications that increase accessibility and productivity."
        ></SubTechnology>
      </Technology>

      <InsightHighlight
        title="Application Development: Our Approach"
        imagesource="../insight-images/hands.jpg"
        link="/insights/application-development-approach"
      />

      <Related>
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          link="/insights/application-development-approach"
          category="Application Development"
          title="Application Development: Our Approach"
          summary="High performance, outcome-driven systems."
          imagesource="../insight-images/hands.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          link="/insights/cloud-application-development"
          category="Cloud | Application Development"
          title="Cloud Application Development"
          summary="Data Concepts’ cloud application development offerings help you take an advantage of everything Microsoft Azure has to offer – from migrating lgacy applications to creating custom solutions which exploit the full value of the platform."
          imagesource="../insight-images/space-7.jpg"
        />
        <InsightCard
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          link="/insights/digital-landscape"
          category="Digital"
          title="The Modern Digital Landscape"
          summary="Consumers have become accustomed to smartphones, mobile applications and ubiquitous connectivity, demanding a better user experience in their daily interactions."
          imagesource="../insight-images/graffiti-2.jpg"
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
import Technology from "../../components/service/Technology.vue";
import SubTechnology from "../../components/service/SubTechnology.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Related from "../../components/service/Related.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "ApplicationDevelopment",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Definition,
    SubDefinition,
    Technology,
    SubTechnology,
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
  background-image: url(../../assets/background/services-large/service-101.jpg)

</style>

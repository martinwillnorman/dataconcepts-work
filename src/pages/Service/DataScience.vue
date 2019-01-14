<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Data Science" kicker="Take a Data-Driven Approach to Business.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="We bring tremendous opportunities with R analytics for businesses to find patterns in data – be it structured, semi-structured, or unstructured, and empower them to fetch actionable insights that drive towards better business outcomes."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Big Data & Advanced Analytics"
          content="Irrespective of the velocity, variety, and volume of data, our data scientists can help businesses procure hidden patterns and correlations, and empower them to make informed decisions and improve business operations."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Prescriptive Analytics & Optimization"
          content="Our team of data analysts and visualization experts help you transform your data ecosystem with AI-powered prescriptive analysis and empower you to create futuristic insights for better planning and productivity."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Integrating R With Tableau & Power BI"
          content="Our highly skilled R programmers perform statistical analysis with machine learning to classify patterns, trends and behaviors to get interactive visualizations in Tableau and Power BI."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Python Powered Solutions"
          content="We utilize the latest advances and techniques in AI, deep learning, neural networks, data engineering, and computer vision. We use Flask, Jupyter Notebook, Cython and NetworkX."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Low Cost, Development Time, & Accurate Results"
          content="Our Python developers stay on top of the latest developments and Python frameworks. We can assure you of less development time due to better, reusable structured code and low development costs."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Derive Insights & Measure Business Values"
          content="We can create complex mathematical models to derive insights not thought of before. We help you utilize all your appropriate data and find correlations between multiple sources to give you measurable business value."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Process Structured & Unstructured Data"
          content="Depending on the nature of your business, our Python developers can process information from various sources regardless of their original formats such as audio, image, video, and multiple sensors."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Uncover Insights from Voluminous Data"
          content="As the sources increase, so do the insights that we can gather from them. Using Python, our developers will convert this large amount of data into a usable format, allowing you to discover new insights and transform your business."
        />
      </Services>

      <SectionDivider
        title="Data Advisory"
        content="Evaluating existing data practices and the resultant requirements. We translate the task into a concrete problem, figure out how to solve it and present the solution to our clients, along with our recommendations and game plan."
      />

      <Services subtitle="NLP services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Identify The Problem"
          content="Identifying the problem is the crucial first step. We translate our clients’ requests into a concrete, well-defined problem and study its impact on the business to consult them with ideal solutions."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Collect Appropriate Data"
          content="Our data experts check for available data. If the data isn’t sufficient, we do a thorough analysis of resources to collect usable data and advise our clients."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Data Wrangling"
          content="Our data experts carry out raw data processing to eliminate bad data. We will clean and convert the data into a form that can be analyzed further."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Exploring Data"
          content="Once we have cleaned the data, we see through the data in-depth to find trends or correlations in those datasets. Our data experts find the high-level characteristics that lay hidden in the data."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Performing In-Depth Analysis"
          content="We apply machine learning, statistical models, and algorithms on the formatted data. Our data team applies all the cutting-edge AI algorithms to unearth high-value insights and predictions."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Data Storytelling"
          content="After the analysis, our data experts canvas a data journey to explain the client’s story to their stakeholders or customers in a comprehensible and compelling manner."
        />
      </Services>

      <Technology subtitle="benefits">
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Identify Business Use Cases"
          content="We identify the use case and opportunities and set a definite use case to kick-off."
        ></SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Predictive Modeling"
          content="Our data scientists will then run algorithms on the data to get desired outcomes and insights."
        ></SubTechnology>
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Boost Business Performance"
          content="We will present the final results that will improve decision-making capabilities."
        ></SubTechnology>

        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Gain Data Understanding"
          content="We will extract data from various sources to ensure data quality and consistency."
        ></SubTechnology>
        <SubTechnology
          data-aos="fade-up"
          data-aos-duration="600"
          title="Descriptive Analysis"
          content="We will hold a discussion to understand if the outcomes align with the desired business goals."
        ></SubTechnology>
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
import SectionDivider from "../../components/service/SectionDivider.vue";

export default {
  name: "DataScience",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Technology,
    SubTechnology,
    SectionDivider,
    Footer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/data-science.jpg)

</style>

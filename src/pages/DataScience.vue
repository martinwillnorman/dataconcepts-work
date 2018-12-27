<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div id="data-sci" v-parallax="0.4" class="cover-image tinted"></div>
        <div class="container">
          <div class="row">
            <div @click="scrollDown" class="show-more">
              <svg
                data-aos="fade-down"
                data-aos-duration="600"
                fill="#fff"
                version="1.1"
                id="Ebene_2_1_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="53px"
                height="20px"
                viewBox="0 0 53 20"
                enable-background="new 0 0 53 20"
                xml:space="preserve"
              >
                <g>
                  <polygon
                    points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"
                  ></polygon>
                </g>
              </svg>
            </div>
            <div class="column col-2 no-content"></div>
            <div class="column col-4 responsive-8 responsive-12 center-content">
              <ServiceHeader
                title="Data Science"
                kicker="Take a Data-Driven Approach to Business."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Data Science"
            content="We bring tremendous opportunities with R analytics for businesses to find patterns in data – be it structured, semi-structured, or unstructured, and empower them to fetch actionable insights that drive towards better business outcomes."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Data Science Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  title="Big Data & Advanced Analytics"
                  content="Irrespective of the velocity, variety, and volume of data, our data scientists can help businesses procure hidden patterns and correlations, and empower them to make informed decisions and improve business operations."
                />
                <SubService
                  title="Prescriptive Analytics & Optimization"
                  content="Our team of data analysts and visualization experts help you transform your data ecosystem with AI-powered prescriptive analysis and empower you to create futuristic insights for better planning and productivity."
                />
                <SubService
                  title="Integrating R With Tableau & Power BI"
                  content="Our highly skilled R programmers perform statistical analysis with machine learning to classify patterns, trends and behaviors to get interactive visualizations in Tableau and Power BI."
                />
                <SubService
                  title="Python Powered Solutions"
                  content="We utilize the latest advances and techniques in AI, deep learning, neural networks, data engineering, and computer vision. We use Flask, Jupyter Notebook, Cython and NetworkX."
                />
                <SubService
                  title="Low Cost, Development Time, & Accurate Results"
                  content="Our Python developers stay on top of the latest developments and Python frameworks. We can assure you of less development time due to better, reusable structured code and low development costs."
                />
                <SubService
                  title="Derive Insights & Measure Business Values"
                  content="We can create complex mathematical models to derive insights not thought of before. We help you utilize all your appropriate data and find correlations between multiple sources to give you measurable business value."
                />
                <SubService
                  title="Process Structured & Unstructured Data"
                  content="Depending on the nature of your business, our Python developers can process information from various sources regardless of their original formats such as audio, image, video, and multiple sensors."
                />
                <SubService
                  title="Uncover Insights from Voluminous Data"
                  content="As the sources increase, so do the insights that we can gather from them. Using Python, our developers will convert this large amount of data into a usable format, allowing you to discover new insights and transform your business."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <Spacer/>
        </div>
      </section>
      <SubHeader
        title="Data Advisory"
        content="Evaluating existing data practices and the resultant requirements. We translate the task into a concrete problem, figure out how to solve it and present the solution to our clients, along with our recommendations and game plan."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Data Advisory Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  title="Identify The Problem"
                  content="Identifying the problem is the crucial first step. We translate our clients’ requests into a concrete, well-defined problem and study its impact on the business to consult them with ideal solutions."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Collect Appropriate Data"
                  content="Our data experts check for available data. If the data isn’t sufficient, we do a thorough analysis of resources to collect usable data and advise our clients."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Data Wrangling"
                  content="Our data experts carry out raw data processing to eliminate bad data. We will clean and convert the data into a form that can be analyzed further."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Exploring Data"
                  content="Once we have cleaned the data, we see through the data in-depth to find trends or correlations in those datasets. Our data experts find the high-level characteristics that lay hidden in the data."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Performing In-Depth Analysis"
                  content="We apply machine learning, statistical models, and algorithms on the formatted data. Our data team applies all the cutting-edge AI algorithms to unearth high-value insights and predictions."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Data Storytelling"
                  content="After the analysis, our data experts canvas a data journey to explain the client’s story to their stakeholders or customers in a comprehensible and compelling manner."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceApproach title="Data Science Approach">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                title="Identify Business Use Cases"
                content="We identify the use case and opportunities and set a definite use case to kick-off."
              ></SubApproach>
              <SubApproach
                title="Predictive Modeling"
                content="Our data scientists will then run algorithms on the data to get desired outcomes and insights."
              ></SubApproach>
              <SubApproach
                title="Boost Business Performance"
                content="We will present the final results that will improve decision-making capabilities."
              ></SubApproach>
              <SubApproach
                title="Gain Data Understanding"
                content="We will extract data from various sources to ensure data quality and consistency."
              ></SubApproach>
              <SubApproach
                title="Descriptive Analysis"
                content="We will hold a discussion to understand if the outcomes align with the desired business goals."
              ></SubApproach>
            </div>
          </div>
        </div>
      </section>
      <WorkTogether/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import ServiceHeader from "../components/ServiceHeader.vue";
import ServicePromise from "../components/ServicePromise.vue";
import Spacer from "../components/Spacer.vue";
import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import SubHeader from "../components/SubHeader.vue";

export default {
  name: "DataScience",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    ServiceHeader,
    ServicePromise,
    SubService,
    ServiceAsideRight,
    ServiceAsideLeft,
    ServiceLeft,
    ServiceRight,
    ServiceApproach,
    SubApproach,
    WorkTogether,
    SubHeader
  },
  methods: {
    scrollDown() {
      document.getElementById("first").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"
#data-sci
  background-image: url(../assets/background/services-large/data-science.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

#approach
  background-image: url(../assets/background/services-large/approach-6.jpg)

.reg-link
  margin: 20px 0 0
</style>

<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="Data & Analytics" kicker="Accelerate decision-making with AI-powered analytics.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Data & Analytics"
            content="Our data analytics solutions deliver analytical and actionable insights to give you access to what your target market wants and needs."
          />
          <Spacer/>
        </div>
      </section>
      <SubHeader
        title="AI Strategy"
        content="Our analytics services help companies identify potential opportunities to streamline operations and identify outliers that hinder the company’s progress. Our AI-driven data analytics services are aimed to help businesses achieve superior operational efficiencies and drive new revenue opportunities."
      />
      <section class="content-block">
        <div class="container">
          <Spacer/>
        </div>
      </section>
      <SubHeader
        title="Predictive Analytics"
        content="We provide scalable and cutting-edge solutions to gain actionable insights into your existing data, processes, customers and markets. We start by understanding your datasets and then create a predictive model in order to empower you to make smarter decisions."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Predictive Analytics Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Dataset Understanding"
                  content="Dataset understanding, improving data literacy, understanding data sets and data sources."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Identifying Patterns"
                  content="Identifying patterns, trends, characteristics, inconsistencies, and outliers from datasets."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Building the Model"
                  content="Building predictive models using historical data to generate future insights and forecast trends."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Data Distillation"
                  content="Raw data collected from various sources is converted into smaller structured formats of actionable information. Refining data quality."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Evaluation"
                  content="Evaluation of the predictive performance of the model on unseen data, and fine tuning the model to improve performance."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Deployment"
                  content="Deployment using best practices to ensure smooth transactions of predictive models seamlessly into production."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Advantages title="Advantages of Predictive Analytics">
        <ul class="text-white">
          <li>- Gain deeper insights into data</li>
          <li>- Identify trends and patterns</li>
          <li>- Predict behavior</li>
          <li>- Understand customers better</li>
          <li>- Boost business performance</li>
          <li>- Drive strategic decision-making</li>
        </ul>
      </Advantages>
      <section class="content-block">
        <div class="container">
          <Spacer/>
        </div>
      </section>
      <SubHeader
        title="Deep Learning"
        content="Deep learning cloud service helps to not only reduce operating costs across the board but also process large volumes of data to derive insightful actions. The key highlight of our unique solution is to perform feature detection from massive amounts of unlabeled training data."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Deep Learning Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Gathering And Training Data"
                  content="Gathering unlabeled training data to make concise conclusions."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Parsing Data"
                  content="Generating actionable results with data processing models when solving data science tasks."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Choosing And Training Models"
                  content="Training neural network models to automate the learning of complex representations of data."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Labeling Data"
                  content="Labeling large amounts of data and determining their matching characteristics."
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
        title="Cognitive"
        content="Services include computer vision, machine learning, natural language processing, speech recognition, text analytics and automation. Using cognitive services helps organizations in generating insights to decrease costs, enhance efficiency, boost revenue and improve customer support."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Cognitive Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Face API"
                  content="Find, analyze, organize and tag faces in photos based on age, emotion, gender, & smile."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Emotion API"
                  content="Personalize user experiences by analyzing faces to detect a range of emotion."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Visual Recognition API"
                  content="Quickly tag, classify and train visual content using ML and Natural Language Classification features."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Related</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper related-wrapper">
                <RelatedBox
                  link="/insights/big-data-business"
                  category="Insight"
                  title="Roadmap For Driving Business With Data"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/analytics-is-popular"
                  category="Insight"
                  title="The Popularity of Analytics"
                ></RelatedBox>
              </div>
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
import Hero from "../components/Hero.vue";
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
import Advantages from "../components/Advantages.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "ServiceDataAnalytics",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Hero,
    ServicePromise,
    SubService,
    ServiceAsideRight,
    ServiceAsideLeft,
    ServiceLeft,
    ServiceRight,
    ServiceApproach,
    SubApproach,
    WorkTogether,
    SubHeader,
    Advantages,
    RelatedBox
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/data-analytics.jpg)

</style>
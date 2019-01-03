<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Machine Learning"
        kicker="Leverage machine learning capabilities to enhance your business."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Machine Learning"
            content="We build maching learning models with great predictive accuracy but help clients to leverage  predictive analytics and insights  for business efficiency and growth. We provide end-to-end services from data science ideation, to proof of concept (POS), to data science strategy, and solution design and development."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Machine Learning Expertise</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  title="Customer Segmentation"
                  content="We can build a customer segmentaiton model to group them along different dimensions. This would allow your business to do targeted marketing, maximize cross- and up-selling, improve customer service & much more."
                />
                <SubService
                  title="Customer Churn Analysis & Modeling"
                  content="We analyze different satisfaction levels of your customers, and also build a predictive model to predict customers who might be cancelling your service or subscription in near-future."
                />
                <SubService
                  title="Price Optimization"
                  content="We build a price optimization models for your business. This model would try to maximize business revenue by factoring in demand, special events, competitor's prices, stock, expiry dates, seasonality and other related aspects."
                />
                <SubService
                  title="Anomaly Detection"
                  content="For your business, we can build you state-of-the-art anomaly detection model which would monitor a real-time stream of business events such as clicks, pageviews, service access etc. You will be able to learn about spike or outage in real-time, saving hundreds of dashboarding work-hours to track events."
                />
                <SubService
                  title="Recommender Systems"
                  content="If your business has a wide range of services, cases or products, we can build you a recommender stystem which would help your customers to pick appropriate service or product. Such systems help businesses to increase both sales and customer satisfaction."
                />
                <SubService
                  title="Predictive Analytics"
                  content="We apply data mining, statstical and machine learning techniques to learn trends from historical business data, and make prediction about future events. Such predictive analytics help business to make informed decisions in terms of marketing, sales, customer service and much more."
                />
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
import WorkTogether from "../components/WorkTogether.vue";

export default {
  name: "ServiceMachineLearning",
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
    WorkTogether
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/machine-learning.jpg)

</style>

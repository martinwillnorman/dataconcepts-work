<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image tinted"></div>
        <div class="container">
          <div class="row">
            <div class="show-more">
              <svg
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
            <div class="column col-1 no-content"></div>
            <div class="column col-4 responsive-8 responsive-12 center-content">
              <ServiceHeader
                title="Big Data"
                kicker="Empower your organization with data-driven insights."
              />
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <ServicePromise
            title="Big Data"
            content="Big data analytics holds great potential for organizations that want to increase revenue and reduce cost. With big data you can go beyond traditional descriptive analytics and incorporate predictive and prescriptive analysis, which will help drive better decision-making. We help you rapidly deploy big data analytics solutions that integrate, store, manage, and protect your data."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1 class="section-header">Big Data Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
                <SubService
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
                <SubService
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
                <SubService
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
                <SubService
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
                <SubService
                  title="Identify Your Use Cases"
                  content="Understanding your Big Data and Analytics use cases can be a challenge. Identifying the first step from a business and technology perspective can be overwhelming. Let us help you solve these challenges and get the most out of your Big Data environment."
                />
              </div>
            </div>
          </div>
          <Spacer/>
        </div>
      </section>
      <ServiceRight title="Big Data Opportunities" content="this is opportunity"/>
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
import ServiceRight from "../components/ServiceRight.vue";

export default {
  name: "BigData",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    ServiceHeader,
    ServicePromise,
    SubService,
    ServiceRight
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"
.cover-image
  background-image: url(../assets/background/insights/insight-1large.jpg)
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

</style>
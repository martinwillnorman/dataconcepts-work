<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image tinted"></div>
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
                title="Cyber Security"
                kicker="Safeguard your digital enterprise with end-to-end advisory, protective & security monitoring services."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Cyber Security"
            content="We provide end-to-end advisory, protection and monitoring services. We advise on the maturity of your current cybersecurity perimeter and make recommendations to further protect your systems with our solutions."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Cyber Security Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Consulting"
                  content="Make Cybersecurity & Data Protection a Business Enabler in the Digital Enterprise."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Data Privacy & Protection"
                  content="As data proliferates across the digital enterprise, confidential and personal data is at risk from ever smarter cyber criminals, states and competitors. Data Concepts helps clients to comply with new regulations, including the EU General Data Protection Regulation."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="GDPR Readiness"
                  content="Compliance is one half of the GDPR story. The other is how you use it to unlock customer loyalty."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Application Security"
                  content="With more than 80% of attacks targeted at applications, the digital enterprise is more vulnerable than ever. You can strengthen your applications with effective cybersecurity protection that ensures customer retention and gives you a competitive advantage."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Identity & Access Management"
                  content="Adopting social, mobility, analytics, cloud and Internet of Things (SMACT) technologies as part of your digital transformation doesn’t have to mean new risks to sensitive data and other assets."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Open Source Analysis"
                  content="Open Source Analysis secures applications from open source component risks, helping to mitigate the security, legal, and operational risks that can come hand-in-hand with using open source components."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Web Application Firewall"
                  content="With estimates suggesting that more than 80% of security breaches take place at the application layer, protecting your web application servers is a strategic imperative."
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
import ServiceHeader from "../components/ServiceHeader.vue";
import ServicePromise from "../components/ServicePromise.vue";
import Spacer from "../components/Spacer.vue";
import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import WorkTogether from "../components/WorkTogether.vue";

export default {
  name: "CyberSecurity",
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
    WorkTogether
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
.cover-image
  background-image: url(../assets/background/services-large/cyber-security.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

.reg-link
  margin: 20px 0 0
</style>

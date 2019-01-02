<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div v-parallax="0.4" id="cyber" class="cover-image tinted"></div>
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
            content="Working with complex commercial and government organizations gives us an understanding of cybersecurity from all angles: technology, business and legal. We have invested heavily in establishing our credentials, working closely with international security associations and standards bodies. Our global experience helps us predict and defend against new attacks, and our front-line capabilities reflect this knowledge. While cyber threats are global, we know that requirements vary locally and challenges are unique to each organization."
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
                  title="Data Privacy & Protection"
                  content="As data proliferates across the digital enterprise, confidential and personal data is at risk from ever smarter cyber criminals, states and competitors. Data Concepts helps clients to comply with new regulations, including the EU General Data Protection Regulation."
                />

                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="100"
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
                  title="Open Source Analysis"
                  content="Open Source Analysis secures applications from open source component risks, helping to mitigate the security, legal, and operational risks that can come hand-in-hand with using open source components."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  title="Web Application Firewall"
                  content="With estimates suggesting that more than 80% of security breaches take place at the application layer, protecting your web application servers is a strategic imperative."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Consulting"
                  content="Make Cybersecurity & Data Protection a Business Enabler in the Digital Enterprise."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="GDPR Readiness"
                  content="Compliance is one half of the GDPR story. The other is how you use it to unlock customer loyalty."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceApproach title="Cyber Security Approach">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                title="Risk Management"
                content="Our systematic approach to establishing an overall risk management framework takes into account an organization’s unique risk profile and regulatory and privacy requirements. We help clients articulate governance and policies to:"
              >
                <ul>
                  <li>Make smarter investments.</li>
                  <li>Identify the costs, benefits, risks and opportunities of deploying new strategies.</li>
                  <li>Incorporate tactics that leverage existing security investments.</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                title="Consulting"
                content="Our consulting services encompass the governance, strategies, frameworks, plans and assessments necessary to create and manage an effective enterprise-wide security program. Key services include:"
              >
                <ul>
                  <li>Threat, vulnerability, risk and maturity assessments.</li>
                  <li>Governance, risk and compliance.</li>
                  <li>Security strategies and policies.</li>
                  <li>Compliancy frameworks.</li>
                  <li>Awareness, education and change management.</li>
                  <li>Security improvement programs.</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                title="Security Improvement"
                content="As a leading systems integrator with extensive knowledge of the latest tools from leading vendors, we work with clients to:"
              >
                <ul>
                  <li>Understand their supply chains.</li>
                  <li>Create secure enterprise architectures.</li>
                  <li>Deliver senior system, software, data and communications engineering teams.</li>
                  <li>Secure client infrastructure.</li>
                </ul>
              </SubApproach>
              <SubApproach
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
                title="IT Security Evaluation"
                content="Key Services Include:"
              >
                <ul>
                  <li>Common Criteria evaluations.</li>
                  <li>Common Criteria consulting.</li>
                  <li>Vulnerability assessment.</li>
                  <li>Penetration testing.</li>
                  <li>Assurance continuity.</li>
                </ul>
              </SubApproach>
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
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";

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
    WorkTogether,
    ServiceApproach,
    SubApproach
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

#cyber
  background-image: url(../assets/background/services-large/cyber-security.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

#approach
  background-image: url(../assets/background/services-large/approach-3.jpg)
  


.reg-link
  margin: 20px 0 0
</style>

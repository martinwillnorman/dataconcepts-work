<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="Cyber Security"
        kicker="Safeguard your digital enterprise with end-to-end advisory, protective & security monitoring services."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Promise
        subtitle="the promise"
        content="Working with complex commercial and government organizations gives us an understanding of cybersecurity from all angles: technology, business and legal. We have invested heavily in establishing our credentials, working closely with international security associations and standards bodies. Our global experience helps us predict and defend against new attacks, and our front-line capabilities reflect this knowledge. While cyber threats are global, we know that requirements vary locally and challenges are unique to each organization."
      />

      <Services subtitle="services">
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Data Privacy & Protection"
          content="As data proliferates across the digital enterprise, confidential and personal data is at risk from ever smarter cyber criminals, states and competitors. Data Concepts helps clients to comply with new regulations, including the EU General Data Protection Regulation."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Application Security"
          content="With more than 80% of attacks targeted at applications, the digital enterprise is more vulnerable than ever. You can strengthen your applications with effective cybersecurity protection that ensures customer retention and gives you a competitive advantage."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Identity & Access Management"
          content="Adopting social, mobility, analytics, cloud and Internet of Things (SMACT) technologies as part of your digital transformation doesn’t have to mean new risks to sensitive data and other assets."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="Open Source Analysis"
          content="Open Source Analysis secures applications from open source component risks, helping to mitigate the security, legal, and operational risks that can come hand-in-hand with using open source components."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Web Application Firewall"
          content="With estimates suggesting that more than 80% of security breaches take place at the application layer, protecting your web application servers is a strategic imperative."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          title="Consulting"
          content="Make Cybersecurity & Data Protection a Business Enabler in the Digital Enterprise."
        />
        <SubService
          data-aos="fade-up"
          data-aos-duration="600"
          title="GDPR Readiness"
          content="Compliance is one half of the GDPR story. The other is how you use it to unlock customer loyalty."
        />
      </Services>

      <InsightHighlight
        title="Data Security in the BI & IoT World"
        imagesource="../insight-images/abstract.jpg"
        link="/insights/data-security-bi"
      />

      <Capabilities subtitle="capabilities">
        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="IT Security Evaluation"
          content="Key Services Include:"
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Common Criteria evaluations</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Common Criteria consulting</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Vulnerability assessment</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Penetration testing</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Assurance continuity</li>
          </ul>
        </SubCapability>

        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Security Improvement"
          content="As a leading systems integrator with extensive knowledge of the latest tools from leading vendors, we work with clients to:"
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Understand their supply chains</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Create secure enterprise architectures</li>
            <hr class="subcapability-hr">
            <li
              class="subcapability-list-item"
            >Deliver senior system, software, data and communications engineering teams</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Secure client infrastructure</li>
          </ul>
        </SubCapability>

        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          title="Consulting"
          content="Our consulting services encompass the governance, strategies, frameworks, plans and assessments necessary to create and manage an effective enterprise-wide security program. Key services include:"
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Threat, vulnerability, risk and maturity assessments</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Governance, risk and compliance</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Security strategies and policies</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Compliancy framework</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Awareness, education and change management</li>
            <hr class="subcapability-hr">
            <li class="subcapability-list-item">Security improvement programs</li>
          </ul>
        </SubCapability>

        <SubCapability
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          title="Risk Management"
          content="Our systematic approach to establishing an overall risk management framework takes into account an organization’s unique risk profile and regulatory and privacy requirements. We help clients articulate governance and policies to:"
        >
          <ul class="subcapability-list">
            <li class="subcapability-list-item">Make smarter investments</li>
            <hr class="subcapability-hr">
            <li
              class="subcapability-list-item"
            >Identify the costs, benefits, risks and opportunities of deploying new strategies</li>
            <hr class="subcapability-hr">
            <li
              class="subcapability-list-item"
            >Incorporate tactics that leverage existing security investments</li>
          </ul>
        </SubCapability>
      </Capabilities>

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
import Capabilities from "../../components/service/Capabilities.vue";
import SubCapability from "../../components/service/SubCapability.vue";
import InsightHighlight from "../../components/service/InsightHighlight.vue";
import Footer from "../../components/service/Footer.vue";

export default {
  name: "CyberSecurity",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    SubService,
    Promise,
    Services,
    Capabilities,
    SubCapability,
    InsightHighlight,
    Footer
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/services-large/cyber-security.jpg)
  
</style>

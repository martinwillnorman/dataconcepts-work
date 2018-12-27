<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div id="blockchain" v-parallax="0.4" class="cover-image tinted"></div>
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
              <ServiceHeader title="Blockchain" kicker="The Next Generation of Digital Commerce."/>
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Blockchain"
            content="As blockchain strategies gain traction and the technology matures, organizations are becoming increasingly aware of the fundamental way that business transactions will change. This smart, decentralized, trusted and highly-encrypted network of computing nodes is poised to be the next disruptive wave in digital business. Organizations that engage early—to explore strategies, test use cases and hone their skills—increase the likelihood that they will reap benefits."
          />
          <Spacer/>
          <div class="row">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Blockchain Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Enterprise Blockchain Consulting and Evaluation"
                  content="We can help you determine the right enterprise blockchain strategy for your business. Data Concepts focuses on providing scalable and sector-specific blockchain applications that directly support our clients, working together to build better solutions."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Industry-specific Application Creation"
                  content="Our expertise is at your disposal as you develop blockchain applications to improve the efficiency in the way you do business. While blockchain can seem complex, we simplify the technology and clearly articulate how it can support your business."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Comprehensive Technical Ability"
                  content="We specialize in Smart Business Contracts, Customer Loyalty & Rewards Systems, Blockchain Data Storage Solutions, Distributed Ledgers for Financial Transparency, and other focused applications."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Customized Enterprise Blockchain Solutions"
                  content="We build blockchain applications for finance, real estate, and the supply-chain industry."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Developer Training"
                  content="We will train your existing staff to develop a practical understanding of blockchain technology and its core function in your business."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Executive Training"
                  content="Our executive training covers enterprise blockchain, major and side chains and non-disruptive deployment techniques."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceAsideRight
        title="Blockchain: The Future of Data"
        content="We provide our clients with a complete view of the blockchain-based technology landscape and its potential business implications. We work with each client to help build smart strategies around effective use-cases, investment and implementation. Blockchain has the potential to drive profound, positive change."
      />
      <section class="content-block slant-2">
        <div class="container">
          <ServiceLeft
            title="Cut the Cost of Business Transactions"
            content="With distributed ledger technology, there’s no need to engage costly intermediary services, such as lawyers, brokers and bankers, to ensure legitimacy and security for your transactions. By eliminating the third-party intervention, we can significantly lower transaction fees and optimise efficiency."
          />
          <ServiceRight
            title="Optimize Your Financial Operations"
            content="Сash transactions can take hours or a few days in a row, especially during holidays or weekends, affecting overall company performance and stopping critical business processes. Blockchain-based technology will allow you to avoid the wait time as you can easily carry out financial operations in minutes at any place round-the-clock."
          />
          <ServiceLeft
            title="Secure Your Financial Operations"
            content="Administrative control is a crucial structure of any business. But its maintenance and regulation take a lot of efforts and resources; thus it can be optimised with Smart Contracts. This technology will provide transparency between all the parties and guarantee no data was altered or deleted, even if you operate in the semi-trusted environment."
          ></ServiceLeft>
          <ServiceRight
            title="Reinforce your asset management"
            content="Distributed ledger technology enables tracking any product-related information, such as price, location, date, quality etc. over the whole product lifecycle, allowing businesses to address such supply chain issues as lack of transparency, reliability, traceability and security."
          />
        </div>
      </section>
      <ServiceApproach title="Blockchain Approach">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                title="Technology Research & Prototyping"
                content="We make a comprehensive assessment of your business infrastructure, together with the market research, to gauge the opportunities and define what blockchain solution will help to optimize company operations and boost its productivity. Before the idea launch, we always make a rapid prototype that allows you to measure its efficiency and make appropriate adjustments, if needed."
              ></SubApproach>
              <SubApproach
                title="Architecture & Environment Setup"
                content="The reliability of the technology solution highly depends on the quality of the environment. Our team will set up a trusted environment and establish the communication architecture, ensuring a secure and bug-free technology deployment."
              ></SubApproach>
              <SubApproach
                title="User Experience Design"
                content="Our team of UI/UX experts will help you create a blockchain-based solution that offers a meaningful and valuable experience to the end-users. We apply design thinking techniques to carefully analyse your business needs and come up with a best-fit solution."
              ></SubApproach>
              <SubApproach
                title="Deployment & Monitoring"
                content="Our ultimate goal is to ensure the smooth process of technology development followed by quality testing. We validate and adjust blockchain parameters and eliminate any possible risks that may occur."
              ></SubApproach>
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
                  link="/insights/blockchain-world"
                  category="Insight"
                  title="Our Insights on the World of Blockchain"
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
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "Blockchain",
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
    RelatedBox
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
#blockchain
  background-image: url(../assets/background/services-large/blockchain.jpg)
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)

#approach
  background-image: url(../assets/background/services-large/approach-4.jpg)

.reg-link
  margin: 20px 0 0
</style>

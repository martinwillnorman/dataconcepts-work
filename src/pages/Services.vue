<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <!-- <section class="content-block">
        <div class="content-wrapper">
          <div class="nav-block"></div>
        </div>
      </section>-->
      <section class="content-block fullpage black">
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
            <div class="column col-12">
              <div class="content-wrapper header-wrapper text-white">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="600"
                  class="insights-header"
                >Our services, with a smile.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block black">
        <div class="content-wrapper services-wrapper">
          <div class="service">
            <router-link class="service-link" to="/services/big-data"></router-link>
            <div id="big-data-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Big Data</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/iot"></router-link>
            <div id="iot-bround" class="service-background"></div>
            <div class="service-content">
              <h3>IoT</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/cloud"></router-link>
            <div id="cloud-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Cloud</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/business-intelligence"></router-link>
            <div id="bi-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Business Intelligence</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/data-analytics"></router-link>
            <div id="data-analytics-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Data & Analytics</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/artificial-intelligence"></router-link>
            <div id="ai-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Artificial Intelligence</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/blockchain"></router-link>
            <div id="blockchain-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Blockchain</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/application-development"></router-link>
            <div id="app-dev-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Application Development</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/mobility"></router-link>
            <div id="mobility-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Mobility</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/machine-learning"></router-link>
            <div id="ml-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Machine Learning</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/kafka"></router-link>
            <div id="kafka-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Kafka</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/program-management"></router-link>
            <div id="program-management-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Program Management</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/digital-strategy"></router-link>
            <div id="digital-strategy-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Digital Strategy</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/cyber-security"></router-link>
            <div id="cyber-security-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Cyber Security</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/microsoft-azure"></router-link>
            <div id="cyber-security-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Microsoft Azure</h3>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block mostpage">
        <div class="container">
          <div class="row">
            <div class="column col-12 center-content">
              <h1 class="lets-talk" data-aos="fade-up" data-aos-duration="900">Let's talk data.</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block black">
        <div class="content-wrapper services-wrapper">
          <div class="service">
            <router-link class="service-link" to="/services/data-strategy"></router-link>
            <div id="data-strategy-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Data Strategy</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/data-governance"></router-link>
            <div id="data-gov-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Data Governance</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/data-warehouse"></router-link>
            <div id="data-ware-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Data Warehouse</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/data-integration"></router-link>
            <div id="data-int-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Data Integration</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/master-data-management"></router-link>
            <div id="mdm-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Master Data Management</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/data-visualization"></router-link>
            <div id="data-vis-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Data Visualization</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/data-science"></router-link>
            <div id="data-sci-bround" class="service-background-2"></div>
            <div class="service-content">
              <h3>Data Science</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";

export default {
  name: "Services",
  components: {
    NavBarWhite,
    ModalMenu
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

.insights-header
  font:
    size: 170px
    family: $font-body
  line-height: 178px
  letter-spacing: -2px

.header-wrapper 
  // max-width: 1000px
  margin: 0 auto
  padding-top: 180px

#big-data-bround
  background-image: url(../assets/background/services-small/big-data.jpg)

#iot-bround
  background-image: url(../assets/background/services-small/iot.jpg)

#cloud-bround
  background-image: url(../assets/background/services-small/cloud.jpg)

#bi-bround
  background-image: url(../assets/background/services-small/bi.jpg)

#data-analytics-bround
  background-image: url(../assets/background/services-small/data-analytics.jpg)

#ai-bround
  background-image: url(../assets/background/services-small/ai.jpg)

#blockchain-bround
  background-image: url(../assets/background/services-small/blockchain.jpg)

#app-dev-bround
  background-image: url(../assets/background/services-small/app-dev.jpg)

#cyber-security-bround
  background-image: url(../assets/background/services-small/cyber-security.jpg)

#mobility-bround
  background-image: url(../assets/background/services-small/mobility.jpg)

#ml-bround
  background-image: url(../assets/background/services-small/machine-learning.jpg)

#kafka-bround
  background-image: url(../assets/background/services-small/kafka.jpg)

#program-management-bround
  background-image: url(../assets/background/services-small/program-management.jpg)

#digital-strategy-bround
  background-image: url(../assets/background/services-small/digital-strategy.jpg)

#data-strategy-bround
  background-image: url(../assets/background/services-small/data-strategy.jpg)

#data-gov-bround
  background-image: url(../assets/background/services-small/data-governance.jpg)

#data-ware-bround
  background-image: url(../assets/background/services-small/data-warehouse.jpg)

#data-int-bround
  background-image: url(../assets/background/services-small/data-integration.jpg)

#data-sci-bround
  background-image: url(../assets/background/services-small/data-science.jpg)

#mdm-bround
  background-image: url(../assets/background/services-small/mdm.jpg)

#data-vis-bround
  background-image: url(../assets/background/services-small/data-visualization.jpg)

.services-wrapper
    display: flex
    flex-wrap: wrap

.service
    flex-basis: 25%
    width: 25%
    max-width: 25%
    height: 22vw
    position: relative

.service-background
    filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)
    background-size: cover
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0

.service-background-2
    filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(235deg) saturate(6)
    background-size: cover
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0

.service-link
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 999    

.service-link:hover ~ .service-background
    filter: unset

.service-link:hover ~ .service-background-2
    filter: unset

.service-link:hover ~ .service-content h3:after
  opacity: 1
  transform: translatey(2px)

.service-content
  display: inline-block
  position: relative
  top: 64%
  left: 5%
  width: 90%

.service-content h3
  color: #fff
  font:
      size: 2.4rem
      family: $font-body
      weight: 400
  letter-spacing: 2px

.lets-talk
    font: 
        size: 8rem
    color: #ff48a6
    background-image: linear-gradient(135deg,#29d5ff 10%,#6c03a8 90%);
    -webkit-text-fill-color: transparent
    -webkit-background-clip: text
    display: inline-block
    text-align: center
    width: 100%

@media only screen and (max-width: 1500px)
  h3
    font:
      size: 2rem !important

@media only screen and (max-width: 1230px) 
  .service
    flex-basis: 33.3333%
    width: 33.3333%
    max-width: 33.3333%
    height: 31vw

  h3
    font:
      size: 2.2rem !important

@media only screen and (max-width: 900px) 
  .service
    flex-basis: 50%
    width: 50%
    max-width: 50%
    height: 45vw

@media only screen and (max-width: 600px) 
  .service
    flex-basis: 100%
    width: 100%
    max-width: 100%
    height: 75vw

  h1
    font-size: 5rem
</style>

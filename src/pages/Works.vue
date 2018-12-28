<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <section class="content-block">
        <div class="content-wrapper">
          <div class="nav-block white"></div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-4 responsive-12 center-horizontal centered">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                class="content-wrapper header-wrapper"
              >
                <h1 class="section-header medium">Our Work</h1>
                <p>A selection of our favorite case studies and client engagements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 center-horizontal">
              <div class="content-wrapper work-wrapper">
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/circuit-courts">
                    <div class="work-background circuit-courts"></div>
                    <div class="work-tint circuit-courts"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">The Circuit Courts of Virginia: Legacy Modernization</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/vehicle-inspection">
                    <div class="work-background vehicle-inspection"></div>
                    <div class="work-tint vehicle-inspection"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">VA State Police: Vehicle Inspection Program</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/magellan-health">
                    <div class="work-background magellan-health"></div>
                    <div class="work-tint magellan-health"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Magellan Health: Single Sign On</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/web-portal">
                    <div class="work-background web-portal"></div>
                    <div class="work-tint web-portal"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">VA State Police: Web Portal</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/moonlighting">
                    <div class="work-background moonlighting"></div>
                    <div class="work-tint moonlighting"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Moonlighting: Jobs Portal</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/sex-registry">
                    <div class="work-background sex-registry"></div>
                    <div class="work-tint sex-registry"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Virginia Sex Offender Registry</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/first-union">
                    <div class="work-background first-union"></div>
                    <div class="work-tint first-union"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">First Union Bank: Crowd-Sourcing</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/finance-portal">
                    <div class="work-background finance-portal"></div>
                    <div class="work-tint finance-portal"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Courts Of Virginia: Finance Portal</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/server-migration">
                    <div class="work-background server-migration"></div>
                    <div class="work-tint server-migration"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">WebSphere Server Migration</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/estes-improvement">
                    <div class="work-background estes-improvement"></div>
                    <div class="work-tint estes-improvement"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Estes Trucking: Performance Improvement</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/freight-volume">
                    <div class="work-background freight-volume"></div>
                    <div class="work-tint freight-volume"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Freight Volume Planning System</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/freight-movement">
                    <div class="work-background freight-movement"></div>
                    <div class="work-tint freight-movement"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">FEMA: Freight Movement Missions</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/estes-quote">
                    <div class="work-background estes-quote"></div>
                    <div class="work-tint estes-quote"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Estes Trucking: Quote Generation System</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/capital-one">
                    <div class="work-background capital-one"></div>
                    <div class="work-tint capital-one"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Capital One: Salesforce Data Load Automation</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/predictive-modeling">
                    <div class="work-background predictive-modeling"></div>
                    <div class="work-tint predictive-modeling"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Predictive Modeling For Debt Collection</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/judicial-enforcement">
                    <div class="work-background judicial-enforcement"></div>
                    <div class="work-tint judicial-enforcement"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Judicial Enforcement Management System</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/jury-management">
                    <div class="work-background jury-management"></div>
                    <div class="work-tint jury-management"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Jury Management System</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/data-lake">
                    <div class="work-background data-lake"></div>
                    <div class="work-tint data-lake"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Cloud Data Lake: Business Transformation</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/scala-architecture">
                    <div class="work-background scala-architecture"></div>
                    <div class="work-tint scala-architecture"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Scala Architecture Migration</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <router-link class="work-link" to="/work/devops-transformation">
                    <div class="work-background devops-transformation"></div>
                    <div class="work-tint devops-transformation"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">DevOps Tranformation Strategy & Roadmap</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
                <WorkBox data-aos="fade-up" data-aos-duration="600">
                  <router-link class="work-link" to="/work/unified-data">
                    <div class="work-background unified-data"></div>
                    <div class="work-tint unified-data"></div>
                    <div class="work-overlay">
                      <h3 class="text-white">Unified Data Processing Platform</h3>
                    </div>
                    <WorkArrow/>
                  </router-link>
                </WorkBox>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block light-grey">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-content">
              <div class="content-wrapper">
                <h1 class="section-header">Clientele</h1>
              </div>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper clientele-wrapper">
                <ClienteleBox data-aos="fade-up" data-aos-duration="600">
                  <img src="../assets/logo/nike.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <img src="../assets/logo/nordstrom.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <img src="../assets/logo/cdot.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  <img src="../assets/logo/colorado-state.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600">
                  <img src="../assets/logo/advanced-auto.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <img src="../assets/logo/allianz.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <img src="../assets/logo/dcr.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  <img src="../assets/logo/dominion.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600">
                  <img src="../assets/logo/estes.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <img src="../assets/logo/federal-reserve.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <img src="../assets/logo/fidelity.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  <img src="../assets/logo/hughes.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600">
                  <img src="../assets/logo/learning-tree.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <img src="../assets/logo/magellan.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <img src="../assets/logo/pfg.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  <img src="../assets/logo/red-cross.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600">
                  <img src="../assets/logo/reuters.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <img src="../assets/logo/virginia-police.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  <img src="../assets/logo/union.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  <img src="../assets/logo/vdh.svg" alt>
                </ClienteleBox>
                <ClienteleBox data-aos="fade-up" data-aos-duration="600">
                  <img src="../assets/logo/virginia-credit.svg" alt>
                </ClienteleBox>
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
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import WorkTogether from "../components/WorkTogether.vue";
import WorkBox from "../components/WorkBox.vue";
import WorkArrow from "../components/WorkArrow.vue";
import ClienteleBox from "../components/ClienteleBox.vue";

export default {
  name: "Works",
  components: {
    NavBar,
    ModalMenu,
    Spacer,
    WorkTogether,
    WorkBox,
    WorkArrow,
    ClienteleBox
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.clientele-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center

img
  object-fit: contain
  max-height: 70px
  max-width: 150px

.header-wrapper
  display: flex
  flex-direction: column
  align-items: center
  text-align: center

.header-wrapper p
  font: 
    size: 1.4rem
    weight: 300
  color: $font-c-p-2  
  line-height: 1.8

.work-wrapper
  max-width: 1140px
  display: flex
  flex-wrap: wrap

.work-link
  height: 376px
  position: relative
  overflow: hidden
  display: flex
  flex-direction: column
  justify-content: flex-end

.work-link:hover .work-tint 
  opacity: 0.8

.work-link:hover .work-background
  transform: scale(1.2) 

.work-link:hover .work-overlay
  padding-bottom: 35px

.work-link:hover .work-arrow
  opacity: 1

.work-background
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  background-size: cover
  background-position: top center
  transition: transform ease-in-out 3s

.work-tint
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  opacity: 1
  transition: opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1)

.work-overlay
  position: relative
  margin-left: 30px
  margin-right: 20px
  max-width: 100%
  z-index: 999
  margin-bottom: 20px
  transition: padding-bottom 200ms cubic-bezier(0.25, 0.1, 0.25, 1)

.work-overlay h3
  font: 
    size: 2.8rem
  line-height: 1.2

.work-tint.circuit-courts
  background-color: #FF2828

.work-tint.vehicle-inspection
  background-color: #EF4C23

.work-tint.magellan-health
  background-color: #ca0853

.work-tint.web-portal
  background-color: #cb3694

.work-tint.moonlighting
  background-color: #426EFF

.work-tint.sex-registry
  background-color: #ffc200

.work-tint.first-union
  background-color: #0e414c

.work-tint.finance-portal
  background-color: #FF2828

.work-tint.server-migration
  background-color: #EF4C23

.work-tint.estes-improvement
  background-color: #ca0853

.work-tint.freight-volume
  background-color: #cb3694

.work-tint.freight-movement
  background-color: #426EFF

.work-tint.estes-quote
  background-color: #ffc200

.work-tint.capital-one
  background-color: #0e414c

.work-tint.predictive-modeling
  background-color: #FF2828

.work-tint.judicial-enforcement
  background-color: #EF4C23

.work-tint.jury-management
  background-color: #ca0853

.work-tint.data-lake
  background-color: #cb3694

.work-tint.scala-architecture
  background-color: #426EFF

.work-tint.devops-transformation
  background-color: #ffc200

.work-tint.unified-data
  background-color: #0e414c

.work-background.circuit-courts
  background-image: url(../assets/background/work-small/circuit-courts.jpg)

.work-background.vehicle-inspection
  background-image: url(../assets/background/work-small/vehicle-inspection.jpg)

.work-background.magellan-health
  background-image: url(../assets/background/work-small/magellan-health.jpg)

.work-background.web-portal
  background-image: url(../assets/background/work-small/web-portal.jpg)

.work-background.moonlighting
  background-image: url(../assets/background/work-small/moonlighting.jpg)

.work-background.sex-registry
  background-image: url(../assets/background/work-small/sex-registry.jpg)

.work-background.first-union
  background-image: url(../assets/background/work-small/first-union.jpg)

.work-background.finance-portal
  background-image: url(../assets/background/work-small/finance-portal.jpg)

.work-background.server-migration
  background-image: url(../assets/background/work-small/server-migration.jpg)

.work-background.estes-improvement
  background-image: url(../assets/background/work-small/estes-improvement.jpg)

.work-background.freight-volume
  background-image: url(../assets/background/work-small/freight-volume.jpg)

.work-background.freight-movement
  background-image: url(../assets/background/work-small/freight-movement.jpg)

.work-background.estes-quote
  background-image: url(../assets/background/work-small/estes-quote.jpg)

.work-background.capital-one
  background-image: url(../assets/background/work-small/capital-one.jpg)

.work-background.predictive-modeling
  background-image: url(../assets/background/work-small/predictive-modeling.jpg)

.work-background.judicial-enforcement
  background-image: url(../assets/background/work-small/judicial-enforcement.jpg)

.work-background.jury-management
  background-image: url(../assets/background/work-small/jury-management.jpg)

.work-background.data-lake
  background-image: url(../assets/background/work-small/data-lake.jpg)

.work-background.scala-architecture
  background-image: url(../assets/background/work-small/scala-architecture.jpg)

.work-background.devops-transformation
  background-image: url(../assets/background/work-small/devops-transformation.jpg)

.work-background.unified-data
  background-image: url(../assets/background/work-small/unified-data.jpg)

@media only screen and (max-width: 1080px)
  .work-wrapper
    max-width: 570px

@media only screen and (max-width: 450px)
  .work-link
    height: 300px

  .work-overlay h3
    font: 
      size: 1.8rem

  .work-overlay
    position: relative
    margin-left: 15px
    margin-right: 20px
    margin-bottom: 10px

  .work-link:hover .work-overlay
    padding-bottom: 45px    


</style>

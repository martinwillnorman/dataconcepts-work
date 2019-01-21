<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
        <div class="column col-12">
          <div class="content-wrapper work-wrapper">
            <WorkBox data-aos="fade-up" data-aos-duration="600">
              <router-link class="work-link" to="/work/criminal-history">
                <div class="work-background criminal-history"></div>
                <div class="work-tint criminal-history"></div>
                <div class="work-overlay">
                  <h3 class="text-white">Virginia State Police: Computerized Criminal History</h3>
                </div>
                <WorkArrow/>
              </router-link>
            </WorkBox>
            <WorkBox data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <router-link class="work-link" to="/work/court">
                <div class="work-background court"></div>
                <div class="work-tint court"></div>
                <div class="work-overlay">
                  <h3 class="text-white">Supreme Court of Virginia: Data Warehouse Rearchticture</h3>
                </div>
                <WorkArrow/>
              </router-link>
            </WorkBox>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WorkBox from "../../components/WorkBox.vue";
import WorkArrow from "../../components/WorkArrow.vue";
export default {
  name: "SeeOurWork",
  props: ["subtitle"],
  components: {
    WorkBox,
    WorkArrow
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.work-wrapper
  display: flex
  flex-wrap: wrap
  padding-top: 100px

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

.work-tint.criminal-history
  background-color: #ffc200

.work-tint.court
  background-color: #0e414c

.work-background.circuit-courts
//   background-image: url(../assets/background/work-small/circuit-courts.jpg)

.work-background.vehicle-inspection
//   background-image: url(../assets/background/work-small/vehicle-inspection.jpg)

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

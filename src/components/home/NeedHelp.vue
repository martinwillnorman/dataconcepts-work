<template>
  <section class="content-block service-footer-block">
    <router-link class="service-footer-link-contact" to="/contact">
      <div class="container padded">
        <div class="row">
          <div class="column col-12">
            <div class="content-wrapper service-footer-wrapper">
              <h1 class="footer-header">The Company We Keep.</h1>
              <p class="footer-kicker">Want to work with us?</p>
            </div>
          </div>
        </div>
        <div class="row service-clientele-row">
          <div class="column col-12">
            <div class="content-wrapper service-clientele-wrapper">
              <div class="service-clientele">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  src="../../assets/logo/nike.svg"
                  alt
                >
              </div>
              <div class="service-clientele">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                  src="../../assets/logo/nordstrom.svg"
                  alt
                >
              </div>
              <div class="service-clientele">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  src="../../assets/logo/dominion.svg"
                  alt
                >
              </div>
              <div class="service-clientele">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="150"
                  src="../../assets/logo/reuters.svg"
                  alt
                >
              </div>
              <div class="service-clientele">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  src="../../assets/logo/union.svg"
                  alt
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column col-12">
            <div class="content-wrapper arrow-wrapper">
              <svg
                class="arrow-thin-right__svg"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="39.002px"
                height="26.005px"
                viewBox="286.5 382.498 39.002 26.005"
                enable-background="new 286.5 382.498 39.002 26.005"
                title="Next"
              >
                <g>
                  <polygon
                    fill="#000"
                    points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                  ></polygon>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <router-link class="service-footer-link-people black" to="/people">
      <div class="container padded-large">
        <div class="row">
          <div class="column col-8 center-content">
            <div class="content-wrapper service-footer-wrapper text-white">
              <h1 class="footer-people-header">Undecided? Meet Us.</h1>
            </div>
          </div>
          <div class="column col-4 center-content">
            <div class="content-wrapper arrow-wrapper-people">
              <svg
                class="arrow-thin-right__svg"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="39.002px"
                height="26.005px"
                viewBox="286.5 382.498 39.002 26.005"
                enable-background="new 286.5 382.498 39.002 26.005"
                title="Next"
              >
                <g>
                  <polygon
                    fill="#FFFFFF"
                    points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                  ></polygon>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
import WorkArrow from "../../components/WorkArrow.vue";

export default {
  name: "Footer",
  components: {
    WorkArrow
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.service-footer-block
    flex-wrap: wrap

.footer-header
  color: $font-c-1
  font:
    size: 2.4rem
  margin-bottom: 10px 

.footer-kicker
  color: $font-c-1
  font:
    size: 1.4rem

.footer-people-header
  font:
    size: 2.4rem
    family: $font-body
    weight: 700
  letter-spacing: -1px

.service-clientele-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center
  padding-top: 40px

.service-clientele
  width: 20%
  max-width: 20%
  flex-basis: 20%
  margin: 0
  box-sizing: border-box
  position: relative
  height: 100px
  display: flex
  align-items: center
  justify-content: start

.service-footer-link-contact
    position: relative
    width: 100%
    // background: pink

.service-footer-link-people
    position: relative
    width: 100%

.arrow-wrapper
  margin-top: 40px
  transition: all ease .3s

.service-footer-link-contact:hover .arrow-wrapper
    padding-left: 5%

.arrow-wrapper-people
  transition: all ease .3s

.service-footer-link-people:hover .arrow-wrapper-people
  padding-left: 10%

.service-clientele-row
  padding: 40px 0 0

img
  object-fit: contain
  max-height: 70px
  max-width: 150px

@media only screen and (max-width: 1080px)
  .clientele
    width: 31%
    max-width: 31%
    flex-basis: 31%

@media only screen and (max-width: 800px)
  .clientele
    width: 48%
    max-width: 48%
    flex-basis: 48%

@media only screen and (max-width: 450px)
  .clientele
    width: 98%
    max-width: 98%
    flex-basis: 98%
</style>



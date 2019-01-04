<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage medium-grey">
        <div @click="scrollDown" class="show-more">
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
        <div class="container header-section">
          <div class="row">
            <div class="column col-12 center-content">
              <div class="content-wrapper text-white">
                <h1>We are Data Concepts</h1>
                <h2>Driving Digital Transformation</h2>
              </div>
            </div>
          </div>
        </div>
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="edge"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="false"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="5"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        ></vue-particles>
      </section>
      <section id="first" class="content-block fullpage section-2">
        <div v-parallax="0.4" class="cover-image cover-image-2"></div>
        <div class="container">
          <div class="row padded-top right">
            <div class="column col-11 center-content">
              <div class="content-wrapper text-white">
                <div class="wrapper-2">
                  <h6>WHO WE ARE</h6>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    class="section-header home left medium"
                  >Technology is our craft.</h1>
                </div>
                <div class="wrapper-3">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >Data Concepts is an IT consultancy that specializes in executing project solutions with expertise in Java, Microsoft, Open Source, Analytics, Cloud and Mobile technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block mostpage">
        <!-- <div class="cover-image"></div> -->
        <video
          src="../assets/video/snowflakes.mp4"
          height="800"
          width="1424"
          preload="auto"
          autoplay
          loop
        ></video>
        <div class="container">
          <div class="row">
            <div class="column col-10 centered responsive-12 center-content">
              <div class="content-wrapper dynamic-text-wrapper no-pad">
                <h3>Need help</h3>
                <h3 id="dynamic-text"></h3>
                <h3>We're Here For You.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-block fullpage section-3">
        <div class="cover-image cover-image-3"></div>
        <div class="container">
          <div class="row padded">
            <div class="column col-10 centered center-content">
              <div class="content-wrapper service-wrapper text-white">
                <h6>OUR INSIGHTS</h6>
                <h1 class="section-header home left medium">Born Digital</h1>
                <p>Digital transformation demands new approaches.</p>
                <router-link class="reg-link white margin" to="/services/digital-strategy">More</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="content-block halfpage section-4">
        <div class="container">
          <div class="row padded">
            <div class="column col-12">
              <div class="content-wrapper text-white">
                <h6>OUR SERVICES</h6>
                <h1 class="section-header left">Trends that inform the world of tomorrow</h1>
              </div>
              <div class="content-wrapper related-wrapper">
                <RelatedBox
                  link="/insights/information-architecture"
                  category="Insight"
                  title="Information Architecture Strategy"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/bi-data-warehousing"
                  category="Insight"
                  title="Business Intelligence & Data Warehousing"
                ></RelatedBox>
              </div>
            </div>
          </div>
        </div>
      </section>-->
      <section class="content-block padded-bottom black section-5">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12">
              <div class="content-wrapper text-whtie">
                <h6>OUR SERVICES</h6>
                <h1 class="section-header left text-white">Trends that inform the world of tomorrow</h1>
              </div>
            </div>
          </div>
        </div>
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
              <h3>BI</h3>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="content-block mostpage section-4"></section> -->
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "Home",
  components: {
    NavBarWhite,
    ModalMenu,
    RelatedBox
  },
  data() {
    return {
      phase: 0
    };
  },
  mounted: function() {
    let i = 0;
    let phrase = "implementing cyber security?";

    let backTypeWriter = () => {
      let innerText = document.getElementById("dynamic-text").innerHTML;
      if (innerText.length > 0) {
        innerText = innerText.substring(0, innerText.length - 1);
        document.getElementById("dynamic-text").innerHTML = innerText;
        setTimeout(backTypeWriter, 30);
      } else {
        i = 0;
        typeWriter();
      }
    };

    let typeWriter = () => {
      if (this.phase === 0) {
        phrase = "integrating Cloud technology?";
      } else if (this.phase === 1) {
        phrase = "implimenting Agile strategy?";
      } else {
        phrase = "developing Mobile solutions?";
      }
      if (i < phrase.length) {
        document.getElementById("dynamic-text").innerHTML += phrase.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      } else if (i === phrase.length) {
        if (this.phase === 0) {
          this.phase = 1;
          setTimeout(backTypeWriter, 4000);
        } else if (this.phase === 1) {
          this.phase = 2;
          setTimeout(backTypeWriter, 4000);
        } else {
          this.phase = 0;
          setTimeout(backTypeWriter, 4000);
        }
      }
    };

    typeWriter();
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

<style scoped lang="sass">
@import "../assets/sass/settings.sass"

.header-section
  height: 100%
  width: 100%
  position: absolute
  text-align: center
  top: 0

.header-section h1
  font:
    size: 6rem
  
video
  display: block
  max-width: initial
  position: absolute
  min-width: 100%
  min-height: 100%
  width: auto
  height: auto
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)

.cover-image-2
  // background: #fff
  background-image: url(../assets/background/home/mobile.jpg)
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(160deg) saturate(6)

.wrapper-2
  max-width: 400px

.wrapper-2 h1
  font:
    size: 4rem

.wrapper-3
  max-width: 800px

.service-wrapper
  display: flex
  flex-direction: column
  justify-content: center

.service-wrapper p
  font:
    size: 1.6rem
    weight: 400
  letter-spacing: 1px


h6
  margin-bottom: 30px
  letter-spacing: 3px
  color: #dddddd

.wrapper-3 p
  font: 
    size: 1.2rem

.cover-image-3
  background-image: url(../assets/background/home/skateboard.jpg)
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(270deg) saturate(6)

.section-4 
  background: #000

.section-5 
  flex-direction: column

#particles-js
  width: 100%
  z-index: 999

.show-more
  z-index: 1000

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
    filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(270deg) saturate(6)
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
      size: 3rem
      family: $font-body
      weight: 200
  letter-spacing: 0.2rem

#big-data-bround
  background-image: url(../assets/background/services-small/big-data.jpg)

#iot-bround
  background-image: url(../assets/background/services-small/iot.jpg)

#cloud-bround
  background-image: url(../assets/background/services-small/cloud.jpg)

#bi-bround
  background-image: url(../assets/background/services-small/bi.jpg)

@media only screen and (max-width: 1500px)
  h3
    font:
      size: 2.5rem !important

@media only screen and (max-width: 1230px) 
  .service
    flex-basis: 33.3333%
    width: 33.3333%
    max-width: 33.3333%
    height: 31vw

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


</style>




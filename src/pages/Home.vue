<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block mostpage">
        <div data-aos="fade-up" data-aos-duration="900" @click="scrollDown" class="show-more">
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
      <section id="first" class="content-block mostpage section-2">
        <div v-parallax="0.4" class="cover-image cover-image-2"></div>
        <div class="container">
          <div class="row padded-top right">
            <div class="column col-11 responsive-12">
              <div class="content-wrapper text-white">
                <div class="wrapper-2">
                  <h6>WHO WE ARE</h6>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    class="section-header left medium"
                  >Technology is our craft.</h1>
                </div>
                <div class="wrapper-3">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >Data Concepts is an IT consultancy that specializes in executing project solutions with expertise in Java, Microsoft, Open Source, Analytics, Cloud and Mobile technologies. Our consulting engagements comprise firm-fixed price projects, time & material engagements, and a managed service IT staffing model.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block halfpage section-3">
        <div class="container">
          <div class="row padded">
            <div class="column col-12">
              <div class="content-wrapper text-white">
                <h6>OUR THOUGHTS.</h6>
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

.wrapper-3
  max-width: 800px

h6
  margin-bottom: 30px
  letter-spacing: 3px
  color: #dddddd

.wrapper-3 p
  font: 
    size: 1.2rem

.section-3 
  background: #000
</style>




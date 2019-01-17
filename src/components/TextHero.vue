<template>
  <section class="content-block fullpage">
    <div class="container">
      <div class="row">
        <div @click="scrollDown" class="show-more">
          <svg
            data-aos="fade-down"
            data-aos-duration="600"
            fill="#000"
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
          <div class="content-wrapper text-hero-wrapper">
            <h1 data-aos="fade-in" data-aos-duration="600" class="text-hero-title">{{title}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TextHero",
  props: ["title"],
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

.text-hero-title
  font:
    size: 170px
    family: $font-body
  line-height: .95
  letter-spacing: -8px
  position: absolute
  bottom: 20%

.text-hero-wrapper 
  height: 100%
  position: relative

</style>

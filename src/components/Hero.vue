<template>
  <section class="content-block fullpage">
    <slot></slot>
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
        <div class="column col-1 no-content"></div>
        <div class="column col-6 responsive-8 responsive-12 center-content">
          <div class="content-wrapper">
            <h3 data-aos="fade-up" data-aos-duration="900">{{ title}}</h3>
            <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">{{kicker}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["title", "kicker"],
  data() {
    return {};
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

.content-wrapper
  padding-top: 250px

h3
    font:
        size: 4rem
    color: #fff
    margin-bottom: 20px

p
    color: #fff
    font:
        size: 1.8rem
    line-height: 1.5
    letter-spacing: 1px

@media only screen and (max-width: 679px)
  .content-wrapper
    padding-top: 100px
    max-width: 400px

  h3
    font:
      size: 3rem

  p
    font: 
      size: 1.5rem

@media only screen and (max-width: 450px)
  .content-wrapper
    padding-top: 0
    text-align: center

</style>

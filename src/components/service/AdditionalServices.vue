<template>
  <div class="content-block brown-grey">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="promise-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column col-10">
          <h1 class="additional-header" data-aos="fade-up" data-aos-duration="600">{{title}}</h1>
          <div class="content-wrapper additional-wrapper">
            <div class="copy-wrapper">
              <p class="additional-text" data-aos="fade-up" data-aos-duration="600">{{paragraphOne}}</p>
            </div>
            <div class="copy-wrapper">
              <p
                class="additional-text"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >{{paragraphTwo}}</p>
            </div>
          </div>
        </div>
        <div class="column col-12 padded-top">
          <div class="content-wrapper services-wrapper text-black">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: ["subtitle", "title", "paragraphTwo", "paragraphOne"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.services-wrapper
  display: flex
  flex-wrap: wrap

.additional-wrapper
    display: flex

.additional-header
    letter-spacing: -1px
    margin: 20px 0 40px
    max-width: 80%
    font:
        size: 2.4rem

.copy-wrapper
    padding-right: 30px

.additional-text
    font: 
        size: 1.2rem   
    line-height: 1.8
</style>



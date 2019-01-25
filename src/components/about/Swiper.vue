<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide id="slide-1"></swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.swiper-container
    height: 80vh
    width: 100%
    margin: 100px 0

.swiper-slide
    cursor: pointer

.swiper-pagination-bullet-active
    background: $bround-c-yellow !important

#slide-1
    background: url(../../assets/background/work-large/capital-one.jpg)
    background-size: cover
</style>

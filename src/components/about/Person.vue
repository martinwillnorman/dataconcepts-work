<template>
  <div class="person">
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      class="person-image"
      v-bind:style="{ backgroundImage:  `url('${imagesource}')` }"
    ></div>
    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" class="person-info">
      <h5 class="person-position">{{position}}</h5>
      <h4 class="person-name">{{name}}</h4>
      <span>{{location}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: ["imagesource", "position", "name", "location"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.person
  width: 40%
  max-width: 40%
  flex-basis: 40%
  position: relative
  margin-bottom: 80px

.person-image
  width: 90%
  margin: 0 auto
  height: 600px
  display: block
  background-position: center
  background-size: cover

.person-info
    position: absolute
    bottom: -115px
    left: 25%
    border: solid 3px $bround-c-yellow
    padding: 45px
    width: 50%
    box-sizing: border-box
    text-align: center

.person-position
    text-transform: uppercase
    font:
        size: .8rem
        weight: 600
    margin-bottom: 12px
    color: #fff

.person-name
    font:
        size: 1.6rem   
    line-height: 1.4

</style>

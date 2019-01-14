<template>
  <section id="first" class="content-block black">
    <div class="container">
      <div class="row padded-top section-divider-row">
        <div class="column col-12">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            class="content-wrapper section-divider-wrapper text-white"
          >
            <h1 class="section-divider-header section-header medium">{{title}}</h1>
            <p class="section-divider-text">{{content}}</p>
          </div>
        </div>
      </div>
      <div class="section-divider-spacer"></div>
    </div>
  </section>
</template>

<script>
import Spacer from "../Spacer.vue";

export default {
  name: "Promise",
  props: ["title", "content"],
  components: { Spacer }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.section-divider-header
    font:
        size: 3rem
        weight: 400
    color: #fff

.section-divider-text 
  font:
    size: 1.2rem
  line-height: 1.8

.section-divider-wrapper
  text-align: center

.section-divider-spacer
  height: 0.05555rem
  background-color: $spacer-c
  width: 100%
  margin: 100px 0 0
  position: relative
  z-index: 999

@media only screen and (max-width: 450px)
  .section-divider-spacer
    margin: 60px 0  0

</style>



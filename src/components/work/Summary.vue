<template>
  <section class="content-block padded-large" id="first">
    <div class="container">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle white">
              <h6 class="subtitle-header text-white">client summary</h6>
            </div>
          </div>
        </div>
        <div class="column col-8">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper">
            <p class="promise-text text-white">{{content}}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column col-12">
          <div class="spacing"></div>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Spacer from "../../components/Spacer.vue";

export default {
  name: "Summary",
  props: ["content"],
  components: {
    Spacer
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.spacing
  height: 100px


.promise-text 
  font:
    size: 1.2rem
  line-height: 1.8

@media only screen and (max-width: 450px)
  .content-wrapper
    padding: 60px 0 0

    
</style>



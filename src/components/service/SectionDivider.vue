<template>
  <section id="first" class="content-block black">
    <div class="container">
      <div class="row padded-top section-divider-row">
        <div class="column col-12">
          <div class="content-wrapper section-divider-wrapper text-white">
            <h1 class="section-divider-header section-header medium">{{title}}</h1>
            <p data-aos="fade-up" data-aos-duration="600" class="section-divider-text">{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spacer from "../Spacer.vue";

export default {
  name: "Promise",
  props: ["title", "content"]
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
  position: relative
  z-index: 999

.section-divider-wrapper
  text-align: center

</style>



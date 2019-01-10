
<template>
  <section class="content-block fullpage">
    <router-link class="bigdata-link" to="/insights">
      <div class="bigdata-background"></div>
      <div class="container bigdata-container">
        <div class="row">
          <div class="column col-12 center-content">
            <div class="content-wrapper">
              <h1 class="bigdata-title">Our Plan to Move to Big Data.</h1>
              <!-- <span class="readmore">Read More</span> -->
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "BigDataPlan",
  props: ["title"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.bigdata-link
    position: relative
    min-height: 600px
    width: 100%

.bigdata-background
    background-image: url(../../assets/background/insights/lights-7.jpg)
    background-size: cover
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%

.bigdata-container
    height: 100%

.bigdata-link::before
    background: rgba(0,0,0,0.2)
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%

.bigdata-title
    color: #fff
    font: 
        size: 7rem
        weight: 400


</style>

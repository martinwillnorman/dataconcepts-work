
<template>
  <section class="content-block fullpage">
    <router-link class="insight-highlight-link" :to="link">
      <div
        class="insight-highlight-background"
        v-bind:style="{ backgroundImage:  `url('${imagesource}')` }"
      ></div>
      <div class="container insight-highlight-container">
        <div class="row">
          <div class="column col-12 center-content">
            <div class="content-wrapper insight-highlight-wrapper">
              <div class="subtitle-wrapper">
                <hr class="subtitle white">
                <h6 class="subtitle-header">Insight</h6>
              </div>
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="insight-highlight-title"
              >{{title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "InsightHighlight",
  props: ["title", "imagesource", "link"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.insight-highlight-link
    position: relative
    min-height: 600px
    width: 100%

.insight-highlight-background
    background-size: cover
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%

.insight-highlight-wrapper
  z-index: 999

.insight-highlight-container
    height: 100%

.insight-highlight-background:before
  background-color: rgba(0,0,0,0.15)
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 11
  content: ' '
  transition: all ease-in-out 50ms

.insight-highlight-link:hover .insight-highlight-background:before
  background-color: rgba(0,0,0,0)

.insight-highlight-title
    color: #fff
    font: 
        size: 7rem
        weight: 400
    line-height: 1.2

h6
  color: #fff

.subtitle-wrapper
  width: 25%

</style>

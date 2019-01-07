<template>
  <div class="insight">
    <router-link class="insight-link grey" :to="link">
      <div class="content-wrapper text-white">
        <h3 class="insight-title">{{title}}</h3>
        <p class="insight-summary">{{summary}}</p>
      </div>
      <span class="insight-background" v-bind:style="{ backgroundImage:  `url('${imagesource}')` }"></span>
      <span class="insight-category">{{category}}</span>
      <span class="read-more">Read More</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "InsightTwo",
  props: ["title", "summary", "category", "link", "imagesource"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.insight
  width: 31%
  max-width: 31%
  flex-basis: 31%
  position: relative
  overflow: hidden
  perspective: 1000px
  border-radius: 4px 
  box-shadow: 0px 1px 3px rgba(0,0,0,.08)!important
  margin-bottom: 30px

.insight-background
  position: absolute
  background-size: cover
  line-height: 0
  display: block
  top: 0
  right: 0
  width: 100%
  height: 100%
  background-position: center
  transition: all .7s cubic-bezier(.2,1,.22,1)

.insight-background:before
  background-color: rgba(0,0,0,0.55)
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 11
  content: ' '

.insight-background:after
  background: linear-gradient(to top,rgba(255,255,255,0) -2%,rgba(0,0,0,0) 35%,rgba(0,0,0,0.04) 44%,rgba(0,0,0,0.25) 100%,rgba(0,0,0,0.5) 100%)
  position: absolute
  bottom: 0
  left: 0
  width: 100%
  height: 45%
  z-index: 11
  border-radius: 4px
  content: ' '

.insight-link 
  min-height: 617px
  position: relative
  display: flex

.insight-link:hover .insight-background
  transform: scale(1.1)

.content-wrapper
  position: relative
  top: 0
  left: 0
  width: 100%
  z-index: 999
  padding: 38% 11% 20%

.insight-category
  position: absolute
  top: 20px 
  left: 25px 
  z-index: 999
  color: #fff
  text-transform: uppercase
  font: 
    size: 16px
    weight: 400
  letter-spacing: 2px

.insight-title
  font:
    size: 25px
    weight: 300
  line-height: 35px
  text-transform: uppercase
  margin-bottom: 12px

.insight-summary 
  font:
    size: 1rem
    weight: 600 
  line-height: 1.8

.read-more 
  position: absolute 
  bottom: 20px 
  left: 25px 
  z-index: 999
  color: #fff 
  font: 
    size: 16px 
    weight: 400
  letter-spacing: 2px

@media only screen and (max-width: 1140px)
  .insight
    width: 49%
    max-width: 49%
    flex-basis: 49%

@media only screen and (max-width: 776px)
  .insight
    width: 98%
    max-width: 98%
    flex-basis: 98%

@media only screen and (max-width: 450px)
  .insight
    width: 100%
    max-width: 100%
    flex-basis: 100%

  .insight-link 
    min-height: 500px

</style>
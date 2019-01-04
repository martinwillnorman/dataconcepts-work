<template>
  <section class="content-block">
    <div class="container">
      <div class="row right padded-top">
        <div class="column col-11 center-horizontal">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper insight-wrapper">
            <span>{{category}}</span>
            <h1>{{title}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InsightHeader",
  props: ["category", "title", "summary"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.content-block
    min-height: 250px
    width: 100%
    overflow: hidden
    padding-bottom: 40px

.insight-wrapper
  display: flex
  flex-direction: column
  justify-content: flex-end
  max-width: 1000px
  margin-right: auto

.insight-wrapper p
    color: $font-c-p-3

h1
  color: $font-c-h-3
  line-height: 3.37rem
  margin: 0 0 10px
  font:
    size: 2.76rem
    weight: 400
span
  color: $font-c-p-2
  font:
      weight: 700
  letter-spacing: 1px

@media only screen and (max-width: 800px)
    h1
        font-size: 2.5rem

@media only screen and (max-width: 450px)
    h1
        font-size: 2rem
        
    .insight-wrapper p
        line-height: 1.85
</style>
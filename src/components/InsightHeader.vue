<template>
  <section class="content-block halfpage grey">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper insight-wrapper">
            <span>{{category}}</span>
            <h1>{{title}}</h1>
            <p>{{summary}}</p>
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

.column
    display: flex
    align-items: flex-end

.insight-wrapper
  display: flex
  flex-direction: column
  justify-content: flex-end
  max-width: 1000px
  margin-right: auto

.insight-wrapper p
    color: $font-c-p-3

h1
  color: $font-c-1
  line-height: 1.1
  margin: 0 0 10px
  font:
    size: 3rem
  color: #fff

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
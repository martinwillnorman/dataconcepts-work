<template>
  <div class="insight" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
    <router-link class="insight-link" :to="link">
      <p>{{category}}</p>
      <h3>{{title}}</h3>
      <p>
        {{summary}}
        <br>
        <br>
        <span>Read More</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["title", "summary", "category", "link"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.insight
  flex-basis: 100%
  width: 100%
  max-width: 100%
  padding-bottom: 100px

.insight-link
  display: flex
  flex-direction: column
  padding: 20px
  position: relative
  border-bottom: solid 0.05555rem $spacer-c
  transition: box-shadow 200ms cubic-bezier(.29,.29,.42,1.01)

.insight-link h3
  color: $font-c-1
  line-height: 1.1
  margin: 0 0 5px
  font:
    size: 3rem
  color: #fff

.insight-link p
  color: $font-c-p-3

span
  color: $font-c-p-2

.insight-link::after
  content: ""
  position: absolute
  top: -10px
  left: 0
  height: 2px
  width: 100%
  transform: translatey(40px)
  background: $dataconcepts-red
  opacity: 0
  transition: transform 400ms cubic-bezier(.29,.29,.42,1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

.insight-link:hover:after 
  opacity: 1  
  transform: translatey(2px)

.insight-link:hover
  box-shadow: 0px 0px 40px rgba(0,0,0,.1)

@media only screen and (max-width: 1000px)
  .insight-link
    padding: 10px

@media only screen and (max-width: 678px)
  .insight-link h3
    font:
      size: 2rem

  .insight-link
    padding: 5

@media only screen and (max-width: 450px)
  .insight
      padding-bottom: 40px
</style>
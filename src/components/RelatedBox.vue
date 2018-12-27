<template>
  <div class="related grey" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
    <router-link class="related-link" :to="link">
      <p>{{category}}</p>
      <h3>{{title}}</h3>
      <br>
      <span>Read More</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RelatedBox",
  props: ["title", "category", "link"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.related
  flex-basis: 50%
  width: 50%
  max-width: 50%


.related-link
  display: flex
  flex-direction: column
  padding: 60px
  position: relative
  border: solid 0.05555rem $spacer-c
  transition: box-shadow 200ms cubic-bezier(.29,.29,.42,1.01), transform 400ms cubic-bezier(.29,.29,.42,1.01)
  min-height: 300px

.related-link h3
  color: $font-c-1
  line-height: 1.1
  margin: 0 0 5px
  font:
    size: 3rem
  color: #fff

.related-link p
  color: $font-c-p-3

span
  color: $font-c-p-2

.related-link:hover 
  transform: scale(1.1)

.related-link:hover
  box-shadow: 0px 0px 40px rgba(0,0,0,.1)

@media only screen and (max-width: 1000px)
  .related-link h3
    font:
      size: 2.5rem

  .related-link
    padding: 45px

@media only screen and (max-width: 800px)
  .related
    flex-basis: 100%
    width: 100%
    max-width: 100%


@media only screen and (max-width: 678px)
  .related-link
    min-height: 250px

  .related-link h3
    font:
      size: 2rem

  .related-link
    padding: 5

@media only screen and (max-width: 450px)
  .related-link
    padding: 20px

</style>
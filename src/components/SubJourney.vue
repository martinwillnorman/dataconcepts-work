<template>
  <div class="row">
    <div data-aos="fade-up" data-aos-duration="600" class="column col-8 responsive-12">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubJourney",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.row
    padding-bottom: 60px

h1
    margin-bottom: 20px
    font: 
      weight: 600
      size: 2rem

p
  padding-bottom: 20px

ul
  columns: 2
  padding-top: 20px
  padding-bottom: 40px

li
  margin-bottom: 10px
  font-weight: 600

@media only screen and (max-width: 450px) 
  .row
    padding-bottom: 0

  h1
    font-size: 1.8rem
    
</style>
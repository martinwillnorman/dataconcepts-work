<template>
  <div class="row">
    <div class="column col-7 centered responsive-12">
      <div class="content-wrapper">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSubSection",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h1
    font:
        size: 27px
        weight: 400
    margin-bottom: 1.66667rem
    color: #292a2c

p 
  color: #bbbbbbb
  font: 
    size: 1rem
    weight: 400 
  line-height: 30px


@media only screen and (max-width: 450px)
  h1
    font:
      size: 2rem

</style>
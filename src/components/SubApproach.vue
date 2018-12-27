<template>
  <div class="approach">
    <div data-aos="fade-up" data-aos-duration="600" class="border">
      <h1 class="text-white">{{title}}</h1>
      <p class="text-white">{{content}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubApproach",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.approach
    padding: 40px 30px
    flex-basis: 50%
    width: 50%
    max-width: 50%
    box-sizing: border-box

.border
    border-left: solid white
    padding-left: 30px

h1
    margin-bottom: 20px
    font-weight: 300
    
p
    position: relative
    z-index: 999
    line-height: 1.8
    margin-bottom: 30px
ul
    columns: 2

li
    color: #fff
    margin-bottom: 10px

@media only screen and (max-width: 768px)
  .approach
    padding: 20px 0
    flex-basis: 100%
    width: 100%
    max-width: 100%

  .border
    border-left: unset
    padding-left: 0
    
</style>
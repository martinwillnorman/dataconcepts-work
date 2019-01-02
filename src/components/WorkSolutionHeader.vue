<template>
  <div class="row padded">
    <div class="column col-8 responsive-12 centered">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkSolutionHeader"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h1
  font:
    size: 1.6rem
  letter-spacing: 4px

p
    font:
        size: 3.6rem
    line-height: 1.1    
    text-align: center

@media only screen and (max-width: 800px)
  p
    font:
      size: 2.8rem

@media only screen and (max-width: 678px)
  p
    font:
      size: 2.4rem

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.8rem
</style>
<template>
  <div class="row padded">
    <div class="column col-9 responsive-12 centered">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkOutcome"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

p
    font:
        size: 2rem
    line-height: 1.6  
    text-align: center  

@media only screen and (max-width: 500px)
  p
      font:
          size: 1.5rem
</style>
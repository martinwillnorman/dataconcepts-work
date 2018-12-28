<template>
  <div class="row padded">
    <div class="column col-8 centered">
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
        size: 4rem
    line-height: 1.2    
    text-align: center
</style>
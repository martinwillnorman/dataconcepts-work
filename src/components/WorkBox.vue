<template>
  <div class="work">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WorkBox"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.work
  width: 33.33333%
  max-width: 33.33333%
  flex-basis: 33.33333%
  box-sizing: border-box
  position: relative

@media only screen and (max-width: 1080px)
  .work
    width: 100%
    max-width: 100%
    flex-basis: 100%

  
</style>
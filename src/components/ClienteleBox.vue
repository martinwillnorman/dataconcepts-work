<template>
  <div class="clientele">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClienteleBox"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.clientele
  width: 23%
  max-width: 23%
  flex-basis: 23%
  margin: 0 1%
  box-sizing: border-box
  position: relative
  height: 175px
  display: flex
  justify-content: center
  align-items: center
  border-bottom: solid 0.05555rem $spacer-c

@media only screen and (max-width: 1080px)
  .clientele
    width: 31%
    max-width: 31%
    flex-basis: 31%

@media only screen and (max-width: 800px)
  .clientele
    width: 48%
    max-width: 48%
    flex-basis: 48%

@media only screen and (max-width: 450px)
  .clientele
    width: 98%
    max-width: 98%
    flex-basis: 98%

</style>
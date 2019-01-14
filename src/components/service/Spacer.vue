<template>
  <section class="content-block black">
    <div data-aos="fade-in" data-aos-duration="600" class="spacer"></div>
  </section>
</template>

<script>
export default {
  name: "Spacer"
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.spacer
  height: 0.111111rem
  background-color: $bround-c-yellow
  width: 100%
  position: relative
  z-index: 999

@media only screen and (max-width: 450px)
  .spacer
    margin: 60px 0 

</style>
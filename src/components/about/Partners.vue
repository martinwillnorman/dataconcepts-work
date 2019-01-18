<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded-large">
        <div class="column col-4">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">partners</h6>
            </div>
          </div>
        </div>
        <div class="column col-12">
          <div class="content-wrapper partners-wrapper">
            <div class="partner">
              <img src="../../assets/logo/aws.png" alt>
            </div>
            <div class="partner">
              <img id="mongodb" src="../../assets/logo/mongodb.webp" alt>
            </div>
            <div class="partner">
              <img id="confluent" src="../../assets/logo/confluent.png" alt>
            </div>
            <div class="partner">
              <img src="../../assets/logo/microsoft.png" alt>
            </div>
            <div class="partner">
              <img src="../../assets/logo/docker2.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Partners"
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.aws
    background-image: url(../../assets/logo/aws.png)

img
  object-fit: contain
  max-height: 140px
  max-width: 280px

.partners-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: center

.partner
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

#mongodb
    transform: scale(1.4)

#confluent
    transform: scale(1.3)

</style>

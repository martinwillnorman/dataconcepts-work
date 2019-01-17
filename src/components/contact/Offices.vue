<template>
  <section class="content-block black">
    <div class="offices-container">
      <div class="office">
        <span class="city">Richmond, VA.</span>
        <span class="address">4405 Cox Rd</span>
        <span class="address">Glen Allen VA 23060</span>
        <a class="telephone" href="tel:1-804-968-4700">+1-804-968-4700</a>
      </div>
      <div class="office">
        <span class="city">Denver, CO.</span>
        <span class="address">1490 Delgany St</span>
        <span class="address">Suite 521 Denver CO 80202</span>
        <a class="telephone" href="tel:1-303-575-1000">+1-303-575-1000</a>
      </div>
      <div class="office">
        <span class="city">Raleigh, NC.</span>
        <span class="address">4405 Cox Rd</span>
        <span class="address">Glen Allen VA 23060</span>
        <a class="telephone" href="tel:1-919-425-2300">+1-919-425-2300</a>
      </div>
      <div class="office">
        <span class="city">Lansing, MI.</span>
        <span class="address">4405 Cox Rd</span>
        <span class="address">Glen Allen VA 23060</span>
        <a class="telephone" href="tel:1-571-827-5444">+1-571-827-5444</a>
      </div>
      <div class="office">
        <span class="city">Columbia, SC.</span>
        <span class="address">606 Garden Arbor Ln</span>
        <span class="address">SC 29072</span>
        <a class="telephone" href="tel:1-803-336-3900">+1-803-336-3900</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Offices"
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.offices-container
  width: 89.87342%
  margin: 0 auto
  display: flex
  flex-wrap: wrap
  padding: 100px 0 140px 0

.office
  width: 33.33333%
  max-width: 33.33333%
  flex-basis: 33.33333%
  padding: 115px 70px 60px
  background: #fff
  border-bottom: solid 1px #000
  border-right: solid 1px #000
  box-sizing: border-box
  display: flex
  flex-direction: column

.city
  font:
    size: 2.8rem
  margin-bottom: 30px

.address
  font:
    size: 1.2rem

.telephone
  margin-top: 40px
  display: block
  color: #000
  transition: color .18s
  font: 
    size: 1.2rem
    weight: 400
  letter-spacing: 4px

.telephone:hover
  color: $bround-c-yellow

</style>

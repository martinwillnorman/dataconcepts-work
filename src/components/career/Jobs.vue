<template>
  <section class="content-block padded-large black">
    <div class="container">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle white">
              <h6 class="subtitle-header text-white">{{subtitle}}</h6>
            </div>
          </div>
        </div>
        <div class="row right text-white">
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Richmond, VA.</h1>
            </div>
          </div>
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Raleigh, NC.</h1>
            </div>
          </div>
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Denver, CO.</h1>
            </div>
          </div>
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Salt Lake City, UT.</h1>
            </div>
          </div>
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Colombia, SC.</h1>
            </div>
          </div>
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Portland, OR.</h1>
            </div>
          </div>
          <div class="column col-9 right">
            <div class="content-wrapper jobs-wrapper">
              <h1>Lansing, MI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Jobs",
  props: ["subtitle"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

h1 
  font: 
    size: 80px
    weight: 700
    family: $font-body
  line-height: 84px
  letter-spacing: -4px

</style>

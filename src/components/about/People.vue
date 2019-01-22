<template>
  <section class="content-block people-block">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">our people</h6>
            </div>
          </div>
        </div>
        <div class="column col-11 centered">
          <div class="content-wrapper people-header-wrapper">
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              class="people-header"
            >Technologists, Strategists, Creatives, & Engineers.</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column col-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "People"
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.people-header-wrapper
    padding: 50px 0

.people-block
    padding: 100px 0
    margin-bottom: 100px

.people-header
    font:
        size: 4.5rem
    margin-bottom: 40px
    line-height: 1.4
    text-align: center

.people-wrapper
    padding: 0 1%
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    width: 100%

</style>

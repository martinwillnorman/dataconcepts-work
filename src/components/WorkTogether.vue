<template>
  <section class="content-block black">
    <div class="container">
      <div class="row padded">
        <div class="column col-6 center-content">
          <div class="content-wrapper border-right text-white">
            <h1 class="section-header text-white">Get In Touch.</h1>
            <router-link class="reg-link white" to="/contact">Contact</router-link>
          </div>
        </div>
        <div class="column col-6 center-content">
          <div class="content-wrapper text-white">
            <h1 class="section-header text-white">Meet Our Experts.</h1>
            <router-link class="reg-link white" to="/contact">People</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkTogether"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.content-wrapper
  text-align: center

.border-right
  border-right: solid 0.5px white

h1
  font-size: 4rem
  margin-bottom: 40px

a
  font:
    size: 2rem
    family: $font-body
  letter-spacing: 2px

@media only screen and (max-width: 695px)
  h1 
    font-size: 3rem
</style>
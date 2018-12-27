<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded">
        <div class="column col-12 center-content">
          <div class="content-wrapper">
            <h1 data-aos="fade-up" data-aos-duration="600">Want To Work Together?</h1>
            <router-link
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              class="reg-link"
              to="/contact-us"
            >Let's Connect</router-link>
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

h1
  font-size: 4rem
  margin-bottom: 40px

a
  font-size: 2rem
  color: $dataconcepts-red

a::after
  background: $dataconcepts-red

@media only screen and (max-width: 695px)
  h1 
    font-size: 3rem
</style>
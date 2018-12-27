<template>
  <section class="content-block clear-bottom gradient-1">
    <div class="container">
      <div class="row right">
        <div class="column col-8 responsive-12">
          <div class="content-wrapper service-aside">
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              class="section-header left short text-white"
            >{{title}}</h1>
            <p
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="200"
              class="text-white"
            >{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceAsideRight",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"


.service-aside
  padding: 200px 0 50px

.content-block::before
  content: ''
  width: 110vw
  position: absolute
  left: -5vw
  height: 11.1vw
  top: -5.555vw
  background: #fff
  transform: rotate(-4deg)

.content-block::after
  content: ''
  width: 110vw
  position: absolute
  left: -5vw
  height: 11.1vw
  bottom: -5.555vw
  background: #fff
  transform: rotate(4deg)
  background: $bround-c-gradient-1

p
  z-index: 999
  position: relative

@media only screen and (max-width: 695px)
  .service-aside
    padding: 80px 0 0
    

</style>

<template>
  <section class="content-block mostpage">
    <slot></slot>
    <div class="container">
      <div class="row">
        <div class="column col-12 center-content">
          <div class="content-wrapper">
            <h1
              data-aos="fade-in"
              data-aos-duration="600"
              class="image-section-header text-white"
            >{{title}}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceApproach",
  props: ["title"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.cover-image
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(210deg) saturate(6)

h1
  position: relative
  z-index: 999


</style>

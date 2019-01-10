<template>
  <div class="content-block black">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="promise-wrapper text-white">
              <hr class="subtitle white">
              <h6 class="subtitle-header">Services</h6>
            </div>
          </div>
        </div>
        <div class="column col-12">
          <div class="content-wrapper services-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.services-wrapper
  display: flex
  flex-wrap: wrap

</style>



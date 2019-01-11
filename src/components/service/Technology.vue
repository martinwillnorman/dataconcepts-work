<template>
  <div class="content-block brown-grey">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column col-12">
          <div class="content-wrapper technology-wrapper text-black">
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
  props: ["subtitle", "title", "paragraphTwo", "paragraphOne"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.technology-wrapper
  display: flex
  flex-wrap: wrap

</style>



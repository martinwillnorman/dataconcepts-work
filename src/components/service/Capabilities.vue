
<template>
  <section class="content-block black">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper text-white">
            <div class="subtitle-wrapper">
              <hr class="subtitle white">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Capabilities",
  props: ["subtitle"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.subtitle-wrapper
  margin-bottom: 80px

.subtitle
    width: 50%

</style>

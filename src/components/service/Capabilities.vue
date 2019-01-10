
<template>
  <section class="content-block brown-grey">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-2 centered">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">{{title}}</h6>
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
  props: ["title"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.brown-grey
    background-color: $bround-c-brown-grey

.subtitle-wrapper
    text-align: center

.subtitle
    width: 100%
</style>

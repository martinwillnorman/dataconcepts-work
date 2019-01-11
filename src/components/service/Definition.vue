
<template>
  <section class="content-block">
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
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "Definition",
  props: ["subtitle"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"


</style>

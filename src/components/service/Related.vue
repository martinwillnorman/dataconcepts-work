<template>
  <section class="content-block">
    <div class="container padded-large">
      <div class="row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">Related</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column col-12">
          <div class="related-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Related"
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.related-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-between


</style>



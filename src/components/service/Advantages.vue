<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded">
        <div class="column col-5">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
        <div class="column col-7">
          <div class="content-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Advantages",
  props: ["subtitle"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.advantages-list-item
  font:
      size: 1.6rem
      weight: 300
  line-height: 1.6

</style>
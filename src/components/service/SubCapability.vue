
<template>
  <div class="column col-6 subcapability text-white">
    <div class="subcapability-1">
      <h1 class="subcapability-title">{{title}}</h1>
      <p class="subcapability-text">{{content}}</p>
      <slot></slot>
    </div>
    <div class="subcapability-2"></div>
  </div>
</template>

<script>
export default {
  name: "SubCapability",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.subcapability-hr
  background-color: transparent
  display: block
  border: 0
  border-top: solid 1px $bround-c-yellow
  margin: 12px 0 12px auto
  height: 0
  padding: 0

.subcapability-list
  padding: 25px

.subcapability-title
  font-size: 2rem
  font-weight: 400
  letter-spacing: -1px
  margin-bottom: 1.66667rem

.subcapability-text
  font-size: 1rem
  font-weight: 400
  line-height: 1.4

.subcapability
  display: flex
  padding: 0 20px 30px

.subcapability-1
  z-index: 999

.subcapability-2
// .subcapability-title
//   font: 
//       size: 28px
//       weight: 400
//   margin-bottom: 15px

.subcapability-list-item
  font:
    size: 1rem
    weight: 400

</style>

<template>
  <div class="row padded-bottom">
    <div class="column col-10 responsive-12 centered">
      <div class="content-wrapper solution-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkSolution",
  props: ["content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.solution-wrapper
    display: flex
    flex-direction: column

p
    font:
        size: 1.6rem
    line-height: 1.6

ul
    columns: 2
    margin-top: 40px

li
    color: $font-c-p-2
    font:
        size: 1.1rem
        weight: 600
    line-height: 1.6
    margin-bottom: 20px

@media only screen and (max-width: 678px)
  p
    font:
      size: 1.4rem

  ul
    columns: 1

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.1rem
    line-height: 1.8

  li
    font:
        size: .9rem
    line-height: 1.8

</style>
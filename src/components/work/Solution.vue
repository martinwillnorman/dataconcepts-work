<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded-bottom">
        <div class="column col-10 responsive-12 centered">
          <div class="content-wrapper solution-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Solution",
  props: ["content"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.solution-wrapper
    display: flex
    flex-direction: column
    margin-top: 80px

p
    font:
        size: 1.1rem
    line-height: 1.8

ul
    margin-top: 40px
    max-width: 1000px
    columns: 2
    
li
    color: $font-c-h-2
    font:
        size: 1rem
        weight: 400
    line-height: 1.8
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
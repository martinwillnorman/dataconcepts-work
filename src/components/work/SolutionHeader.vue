<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded-top">
        <div class="column col-8 responsive-12 centered">
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
  name: "SolutionHeader"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h1
  font:
    size: 1.2rem
  letter-spacing: 6px

p
    font:
        size: 3.6rem
        weight: 400
    line-height: 1.1    
    text-align: center

@media only screen and (max-width: 800px)
  p
    font:
      size: 2.8rem

@media only screen and (max-width: 678px)
  p
    font:
      size: 2.4rem

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.8rem
      
</style>
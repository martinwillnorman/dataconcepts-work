<template>
  <section class="content-block black">
    <div class="container">
      <div class="row padded">
        <div class="column col-9 responsive-12 centered">
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
  name: "Outcome"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

p
    font:
      size: 1.6rem
    line-height: 1.6  
    text-align: center  
    color: #fff
    
@media only screen and (max-width: 500px)
  p
      font:
          size: 1.2rem
</style>
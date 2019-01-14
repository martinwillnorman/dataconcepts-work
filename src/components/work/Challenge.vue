<template>
  <div class="content-block black">
    <div class="container">
      <div class="row padded">
        <div class="column col-12">
          <div class="content-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Challenge"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

p
    font:
        size: 2.5rem
    line-height: 1.6    

@media only screen and (max-width: 678px)
  p
    font:
      size: 1.8rem

@media only screen and (max-width: 450px)
  p
    font:
      size: 1.2rem
    line-height: 1.8
    
</style>
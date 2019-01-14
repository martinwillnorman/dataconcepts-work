<template>
  <div class="row">
    <div class="column col-3">
      <div class="content-wrapper">
        <div class="subtitle-wrapper">
          <hr class="subtitle white">
          <h6 class="subtitle-header text-white">our role</h6>
        </div>
      </div>
    </div>
    <div class="column col-4 responsive-12">
      <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper text-white">
        <ul>
          <slot></slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Role"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h3
    margin-bottom: 15px
    font:
        size: 2rem
    
ul
    columns: 2

li
    margin-bottom: 10px
    line-height: 1.4   
    font:
        size: 1rem
        weight: 400  

</style>



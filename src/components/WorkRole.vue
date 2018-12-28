<template>
  <div class="row padded-bottom">
    <div class="column col-6 responsive-12">
      <div class="content-wrapper text-white">
        <h3 data-aos="fade-up" data-aos-duration="600">Our Role</h3>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <slot></slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkRole"
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
        weight: 600  

</style>



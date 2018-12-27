<template>
  <div class="row">
    <div class="column col-7 responsive-12">
      <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper">
        <h1 class="section-header left medium">{{title}}</h1>
        <p data-aos-delay="200">{{content}}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceLeft",
  props: ["title", "content", "link"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.content-wrapper
  padding-bottom: 100px
  z-index: 999  

ul
  columns: 2
  padding-top: 20px

li
  margin-bottom: 10px
  font-weight: 600


@media only screen and (max-width: 450px) 
  .content-wrapper
    padding-bottom: 60px


</style>

<template>
  <section class="content-block grey">
    <div class="container">
      <div class="row padded">
        <div class="column col-10 responsive-12">
          <div data-aos="fade-in" data-aos-duration="600" class="content-wrapper">
            <h1 class="text-white section-header left medium">{{title}}</h1>
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
  props: ["title"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"
li
    font-size: 2.5rem
    font-weight: 900

@media only screen and (max-width: 800px) 
    li
        font-size: 1.8rem
        margin: 10px
        line-height: 1


</style>
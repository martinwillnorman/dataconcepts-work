<template>
  <div class="row">
    <div class="column col-2 no-content"></div>
    <div data-aos="fade-up" class="column col-8 responsive-12">
      <div class="content-wrapper">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSubSection",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h1
    font:
        size: 2.5rem
        weight: 300
    margin-bottom: 30px

@media only screen and (max-width: 450px)
  h1
    font:
      size: 2rem

</style>
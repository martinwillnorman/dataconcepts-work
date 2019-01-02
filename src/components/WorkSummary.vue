<template>
  <div class="row">
    <div class="column col-8 responsive-12">
      <div class="content-wrapper text-white">
        <h1 data-aos="fade-up" data-aos-duration="600">Client Summary</h1>
        <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkSummary",
  props: ["content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"
.content-wrapper
    padding: 100px 0 0

h1
    font:
        size: 3rem
    margin-bottom: 30px

@media only screen and (max-width: 450px)
  h1
    font:
      size: 2.8rem

  .content-wrapper
    padding: 60px 0 0

    
</style>



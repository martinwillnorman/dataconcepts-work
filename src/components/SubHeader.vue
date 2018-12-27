<template>
  <section class="content-block">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper subheader-wrapper">
            <div class="col-4">
              <div class="title-wrapper">
                <h1>{{title}}</h1>
              </div>
            </div>
            <div class="col-8">
              <div class="text-wrapper">
                <p>{{content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubHeader",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.subheader-wrapper
    display: flex

h1
    font: 
        size: 2.5rem
        weight: 600
    margin-bottom: 30px

.title-wrapper
    max-width: 80%

.text-wrapper
    max-width: 90%

@media only screen and (max-width: 800px)
    .subheader-wrapper
        flex-direction: column
    
    .col-8
        width: 100%
        max-width: 100%
        flex-basis: 100%

    .col-4
        width: 100%
        max-width: 100%
        flex-basis: 100%

    .title-wrapper
        max-width: 100%
    
    .text-wrapper
        max-width: 100%

@media only screen and (max-width: 678px)
  h1
    font:
      size: 2rem

</style>
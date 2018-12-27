<template>
  <section class="content-block insight-under">
    <div class="container protected">
      <div class="row right">
        <div class="column col-7">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            class="content-wrapper sub-insight-wrapper"
          >
            <p class="text-white">{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InsightSubHeader",
  props: ["content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.sub-insight-wrapper
    background: $bround-c-4
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
    padding: 20px

.protected
    margin-right: 40px

.column
    display: flex

@media only screen and (max-width: 1000px)
    .protected
        margin-right: 0

    .row
        justify-content: start
    
    .col-7 
        flex-basis: 75%
        width: 75%
        max-width: 75%

@media only screen and (max-width: 678px)
    .row
        justify-content: center

    p
        font:
            size: .9rem

 

@media only screen and (max-width: 500px)
    .col-7
        flex-basis: 100%
        width: 100%
        max-width: 100%

</style>
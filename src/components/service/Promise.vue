<template>
  <section id="first" class="content-block">
    <div class="container">
      <div class="row promise-row">
        <div class="column col-3">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">{{subtitle}}</h6>
            </div>
          </div>
        </div>
        <div class="column col-8">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper">
            <!-- <h1 class="promise-header">{{title}}</h1> -->
            <p class="promise-text">{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Promise",
  props: ["title", "content", "subtitle"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.promise-header
    font:
        size: 3rem
        weight: 400
    margin-bottom: 30px

.promise-text 
  font:
    size: 1.2rem
  line-height: 1.8

// .subtitle-header
//   margin-bottom: 30px
//   letter-spacing: 3px
//   color: #aaaaaaa
//   text-transform: uppercase

// .subtitle
//   width: 50%
//   background: transparent
//   display: block
//   border-top: solid 1px #000
//   margin: 0 0 15px

.promise-row
    padding: 300px 0

</style>



<template>
  <div class="row">
    <div class="column col-3">
      <div class="content-wrapper">
        <div class="promise-wrapper">
          <hr class="subtitle">
          <h6 class="subtitle-header">The Promise</h6>
        </div>
      </div>
    </div>
    <div class="column col-8">
      <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper">
        <!-- <h1>The Potential of {{title}}</h1> -->
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicePromise",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h1
    font:
        size: 3rem
        weight: 400
    margin-bottom: 30px

p 
  font:
    size: 1.2rem
  line-height: 1.8

.subtitle-header
  margin-bottom: 30px
  letter-spacing: 3px
  color: #aaaaaaa
  text-transform: uppercase

.subtitle
  width: 50%
  background: transparent
  display: block
  border-top: solid 1px #000
  margin: 0 0 15px

.row 
  padding: 300px 0

@media only screen and (max-width: 450px)
  h1
    font:
      size: 2.4rem
  margin-bottom: 20px

  p 
    line-height: 1.4

  .content-wrapper
    padding: 60px 0 0
    text-align: center


    
</style>



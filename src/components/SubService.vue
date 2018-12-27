<template>
  <div class="service">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "SubService",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.service
  padding: 40px 30px
  flex-basis: 33.3333%
  width: 33.3333%
  max-width: 33.3333%
  box-sizing: border-box
  z-index: 999

h1
  margin-bottom: 20px
  font:
    weight: 300

p
  line-height: 1.8
  color: $font-c-h-3
  position: relative
  z-index: 999

@media only screen and (max-width: 1080px)
  .service
    padding: 40px 30px
    flex-basis: 50%
    width: 50%
    max-width: 50%


@media only screen and (max-width: 768px)

  .service
    padding: 20px 10px

@media only screen and (max-width: 695px)
  .service
    padding: 20px 0
    flex-basis: 100%
    width: 100%
    max-width: 100%

</style>

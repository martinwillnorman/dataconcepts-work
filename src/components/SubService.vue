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
  flex-basis: calc(33.33% - 60px)
  width: calc(33.33% - 60px)
  max-width: calc(33.33% - 60px)

h1
  margin-bottom: 20px
  font:
    weight: 300

p
  line-height: 1.8
  color: $font-c-h-3

@media only screen and (max-width: 1080px)
  .service
    padding: 40px 30px
    flex-basis: calc(50% - 60px)
    width: calc(50% - 60px)
    max-width: calc(50% - 60px)


@media only screen and (max-width: 768px)

  .service
    padding: 20px 10px
    flex-basis: calc(50% - 20px)
    width: calc(50% - 20px)
    max-width: calc(50% - 20px)

@media only screen and (max-width: 695px)
  .service
    padding: 20px 0
    flex-basis: 100%
    width: 100%
    max-width: 100%

</style>

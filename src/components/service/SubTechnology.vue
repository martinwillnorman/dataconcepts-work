
<template>
  <div class="subtechnology">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SubTechnology",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.subtechnology
  padding: 25px
  flex-basis: 50%
  width: 50%
  max-width: 50%
  box-sizing: border-box
  z-index: 999
  color: inherit
  position: relative

h2
  font-size: 24px
  font-weight: 700
  letter-spacing: -1px
  margin-bottom: 1.66667rem

p
  font-size: 1rem
  font-weight: 400
  line-height: 30px
  position: relative
  z-index: 999

@media only screen and (max-width: 1080px)
  .subtechnology
    padding: 25px
    flex-basis: 50%
    width: 50%
    max-width: 50%

@media only screen and (max-width: 768px)

  .subtechnology
    padding: 20px 10px

@media only screen and (max-width: 695px)
  .subtechnology
    padding: 20px 0
    flex-basis: 100%
    width: 100%
    max-width: 100%

</style>

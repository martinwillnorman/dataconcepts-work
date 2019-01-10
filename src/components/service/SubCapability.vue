
<template>
  <div class="row subcapability">
    <div class="column col-4">
      <div class="content-wrapper">
        <h1 class="subcapability-title">{{title}}</h1>
        <p class="subcapability-text">{{content}}</p>
      </div>
    </div>
    <div class="column col-2">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCapability",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"


hr
    background: transparent
    height: 0
    padding: 0
    margin: 0 auto 0
    width: 50%


.subcapability-title
    font: 
        size: 28px
        weight: 400
    margin-bottom
</style>

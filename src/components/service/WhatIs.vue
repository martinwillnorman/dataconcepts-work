
<template>
  <div class="row whatis">
    <div class="column col-4">
      <div class="content-wrapper">
        <h1 class="whatis-title">{{title}}</h1>
      </div>
    </div>
    <div class="column col-8">
      <div class="content-wrapper">
        <p class="whatis-text">{{content}}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatIs",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.whatis 
    padding: 80px 25px 0

.whatis-title
    font: 
        size: 36px
        weight: 400

</style>

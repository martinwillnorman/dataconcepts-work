<template>
  <div class="row padded">
    <div class="column col-12">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkChallenge"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

p
    font:
        size: 2.5rem
    line-height: 1.6    
</style>
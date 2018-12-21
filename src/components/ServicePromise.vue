<template>
  <div class="row">
    <div class="column col-2 no-content"></div>
    <div class="column col-8 responsive-12">
      <div class="content-wrapper">
        <h1>The Promise of {{title}}</h1>
        <p>{{content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"
.content-wrapper
    padding: 100px 0 0

h1
    font:
        size: 3rem
    margin-bottom: 30px
</style>



<template>
  <div class="row">
    <div class="column col-1 no-content"></div>
    <div class="column col-11">
      <div class="content-wrapper">
        <div class="service-right">
          <h1>{{title}}</h1>
          <p>{{content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceRight",
  props: ["title", "content"]
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.service-right
    background: $bround-c-4
    color: #fff

</style>

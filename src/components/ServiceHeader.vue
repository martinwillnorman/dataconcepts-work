<template>
  <div class="content-wrapper" data-aos="fade-up" data-aos-duration="900">
    <h3>{{ title}}</h3>
    <p>{{kicker}}</p>
  </div>
</template>

<script>
export default {
  name: "ServiceHeader",
  props: ["title", "kicker"],
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
h3
    font:
        size: 2rem
    color: #fff
    margin-bottom: 20px

p
    color: #fff
    font:
        size: 1.5rem
    line-height: 1.5

</style>

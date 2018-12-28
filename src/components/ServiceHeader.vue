<template>
  <div class="content-wrapper">
    <h3 data-aos="fade-up" data-aos-duration="900">{{ title}}</h3>
    <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">{{kicker}}</p>
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
        size: 2.2rem
    color: #fff
    margin-bottom: 20px

p
    color: #fff
    font:
        size: 1.5rem
    line-height: 1.5
    letter-spacing: 1px

</style>

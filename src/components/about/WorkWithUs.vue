<template>
  <section class="content-block">
    <div class="container">
      <div class="row padded-top">
        <div class="column col-12">
          <div class="content-wrapper work-with-us-wrapper">
            <div class="work-with-us">
              <h4></h4>
              <h1>Hire Us</h1>
            </div>
            <div class="work-with-us">
              <h4></h4>
              <h1>Join Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WorkBox from "../../components/WorkBox.vue";
import WorkArrow from "../../components/WorkArrow.vue";
export default {
  name: "SeeOurWork",
  props: ["subtitle"],
  components: {
    WorkBox,
    WorkArrow
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.work-with-us-wrapper
    display: flex

.work-with-us
    flex: 1
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

</style>

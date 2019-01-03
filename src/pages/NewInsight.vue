<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections"></div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";

export default {
  name: "NewInsight",
  components: {
    NavBar,
    ModalMenu,
    Spacer
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"


</style>

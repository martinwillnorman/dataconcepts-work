<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";

export default {
  name: "",
  components: {
    NavBarWhite,
    ModalMenu
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"
</style>

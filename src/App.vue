<template>
  <div id="dataconcepts">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "dataconcepts",
  components: {
    Footer
  }
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Muli:300,400,600,700,900|Raleway:400,200")

@import "./assets/sass/settings.sass"
@import "./assets/sass/global.sass"

</style>

<template>
  <div id="dataconcepts">
    <router-view/>
    <Footer/>
    <SubFooter/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import SubFooter from "./components/SubFooter.vue";

export default {
  name: "dataconcepts",
  components: {
    Footer,
    SubFooter
  }
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Muli:300,400,600,700,900|Raleway:400,200")
// @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700,900")
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700,900|Open+Sans:400,600,700")

@import "./assets/sass/settings.sass"
@import "./assets/sass/global.sass"

</style>

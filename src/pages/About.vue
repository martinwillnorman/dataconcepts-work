<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <TextHero title="Identity."/>

      <AboutUs/>

      <People>
        <Person
          position="Cyber Security Architect"
          name="Sean"
          location="Richmond, VA"
          imagesource="./people/SeanColor.jpg"
        />
        <Person
          position="Founder & CEO"
          name="Rooz Dadabhoy"
          imagesource="./insight-images/dance-2.jpg"
        />
        <Person
          position="Founder & CEO"
          name="Rooz Dadabhoy"
          imagesource="./insight-images/dance-2.jpg"
        />
        <Person
          position="Founder & CEO"
          name="Rooz Dadabhoy"
          imagesource="./insight-images/dance-2.jpg"
        />
      </People>

      <Culture/>

      <Partners/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import TextHero from "../components/TextHero.vue";
import AboutUs from "../components/about/AboutUs.vue";
import People from "../components/about/People.vue";
import Person from "../components/about/Person.vue";
import Culture from "../components/about/Culture.vue";
import Partners from "../components/about/Partners.vue";

export default {
  name: "About",
  components: {
    NavBar,
    ModalMenu,
    TextHero,
    AboutUs,
    People,
    Person,
    Culture,
    Partners
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

</style>

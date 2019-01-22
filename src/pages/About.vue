<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <TextHero title="Identity."/>

      <AboutUs/>

      <People>
        <div class="people-wrapper">
          <Person
            position="Cyber Security Architect"
            name="Sean"
            location="Richmond, VA"
            imagesource="./people/SeanColor.jpg"
          />
          <Person
            position="Full Stack Developer"
            name="Zichao Xu"
            location="Richmond, VA"
            imagesource="./people/Zhichao.jpeg"
          />
          <Person
            id="ana-james"
            position="Office Manager"
            name="Ana James"
            location="Richmond, VA"
            imagesource="./people/Ana.jpg"
          />
        </div>
      </People>

      <Culture/>

      <Partners id="partners"/>

      <SeeOurWork subtitle="see our work"/>

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image hero-background"></div>
      </section>
      <WorkWithUs/>

      <Subscribe/>
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
import SeeOurWork from "../components/about/SeeOurWork.vue";
import WorkWithUs from "../components/about/WorkWithUs.vue";
import Subscribe from "../components/about/Subscribe.vue";

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
    Partners,
    SeeOurWork,
    WorkWithUs,
    Subscribe
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/insights/FullSizeRender.jpg)
  background-size: cover

.people-wrapper
  margin: 0 auto
  max-width: 1400px
  padding: 0 1%
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  width: 100%

</style>

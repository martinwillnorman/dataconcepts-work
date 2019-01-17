<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <TextHero title="Hello."/>
      <ContactInformation/>
      <Offices/>
      <JoinUs/>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import TextHero from "../components/TextHero.vue";
import ContactInformation from "../components/contact/ContactInformation.vue";
import Offices from "../components/contact/Offices.vue";
import JoinUs from "../components/contact/JoinUs.vue";

export default {
  name: "Contact",
  components: {
    NavBar,
    ModalMenu,
    Spacer,
    TextHero,
    ContactInformation,
    Offices,
    JoinUs
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

h1
    color: $font-c-h-3
    font:
        size: 3rem
        weight: 300

h2
    color: $font-c-h-3
    font: 
        size: 2rem
        weight: 600
    margin-bottom: 60px

.contact-wrapper
    height: 100%
    display: flex

.contact-wrapper div
    width: 50%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

.contact-wrapper h3
    font:
        size: 2.2rem
        weight: 600
    margin-bottom: 30px

a
    font: 
        size: 1.2rem
        weight: 600
    position: relative
    

.locations-wrapper
    display: flex
    flex-wrap: wrap

.location
    width: 25%
    max-width: 25%
    flex-basis: 25%
    border: solid 0.05555rem $spacer-c
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    min-height: 200px

a::after
  content: ""
  position: absolute
  top: 100%
  left: 0
  height: 1px
  width: 100%
  transform: translatey(10px)
  background: $dataconcepts-red
  opacity: 0
  transition: transform 400ms cubic-bezier(.29,.29,.42,1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

a:hover:after 
  opacity: 1
  transform: translatey(2px)

@media only screen and (max-width: 1080px)
    .location
        width: 33.3333%
        max-width: 33.3333%
        flex-basis: 33.3333%

@media only screen and (max-width: 850px)
    .location
        width: 50%
        max-width: 50%
        flex-basis: 50%
    
    .contact-wrapper
        flex-direction: column

    .contact-wrapper div
        align-items: start
        width: 100%

    .contact-wrapper div:nth-child(2)
        padding-top: 60px

@media only screen and (max-width: 600px)
    .location
        width: 100%
        max-width: 100%
        flex-basis: 100%
        text-align: center

</style>

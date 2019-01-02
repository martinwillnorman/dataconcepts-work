<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <section class="content-block">
        <div class="content-wrapper">
          <div class="nav-block white"></div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded">
            <div class="column col-12">
              <div class="content-wrapper">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="600"
                  class="section-header short"
                >Get In Touch</h1>
              </div>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper contact-wrapper">
                <div>
                  <h3>General Enquiries.</h3>
                  <a href="mailto:abc@dataconcepts-inc.com">abc@dataconcepts-inc.com</a>
                </div>
                <div>
                  <h3>Prefer to call?</h3>
                  <a href="tel:1-804-968-4700">+1-804-968-4700</a>
                </div>
              </div>
            </div>
            <Spacer/>
            <div class="column col-12">
              <div class="content-wrapper">
                <h2>Our Locations</h2>
              </div>
            </div>
            <div class="column col-12 responsive-12">
              <div class="content-wrapper locations-wrapper">
                <div class="location">
                  <div>
                    <h3>Richmond</h3>
                    <p>4405 Cox Rd</p>
                    <p>Glen Allen VA 23060</p>
                    <a href="tel:1-804-968-4700">+1-804-968-4700</a>
                  </div>
                </div>
                <div class="location">
                  <div>
                    <h3>Denver</h3>
                    <p>1490 Delgany St</p>
                    <p>Suite 521 Denver CO 80202</p>
                    <a href="tel:1-303-575-1000">+1-303-575-1000</a>
                  </div>
                </div>
                <div class="location">
                  <div>
                    <h3>Raleigh</h3>
                    <p>4405 Cox Rd</p>
                    <p>Glen Allen VA 23060</p>
                    <a href="tel:1-919-425-2300">+1-919-425-2300</a>
                  </div>
                </div>
                <div class="location">
                  <div>
                    <h3>Lansing</h3>
                    <p>4405 Cox Rd</p>
                    <p>Glen Allen VA 23060</p>
                    <a href="tel:1-571-827-5444">+1-571-827-5444</a>
                  </div>
                </div>
                <div class="location">
                  <div>
                    <h3>Columbia</h3>
                    <p>606 Garden Arbor Ln</p>
                    <p>SC 29072</p>
                    <a href="tel:1-803-336-3900">+1-803-336-3900</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";

export default {
  name: "ContactUs",
  components: {
    NavBar,
    ModalMenu,
    Spacer
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

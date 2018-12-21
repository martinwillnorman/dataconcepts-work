<template>
  <transition name="fade">
    <section class="modal-menu content-block">
      <div class="container">
        <div class="row">
          <div class="column col-12">
            <ul class="mobile-nav-holder">
              <li>
                <router-link class="page-link" to="/work">Work</router-link>
              </li>
              <li class="padded">
                <router-link class="page-link" to="/services">Services</router-link>
              </li>
              <li class="padded">
                <router-link class="page-link" to="/insights">Insights</router-link>
              </li>
              <li class="padded">
                <router-link class="page-link" to="/careers">Careers</router-link>
              </li>
              <li class="padded">
                <router-link class="page-link" to="/contact-us">Contact</router-link>
              </li>
            </ul>
            <ul class="social-link-holder">
              <li>
                <a class="social-link" href="#">
                  <img src="../assets/logo/linkedin.svg" alt="LinkedIn">
                </a>
              </li>
              <li>
                <a class="social-link" href="#">
                  <img src="../assets/logo/facebook-icon.svg" alt="Facebook">
                </a>
              </li>
              <li>
                <a class="social-link" href="#">
                  <img src="../assets/logo/twitter.svg" alt="Twitter">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "ModalMenu"
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.modal-menu
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #fff
  z-index: 1000
  display: none
  padding-top: 80px

.modal-menu.show
  display: flex

.mobile-nav-holder
  list-style: none
  margin: 0 auto
  padding: 0
  display: flex
  flex-direction: column
  width: 100%
  max-width: 570px
  padding-top: 7%

.social-link-holder
  display: flex
  justify-content: space-between
  list-style: none
  margin: 0
  padding: 0
  padding-top: 15%
  max-width: 200px
  margin-left: auto
  margin-right: auto

.mobile-nav-holder li
  display: flex
  justify-content: center
  flex-basis: 100%

.page-link
  font:
    size: 3rem
    weight: 900
    family: $font-header
  position: relative
  color: #000
  display: block

img
  height: 30px

.page-link::after, .social-link::after
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

.page-link:hover:after, .social-link:hover:after
  opacity: 1
  transform: translatey(2px)
  
.padded
  margin-top: 20px

@media only screen and (min-width: 1000px)
  .modal-menu
    display: none !important

</style>


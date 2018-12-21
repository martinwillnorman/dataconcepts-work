<template>
  <section class="footer content-block">
    <div class="container">
      <div class="row">
        <div class="column col-12">
          <div class="content-wrapper">
            <div class="footer__content-1">
              <div class="box">
                <router-link class="logo" to="/">concepts</router-link>
                <p>
                  We are an IT Consultancy that blends strategy, process
                  & technology to meet business objectives.
                </p>

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
                <p class="reserved">Ⓒ dataconcepts 2019 | All Rights Reserved</p>
              </div>
            </div>
            <div class="footer__content-2">
              <div class="split">
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
              </div>
              <div class="split"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.footer
  background: $bround-c-2

.content-wrapper
  display: flex
  padding: 100px 0

.footer__content-1
  display: flex
  flex-direction: column
  justify-content: center
  flex-basis: 50%

.box
  max-width: 330px

p
  color: $font-c-p-2
  font:
    size: .9rem
  line-height: 1.8
  margin-top: 10px

.reserved
  font:
    weight: 900
    family: $font-header
  color: #999

.social-link-holder
  display: flex
  justify-content: space-between
  list-style: none
  margin: 0
  padding: 0
  padding-top: 15%
  max-width: 200px
  margin-right: auto

.logo 
  color: $font-c-1
  font:
    size: 1.5rem
    weight: 900
    family: $font-header

.logo::before
  content: "data"
  color: $dataconcepts-red

.footer__content-2 
  flex-basis: 50%
  display: flex
  flex-direction: column

.split:first-child
  flex: auto
  display: flex

.mobile-nav-holder
  flex: auto
  display: flex
  flex-wrap: wrap

li
  flex-basis: 50%

li a::after
  content: ""
  position: absolute
  top: -10px
  left: 0
  height: 1px
  width: 100%
  transform: translatey(10px)
  background: $dataconcepts-red
  opacity: 0
  transition: transform 400ms cubic-bezier(.29,.29,.42,1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

li a:hover:after 
  opacity: 1
  transform: translatey(2px)

@media only screen and (max-width: 690px) 
  .content-wrapper
    flex-direction: column-reverse

  .footer__content-1
    padding-top: 30px
  
  .padded
    margin-bottom: 30px


</style>

<template>
  <header id="header" v-bind:class="{hidden: scrolled}">
    <div class="container">
      <nav data-aos="fade-down" data-aos-duration="500">
        <div class="nav__content">
          <router-link class="logo" v-bind:class="{ active: showMobileMenu }" to="/">concepts</router-link>
          <div class="link-container">
            <ul class="standard-nav-holder">
              <li>
                <router-link v-on:click.native="myFilter" to="/work">Work</router-link>
              </li>
              <li>
                <router-link to="/services">Services</router-link>
              </li>
              <li>
                <router-link to="/insights">Insights</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/careers">Careers</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
            <a class="target-burger" v-on="{ click: myFilter}">
              <ul class="buns">
                <li class="bun" v-bind:class="{ active: showMobileMenu}"></li>
                <li class="bun" v-bind:class="{ active: showMobileMenu}"></li>
              </ul>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBarWhite",
  data() {
    return {
      showMobileMenu: false,
      scrolled: false
    };
  },
  methods: {
    myFilter() {
      this.showMobileMenu = !this.showMobileMenu;
      const el1 = document.body;
      const el2 = document.querySelector(".modal-menu");

      if (this.showMobileMenu) {
        el1.classList.add("hide-overflow");
        el2.classList.add("show");
      } else {
        el1.classList.remove("hide-overflow");
        el2.classList.remove("show");
      }
    },
    handleScroll(event) {
      this.scrolled = window.scrollY > 0;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="sass">
@import "../assets/sass/settings.sass"

header
  width: 100%
  position: fixed
  z-index: 2000
  background-color: transparent
  display: flex
  transition: transform .4s ease

nav
  width: 100%
  height: 80px
  margin: 0 auto
  display: flex
  align-items: center

.hidden 
  transform: translate(0, -80px)
  
.nav__content
  flex: auto
  display: flex
  justify-content: space-between
  align-items: center

.logo 
  color: #fff
  font:
    size: 1.8rem
    weight: 900
    family: $font-header
  transition: color 1s cubic-bezier(0.23, 1, 0.32, 1)
  letter-spacing: 2px

.logo.active
  color: #000

.logo::before
  content: "data"
  color: #fff

.standard-nav-holder
  align-items: center
  height: 100%
  list-style: none
  position: relative

li
  margin-right: 40px

li:last-child 
  margin-right: 0

li a
  color: #fff
  font: 
    size: 0.9rem
    weight: 600
    family: $font-header
  position: relative
  letter-spacing: 2px 

li a::after
  content: ""
  position: absolute
  top: 100%
  left: 0
  height: 1px
  width: 100%
  transform: translatey(10px)
  background: #fff
  opacity: 0
  transition: transform 400ms cubic-bezier(.29,.29,.42,1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

li a:hover:after 
  opacity: 1
  transform: translatey(2px)

.target-burger
  width: 30px
  height: 30px
  align-items: center
  transition: all 0.5s ease
  cursor: pointer

.target-burger:hover .bun 
  background-color: $dataconcepts-red

.buns
  flex: auto
  list-style: none
  margin: 0
  padding: 0
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), color 1s cubic-bezier(0.23, 1, 0.32, 1)
  transform: translateZ(0)
  color: #fff

.bun
  width: 100%
  height: 2px
  background-color: #fff
  position: absolute
  top: 50%
  margin-top: -0.75px
  transform: translateY(-3.75px) translateZ(0)
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1), background-color 1s cubic-bezier(0.23, 1, 0.32, 1)

.bun:last-child
  transform: translateY(3.75px) translateZ(0)

.bun:first-child.active
  transform: rotate(45deg) translateZ(0)
  background-color: #000

.bun:last-child.active
  transform: rotate(-45deg) translateZ(0)
  background-color: #000
    
@media only screen and (min-width: 0) 
  .standard-nav-holder
    display: none

  .target-burger
    display: flex

@media only screen and (min-width: 1000px) 
  .target-burger
    display: none

  .standard-nav-holder
    display: flex
  
</style>

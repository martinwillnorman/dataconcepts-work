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
@import url("https://fonts.googleapis.com/css?family=Muli:300,600,900|Raleway:400,200")

@import "./assets/sass/settings.sass"

html 
  margin-top: 0 !important

body  
  margin: 0
  padding: 0

body, html
  min-height: 100%
  height: 100%
  width: 100%

h1,h2,h3,h4,h5,h6
  font-family: $font-header
  margin: 0

p,span
  font-family: $font-body
  line-height: 2
  margin: 0

li, a
  font:
    weight: 900
    family: $font-header

ul
  list-style: none
  margin: 0
  padding: 0

a
  text-decoration: none !important
  color: $dataconcepts-red

img
  max-width: 100%
  height: auto

.no-pad
  padding: 0 !important

.content-holder
  min-height: 100%
  width: 100%
  background-color: transparent

.hide-overflow
  overflow: hidden

.sections
  overflow-y: hidden
  overflow-x: hidden

#dataconcepts 
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  font: 
    size: 18px
  min-height: 100%
  box-sizing: border-box
  line-height: 1.2

#dataconcepts:focus
  outline: none !important

.container
  margin-left: auto
  margin-right: auto
  padding: 0 1.66667rem
  max-width: 1230px
  display: flex
  flex-wrap: wrap
  width: 100%

.row
  margin-left: -.83333rem
  margin-right: -.83333rem
  flex: auto
  width: 100%
  display: flex
  flex-flow: row wrap
  position: relative

.column
  padding-right: .83333rem
  padding-left: .83333rem

.column.centered
  margin-left: auto
  margin-right: auto

.column.center-content
  align-items: center
  display: flex

.column.center-horizontal
  display: flex
  justify-content: center

.col-12 
  width: 100%
  max-width: 100%
  flex-basis: 100%

.col-11
  width: 91.66667%
  max-width: 91.66667%
  flex-basis: 91.66667%

.col-10
  width: 83.33333%
  max-width: 83.33333%
  flex-basis: 83.33333%

.col-9
  width: 75%
  max-width: 75%
  flex-basis: 75%

.col-8
  width: 66.66667%
  max-width: 66.66667%
  flex-basis: 66.66667%

.col-7
  width: 58.33333%
  max-width: 58.33333%
  flex-basis: 58.33333%

.col-6
  width: 50%
  max-width: 50%
  flex-basis: 50%

.col-5
  width: 41.66667%
  max-width: 41.66667%
  flex-basis: 41.66667%

.col-4
  width: 33.33333%
  max-width: 33.33333%
  flex-basis: 33.33333%

.col-3
  width: 25%
  max-width: 25%
  flex-basis: 25%

.col-2
  width: 16.66667%
  max-width: 16.66667%
  flex-basis: 16.66667%

.col-1
  width: 8.33333%
  max-width: 8.33333%
  flex-basis: 8.33333%

.content-block
  display: flex
  position: relative
  width: 100%

.content-block.intruding
  background: #fff
  margin-top: -270px

.content-block.intruding::before
  content: ""
  position: absolute
  background: #fff
  transform: rotate(10deg)
  top: -11vw
  left: -9vw
  height: 54vw
  width: 118vw

.content-block.grey
  background: $bround-c-4

.fullpage
  height: 100vh
  width: 100%
  overflow: hidden

.mostpage
  height: 84vh
  width: 100%
  overflow: hidden

.show-more
  cursor: pointer
  position: absolute
  bottom: 2px
  width: 100%
  z-index: 105
  display: flex
  justify-content: center
  padding: 30px 0

.show-more:hover
  animation: upDown 2s infinite

.nav-block
  background: #000
  min-height: 80px

.services-wrapper
  display: flex
  flex-wrap: wrap


@keyframes upDown
  0%
   tranform: translate(0, 0)
  25%
   transform: translate(0, 6px)
  75%
   transform: translate(0, -6px)
  100%
   transform: translate(0, 0)

.cover-image
  width: 100%
  height: 100%
  position: absolute
  overflow: hidden
  top: 0
  left: 0
  right: 0
  background-size: cover
  background-position: top center
  background-attachment: scroll
  background-color: transparent

.cover-image.tinted::before
  content: ""
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: rgba(0,0,0,0.3)

.content-wrapper 
  position: relative
  width: 100%

.content-wrapper.header__content
  padding: 18% 0 0

.content-wrapper.header__content h1
  color: #fff
  font-size: 4rem

.content-wrapper.header__content h3
  color: #fff
  font-size: 2.8rem
  margin: 0
  line-height: 1.5

.dynamic-text-wrapper
  display: flex
  min-height: 23%
  flex-direction: column
  justify-content: space-between

.dynamic-text-wrapper h3
  font-size: 23rem
  margin: 0
  color: #fff
  line-height: 1.3

#dynamic-text
    background-image: linear-gradient(135deg,#ff48a6 10%,#520881 90%)
    -webkit-text-fill-color: transparent
    -webkit-background-clip: text
    display: inline-block
    min-height: 2.8rem
    margin: 0
    color: #ff48a6
    position: absolute
    top: 50%
    transform: translate(0, -50%)

.mostpage
    background-color: #000

.content-wrapper.intruding-kicker
  margin-top: -100px
  padding: 100px 0

.intruding-kicker-arrow-holder
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  width: 100%

.spacer
  height: 0.05555rem
  background-color: $spacer-c
  width: 100%
  margin: 100px 0

.section-header
  font:
    size: 3rem
    weight: 300
  color: $font-c-h-3
  margin-bottom: 80px
  position: relative
  text-align: center

.section-header::after
  content: ""
  height: 2px
  width: 20%
  background: $font-c-p-3
  position: absolute
  top: 140%
  left: 50%
  transform: translate(-50%, 0)

@media only screen and (min-width: 1000px)
  body
    overflow: visible !important

@media only screen and (max-width: 991.9px) and (min-width: 768px)
  .container
    padding: 0 1.11111rem
  
@media only screen and (max-width: 800px) 
  .column.no-content
    display: none

  .column.responsive-12
    width: 100%
    max-width: 100%
    flex-basis: 100%

  .column.responsive-8
    width: 66.66667%
    max-width: 66.66667%
    flex-basis: 66.66667%

  .column.responsive-6
    width: 50%
    max-width: 50%
    flex-basis: 50%

  .column.responsive-4
    width: 33.33333%
    max-width: 33.33333%
    flex-basis: 33.33333%

@media only screen and (max-width: 690px)
  .column.responsive-12
    width: 100%
    max-width: 100%
    flex-basis: 100%

@media only screen and (max-width: 543.9px)
  .container
    padding: 0 1.11111rem
 

@media only screen and (max-width: 450px)
  .content-wrapper.header__content h1
    font-size: 2rem

  .column.responsive
    width: 100%
    max-width: 100%
    flex-basis: 100%

</style>

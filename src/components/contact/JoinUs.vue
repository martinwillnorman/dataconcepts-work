<template>
  <section class="content-block">
    <router-link class="join-us-link" to="/careers">
      <div class="container join-us-container">
        <div class="row join-us-row">
          <div class="column col-8 center-content">
            <div class="content-wrapper join-us-wrapper">
              <h1 class="join-us-header">Join Our Team.</h1>
            </div>
          </div>
          <div class="column col-4 center-content">
            <div class="content-wrapper arrow-wrapper">
              <svg
                class="arrow-thin-right__svg"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="39.002px"
                height="26.005px"
                viewBox="286.5 382.498 39.002 26.005"
                enable-background="new 286.5 382.498 39.002 26.005"
                title="Next"
              >
                <g>
                  <polygon
                    fill="#fff"
                    points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                  ></polygon>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "JoinUs"
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.join-us-link
  position: relative
  width: 100%
  height: 100%
  min-height: 75vh
  background-image: url(../../assets/background/insights/people-2.jpg)
  background-size: cover
  background-position: center
  display: flex
  align-items: center

.join-us-link::after
  content: ""
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  background-color: rgba(0,0,0,0)
  transition: background-color .18s

.join-us-link:hover:after
  background-color: rgba(0,0,0,0.7)

.join-us-row
  z-index: 999

.arrow-wrapper
  transition: all ease .3s

.join-us-link:hover .arrow-wrapper
  padding-left: 10%

.join-us-header
  color: #fff
  font:
    size: 4rem
    family: $font-body
    weight: 700
  letter-spacing: -2px

</style>

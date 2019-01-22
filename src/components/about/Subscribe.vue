<template>
  <section class="content-block light-grey">
    <div class="container">
      <div class="row padded-large">
        <div class="column col-12">
          <div class="content-wrapper subscribe-wrapper">
            <form id="my-form" v-on:submit="validateBeforeSubmit">
              <input
                class="input light-grey"
                v-model="subscription"
                v-validate="'required|email'"
                type="text"
                name="email"
                data-vv-validate-on="none"
                placeholder="Subscribe"
              >
              <span class="work-arrow">
                <svg
                  class="arrow-thin-right__svg"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25px"
                  height="26.005px"
                  viewBox="286.5 382.498 39.002 26.005"
                  enable-background="new 286.5 382.498 39.002 26.005"
                  title="Next"
                >
                  <g>
                    <polygon
                      fill="#e0e1e2"
                      points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
                    ></polygon>
                  </g>
                </svg>
              </span>
              <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Subscribe",
  data() {
    return {
      subscription: ""
    };
  },
  methods: {
    validateBeforeSubmit(e) {
      e.preventDefault();

      this.$validator.validateAll().then(res => {
        if (res) {
          return console.log("correct!");
        }
        console.log("incorrect!");
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.subscribe-wrapper 
  display: flex
  justify-content: center

#my-form
  display: inline-block
  margin: 0 auto
  position: relative
  flex: 1

.input
  width: 100%
  font:
    size: 100px
    family: $font-body
  letter-spacing: -2px
  display: block
  border: 0
  border-bottom: 1px solid #e0e1e2
  padding: 0
  color: #e0e1e2
  text-align: left
  transition: 2s cubic-bezier(.18,1,.21,1)
  outline: 0
  &::placeholder
    transition: 2s cubic-bezier(.18,1,.21,1)
    opacity: .4
  &:hover::placeholder
    opacity: 1
  &:focus
    outline: none !important
    opacity: .8
    color: $bround-c-yellow
    border-bottom: 1px solid $bround-c-yellow
  &:focus::placeholder
    color: $bround-c-yellow
    opacity: .8

.work-arrow
  position: absolute
  top: 50%
  transform: translate(0, -30%)
  right: 15px
  display: flex
  align-items: center

.error
  background-color: #e0e1e2
  font-weight: 200
  z-index: 1
  color: #898989
  position: absolute
  padding: 20px 0
  margin: 30px auto auto
  left: 0
  right: 0
  width: auto
  max-width: 300px
  font-size: 14px
  transition: 2s cubic-bezier(0.18, 1, 0.21, 1)
  text-align: center
</style>

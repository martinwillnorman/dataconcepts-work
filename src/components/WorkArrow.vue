<template>
  <span class="work-arrow">
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
          fill="#FFFFFF"
          points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395 	"
        ></polygon>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: "WorkArrow"
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

span
  position: absolute
  bottom: 10px
  left: 30px
  opacity: 0
  transition: opacity 150ms 50ms cubic-bezier(0.25, 0.1, 0.25, 1)

</style>
<template>
  <div class="content-block aside-left-block gradient-3">
    <div class="container">
      <div class="row">
        <div class="column col-8">
          <div class="content-wrapper aside-left-wrapper text-white">
            <h1
              data-aos="fade-up"
              data-aos-duration="600"
              class="aside-left-header section-header left text-white short"
            >{{title}}</h1>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              class="aside-left-text"
            >{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideRight",
  props: ["title", "content"]
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"


.aside-left-block
  padding: 300px 0

.aside-left-block::before
  content: ''
  width: 110vw
  position: absolute
  left: -5vw
  height: 11.1vw
  top: -5.555vw
  background: #fff
  transform: rotate(6deg)

.aside-left-block::after
  content: ''
  width: 110vw
  position: absolute
  left: -5vw
  height: 11.1vw
  bottom: -5.555vw
  background: #000
  transform: rotate(6deg)

.aside-left-header
    max-width: 500px

</style>



<template>
  <section id="first" class="content-block black">
    <div class="container">
      <div class="row about-us-row">
        <div class="column col-4">
          <div class="content-wrapper text-white">
            <div class="subtitle-wrapper">
              <hr class="subtitle white">
              <h6 class="subtitle-header">who we are</h6>
            </div>
          </div>
        </div>
        <div class="column col-8">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper text-white">
            <h1 class="about-us-header">We grow businesses by creating experiences people love.</h1>
            <p
              class="about-us-text"
            >Today, people embrace companies with the customer experiences that best meet their needs. Huge transforms companies by designing these best-in-class experiences, driven by strong creative and rooted in the technology, data, and organizational strategy required for operational excellence. We combine these capabilities into a single solution, creating unified brand experiences that change industries and foster meaningful relationships with users. This user-centric approach has made us the fastest-growing agency of the past decade.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs"
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.about-us-header
    font:
        size: 3rem
    margin-bottom: 40px
    line-height: 1.25

.about-us-text
  font:
    size: 1.2rem
  line-height: 1.8

.about-us-row
    padding: 200px 0

</style>

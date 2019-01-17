<template>
  <section id="first" class="content-block black">
    <div class="container">
      <div class="row padded-large">
        <div class="column col-4">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle white">
              <h6 class="subtitle-header text-white">contact</h6>
            </div>
          </div>
        </div>
        <div class="column col-8">
          <div class="content-wrapper text-white">
            <h1 class="contact-title">We're here for you.</h1>
            <div class="contact-wrapper">
              <div class="contact">
                <h4 class="contact-subtitle">Become a Client.</h4>
                <a class="telephone" href="tel:1-804-968-4700">+1-804-968-4700</a>
                <a class="email" href="mailto:abc@dataconcepts-inc.com">abc@dataconcepts-inc.com</a>
              </div>
              <div class="contact">
                <h4 class="contact-subtitle">Become a Client.</h4>
                <a class="telephone" href="tel:1-804-968-4700">+1-804-968-4700</a>
                <a class="email" href="mailto:abc@dataconcepts-inc.com">abc@dataconcepts-inc.com</a>
              </div>
              <div class="contact">
                <h4 class="contact-subtitle">Become a Client.</h4>
                <a class="telephone" href="tel:1-804-968-4700">+1-804-968-4700</a>
                <a class="email" href="mailto:abc@dataconcepts-inc.com">abc@dataconcepts-inc.com</a>
              </div>
              <div class="contact">
                <h4 class="contact-subtitle">Become a Client.</h4>
                <a class="telephone" href="tel:1-804-968-4700">+1-804-968-4700</a>
                <a class="email" href="mailto:abc@dataconcepts-inc.com">abc@dataconcepts-inc.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactInformation"
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.contact-title
  font: 
    size: 3.6rem
    weight: 400
    family: $font-body
  letter-spacing: -2px

.contact-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-around

.contact
  margin-top: 100px
  max-width: 48%
  flex-basis: 48%

.contact-subtitle
  font:
    family: $font-body
    weight: 400

.telephone
  margin-top: 40px
  display: block
  color: #fff
  transition: color .18s
  font: 
    size: 1.2rem
    weight: 400
  letter-spacing: 4px

.telephone:hover
  color: $bround-c-yellow

.email
  margin-top: 8px
  display: block
  color: #fff
  transition: color .18s
  font: 
    size: 1.2rem
    weight: 400
  letter-spacing: 1px

.email:hover
  color: $bround-c-yellow
</style>

<template>
  <section class="content-block light-black footer">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper footer-logo-wrapper">
            <router-link class="footer-logo" to="/">dataconcepts</router-link>
            <p class="footer-description">
              We are an IT Consultancy that blends strategy, process
              & technology to meet business objectives.
            </p>
          </div>
        </div>

        <div class="column col-8">
          <div class="content-wrapper footer-link-wrapper">
            <div class="footer-link-box">
              <ul class="footer-link-list">
                <span>
                  <router-link class="footer-link-header" to="/services">Services</router-link>
                </span>
                <li class="footer-link-list-item">
                  <router-link
                    class="footer-link"
                    to="/services/application-development"
                  >App Development</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link
                    class="footer-link"
                    to="/services/business-intelligence"
                  >Business Intelligence</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link
                    class="footer-link"
                    to="/services/program-management"
                  >Program Management</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/machine-learning">ML & IoT</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link
                    class="footer-link"
                    to="/work/predictive-modeling"
                  >Predictive Modeling</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/ui-ux">UI / UX</router-link>
                </li>
              </ul>
              <ul class="footer-link-list">
                <span>
                  <router-link class="footer-link-header" to="/services">Data</router-link>
                </span>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/data-analytics">Data & Analytics</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/data-strategy">Data Strategy</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/big-data">Big Data</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/data-governance">Governance</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/data-warehouse">Warehousing</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/data-science">Data Science</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/services/data-visualization">Visualization</router-link>
                </li>
              </ul>
            </div>

            <div class="footer-link-box">
              <ul class="footer-link-list">
                <span>
                  <router-link class="footer-link-header" to="/work">Work</router-link>
                </span>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/work/capital-one">Trucking</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/work/capital-one">Judiciary</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/work/capital-one">Public Safety</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/work/capital-one">Energy</router-link>
                </li>
                <li class="footer-link-list-item">
                  <router-link class="footer-link" to="/work/capital-one">Non-Profit</router-link>
                </li>
              </ul>

              <ul class="footer-link-list">
                <li class="footer-link-list-item-last">
                  <router-link class="footer-link-header" to="/work/capital-one">Careers</router-link>
                </li>
                <li class="footer-link-list-item-last">
                  <router-link class="footer-link-header" to="/work/capital-one">Partners</router-link>
                </li>
                <li class="footer-link-list-item-last">
                  <router-link class="footer-link-header" to="/work/capital-one">Contact</router-link>
                </li>
              </ul>
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
  padding: 100px 0 200px

.footer-logo
 color: #fff
 transition: .18s
 transition-property: color
 margin-bottom: 15px
 display: inline-block
 font: 
  size: 1.8rem

.footer-logo:hover
  color: $bround-c-yellow

.footer-description
  color: #fff
  max-width: 350px

.footer-link-header
  color: $bround-c-yellow
  text-transform: uppercase
  font:
    size: 15px
    family: $font-header
    weight: 600
  line-height: 23px
  margin: 0 0 25px
  display: inline-block
  letter-spacing: 1px
  transition: .18s
  transition-property: color

.footer-link-header:hover
  color: #fff

.footer-link-wrapper
  display: flex

.footer-link-box
  display: flex
  flex: 1
  border-top: 1px solid #292929
  padding-top: 46px

.footer-link-list
  padding: 0 15px
  width: 50%

.footer-link
  display: block
  color: inherit
  margin: 0 0 8px
  color: #fff
  font: 
    size: 16px
    family: $font-header
    weight: 400
  line-height: 24px
  -webkit-transition: .18s
  transition: .18s
  -webkit-transition-property: color
  transition-property: color

.footer-link:hover
  color: $bround-c-yellow

</style>
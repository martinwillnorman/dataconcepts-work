<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image tinted"></div>
        <div class="container">
          <div class="row">
            <div class="column col-3 no-content"></div>
            <div class="column col-8 responsive-12">
              <div class="content-wrapper header__content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="900"
                >Here's a little insight into what we do</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block intruding">
        <div class="container">
          <div class="row">
            <div class="column col-4 responsive-8 responsive">
              <div
                data-aos="fade-in"
                data-aos-duration="900"
                class="content-wrapper intruding-kicker"
              >
                <h3>Share Knowledge</h3>
                <p>We think it's important to provide our clients with key insights into the solutions that could help your business succeed.</p>
              </div>
            </div>
            <div class="column col-12 responsive">
              <div class="content-wrapper intruding-kicker-arrow-holder">
                <svg
                  data-aos="fade-in"
                  data-aos-duration="900"
                  version="1.1"
                  id="Ebene_2_1_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="53px"
                  height="20px"
                  viewBox="0 0 53 20"
                  enable-background="new 0 0 53 20"
                  xml:space="preserve"
                >
                  <g>
                    <polygon
                      points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"
                    ></polygon>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <Spacer/>
        </div>
      </section>
      <section class="content-block grey">
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper insights-wrapper">
                <div
                  class="insight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  <router-link class="insight-link" to="/insights">
                    <p>Agile</p>
                    <h3>Understanding What It Means To Be Agile</h3>
                    <p>Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework...
                      <br>
                      <br>
                      <span>Read More</span>
                    </p>
                  </router-link>
                </div>
                <div
                  class="insight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  <router-link class="insight-link" to="/insights">
                    <p>Agile</p>
                    <h3>Understanding What It Means To Be Agile</h3>
                    <p>Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework...
                      <br>
                      <br>
                      <span>Read More</span>
                    </p>
                  </router-link>
                </div>
                <div
                  class="insight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  <router-link class="insight-link" to="/insights">
                    <p>Agile</p>
                    <h3>Understanding What It Means To Be Agile</h3>
                    <p>Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework...
                      <br>
                      <br>
                      <span>Read More</span>
                    </p>
                  </router-link>
                </div>
                <div
                  class="insight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  <router-link class="insight-link" to="/insights">
                    <p>Agile</p>
                    <h3>Understanding What It Means To Be Agile</h3>
                    <p>Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework...
                      <br>
                      <br>
                      <span>Read More</span>
                    </p>
                  </router-link>
                </div>
                <div
                  class="insight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  <router-link class="insight-link" to="/insights">
                    <p>Agile</p>
                    <h3>Understanding What It Means To Be Agile in this modern ages</h3>
                    <p>Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework...
                      <br>
                      <br>
                      <span>Read More</span>
                    </p>
                  </router-link>
                </div>
                <div
                  class="insight"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="900"
                >
                  <router-link class="insight-link" to="/insights">
                    <p>Agile</p>
                    <h3>Understanding What It Means To Be Agile</h3>
                    <p>Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework...
                      <br>
                      <br>
                      <span>Read More</span>
                    </p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";

export default {
  name: "Insights",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.cover-image
  filter: brightness(0.7) contrast(1.2) sepia(100%) hue-rotate(160deg) saturate(3.5)
  background-image: url(../assets/background/insights/insight-1large.jpg)

.insights-wrapper
  display: flex
  flex-wrap: wrap
  padding-top: 100px

.insight
  flex-basis: 100%
  width: 100%
  max-width: 100%
  padding-bottom: 100px

.insight-link
  display: flex
  flex-direction: column
  padding: 20px
  position: relative
  border-bottom: solid 0.05555rem $spacer-c
  transition: box-shadow 200ms cubic-bezier(.29,.29,.42,1.01)

.insight-link h3
  color: $font-c-1
  line-height: 1.1
  margin: 0 0 5px
  font:
    size: 3rem
  color: #fff

.insight-link p
  color: $font-c-p-3

img
  height: 40px
  width: 40px

span
  color: $font-c-p-2

.insight-link::after
  content: ""
  position: absolute
  top: -10px
  left: 0
  height: 2px
  width: 100%
  transform: translatey(40px)
  background: $dataconcepts-red
  opacity: 0
  transition: transform 400ms cubic-bezier(.29,.29,.42,1.01), opacity 600ms ease-in-out, color 600ms ease-in-out

.insight-link:hover:after 
  opacity: 1  
  transform: translatey(2px)

.insight-link:hover
  box-shadow: 0px 0px 40px rgba(0,0,0,.1)

@media only screen and (max-width: 1000px)
  .insight-link
    padding: 10px

@media only screen and (max-width: 678px)
  .insight-link h3
    font:
      size: 2rem

  .insight-link
    padding: 5

</style>




<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block mostpage">
        <div data-aos="fade-up" data-aos-duration="900" class="show-more">
          <svg
            fill="#000"
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
        <div class="cover-image tinted"></div>
        <div class="container">
          <div class="row">
            <div class="column col-12 responsive-12 center-content">
              <div class="content-wrapper dynamic-text-wrapper no-pad">
                <h3>Need</h3>
                <h3 id="dynamic-text"></h3>
                <h3>Help?</h3>
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

export default {
  name: "Home",
  components: {
    NavBarWhite,
    ModalMenu
  },
  data() {
    return {
      phase: 0
    };
  },
  mounted: function() {
    this.myFilter();
  },
  methods: {
    myFilter() {
      let i = 0;
      let phrase = "implementing cyber security?";

      let backTypeWriter = () => {
        let innerText = document.getElementById("dynamic-text").innerHTML;
        if (innerText.length > 0) {
          innerText = innerText.substring(0, innerText.length - 1);
          document.getElementById("dynamic-text").innerHTML = innerText;
          setTimeout(backTypeWriter, 30);
        } else {
          i = 0;
          typeWriter();
        }
      };

      let typeWriter = () => {
        if (this.phase === 0) {
          phrase = "integrating Cloud technology";
        } else if (this.phase === 1) {
          phrase = "implimenting Agile strategy";
        } else {
          phrase = "developing Mobile solutions";
        }
        if (i < phrase.length) {
          document.getElementById("dynamic-text").innerHTML += phrase.charAt(i);
          i++;
          setTimeout(typeWriter, 60);
        } else if (i === phrase.length) {
          if (this.phase === 0) {
            this.phase = 1;
            setTimeout(backTypeWriter, 4000);
          } else if (this.phase === 1) {
            this.phase = 2;
            setTimeout(backTypeWriter, 4000);
          } else {
            this.phase = 0;
            setTimeout(backTypeWriter, 4000);
          }
        }
      };

      typeWriter();
    }
  }
};
</script>

<style scoped lang="sass">
@import "../assets/sass/settings.sass"

</style>




<template>
  <section class="content-block black">
    <div class="offices-container">
      <div class="office">
        <span class="city">Richmond, VA.</span>
        <span class="address">4405 Cox Rd</span>
        <span class="address">Glen Allen VA 23060</span>
        <a class="telephone" href="tel:1-804-968-4700">+1-804-968-4700</a>
        <div class="demo-container clocks active bounce">
          <article class="clock station js-new-york">
            <section class="hours-container">
              <section class="hours"></section>
            </section>
            <section class="minutes-container">
              <section class="minutes"></section>
            </section>
            <section class="seconds-container">
              <section class="seconds"></section>
            </section>
            <div class="center-dot"></div>
          </article>
        </div>
      </div>
      <div class="office">
        <span class="city">Denver, CO.</span>
        <span class="address">1490 Delgany St</span>
        <span class="address">Suite 521 Denver CO 80202</span>
        <a class="telephone" href="tel:1-303-575-1000">+1-303-575-1000</a>
        <div class="demo-container clocks active bounce">
          <article class="clock station js-denver">
            <section class="hours-container">
              <section class="hours"></section>
            </section>
            <section class="minutes-container">
              <section class="minutes"></section>
            </section>
            <section class="seconds-container">
              <section class="seconds"></section>
            </section>
            <div class="center-dot"></div>
          </article>
        </div>
      </div>
      <div class="office">
        <span class="city">Raleigh, NC.</span>
        <span class="address">4405 Cox Rd</span>
        <span class="address">Glen Allen VA 23060</span>
        <a class="telephone" href="tel:1-919-425-2300">+1-919-425-2300</a>
        <div class="demo-container clocks active bounce">
          <article class="clock station js-new-york">
            <section class="hours-container">
              <section class="hours"></section>
            </section>
            <section class="minutes-container">
              <section class="minutes"></section>
            </section>
            <section class="seconds-container">
              <section class="seconds"></section>
            </section>
            <div class="center-dot"></div>
          </article>
        </div>
      </div>
      <div class="office">
        <span class="city">Lansing, MI.</span>
        <span class="address">4405 Cox Rd</span>
        <span class="address">Glen Allen VA 23060</span>
        <a class="telephone" href="tel:1-571-827-5444">+1-571-827-5444</a>
        <div class="demo-container clocks active bounce">
          <article class="clock station js-new-york">
            <section class="hours-container">
              <section class="hours"></section>
            </section>
            <section class="minutes-container">
              <section class="minutes"></section>
            </section>
            <section class="seconds-container">
              <section class="seconds"></section>
            </section>
            <div class="center-dot"></div>
          </article>
        </div>
      </div>
      <div class="office">
        <span class="city">Columbia, SC.</span>
        <span class="address">606 Garden Arbor Ln</span>
        <span class="address">SC 29072</span>
        <a class="telephone" href="tel:1-803-336-3900">+1-803-336-3900</a>
        <div class="demo-container clocks active bounce">
          <article class="clock station js-new-york">
            <section class="hours-container">
              <section class="hours"></section>
            </section>
            <section class="minutes-container">
              <section class="minutes"></section>
            </section>
            <section class="seconds-container">
              <section class="seconds"></section>
            </section>
            <div class="center-dot"></div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  name: "Offices",
  mounted() {
    /*
     *  Main function to set the clock times
     */
    (function() {
      // Initialise the locale-enabled clocks
      initInternationalClocks();
      // Initialise any local time clocks
      initLocalClocks();
      // Start the seconds container moving
      moveSecondHands();
      // Set the intial minute hand container transition, and then each subsequent step
      setUpMinuteHands();
    })();

    /*
     *  Set up an entry for each locale of clock we want to use
     */
    function getTimes() {
      // moment.tz.add([
      //   "Eire|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
      //   "Asia/detroit|JST|-90|0|",
      //   "America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0"
      // ]);
      var now = new Date();
      // Set the time manually for each of the clock types we're using
      var times = [
        {
          jsclass: "js-new-york",
          jstime: moment.tz(now, "America/New_York")
        },
        {
          jsclass: "js-denver",
          jstime: moment.tz(now, "America/Denver")
        }
      ];
      return times;
    }

    /*
     * Set up the clocks that use moment.js
     */
    function initInternationalClocks() {
      // Initialise the clock settings and the three times
      var times = getTimes();
      for (let i = 0; i < times.length; ++i) {
        var hours = times[i].jstime.format("h");
        var minutes = times[i].jstime.format("mm");
        var seconds = times[i].jstime.format("ss");

        var degrees = [
          {
            hand: "hours",
            degree: hours * 30 + minutes / 2
          },
          {
            hand: "minutes",
            degree: minutes * 6
          },
          {
            hand: "seconds",
            degree: seconds * 6
          }
        ];
        for (var j = 0; j < degrees.length; j++) {
          var elements = document.querySelectorAll(
            ".active ." + times[i].jsclass + " ." + degrees[j].hand
          );
          for (var k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform =
              "rotateZ(" + degrees[j].degree + "deg)";
            elements[k].style.transform =
              "rotateZ(" + degrees[j].degree + "deg)";
            // If this is a minute hand, note the seconds position (to calculate minute position later)
            if (degrees[j].hand === "minutes") {
              elements[k].parentNode.setAttribute(
                "data-second-angle",
                degrees[j + 1].degree
              );
            }
          }
        }
      }
      // Add a class to the clock container to show it
      var elements = document.querySelectorAll(".clock");
      for (var l = 0; l < elements.length; l++) {
        elements[l].className = elements[l].className + " show";
      }
    }

    /*
     * Starts any clocks using the user's local time
     */
    function initLocalClocks() {
      // Get the local time using JS
      var date = new Date();
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hours = date.getHours();

      // Create an object with each hand and it's angle in degrees
      var hands = [
        {
          hand: "hours",
          angle: hours * 30 + minutes / 2
        },
        {
          hand: "minutes",
          angle: minutes * 6
        },
        {
          hand: "seconds",
          angle: seconds * 6
        }
      ];
      // Loop through each of these hands to set their angle
      for (var j = 0; j < hands.length; j++) {
        var elements = document.querySelectorAll(".local ." + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
          elements[k].style.transform = "rotateZ(" + hands[j].angle + "deg)";
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (hands[j].hand === "minutes") {
            elements[k].parentNode.setAttribute(
              "data-second-angle",
              hands[j + 1].angle
            );
          }
        }
      }
    }

    /*
     * Move the second containers
     */
    function moveSecondHands() {
      var containers = document.querySelectorAll(".bounce .seconds-container");
      setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
          if (containers[i].angle === undefined) {
            containers[i].angle = 6;
          } else {
            containers[i].angle += 6;
          }
          containers[i].style.webkitTransform =
            "rotateZ(" + containers[i].angle + "deg)";
          containers[i].style.transform =
            "rotateZ(" + containers[i].angle + "deg)";
        }
      }, 1000);
      for (var i = 0; i < containers.length; i++) {
        // Add in a little delay to make them feel more natural
        var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        containers[i].style.transitionDelay = "0.0" + randomOffset + "s";
      }
    }

    /*
     * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
     */
    function setUpMinuteHands() {
      // More tricky, this needs to move the minute hand when the second hand hits zero
      var containers = document.querySelectorAll(".minutes-container");
      var secondAngle = containers[containers.length - 1].getAttribute(
        "data-second-angle"
      );
      console.log(secondAngle);
      if (secondAngle > 0) {
        // Set a timeout until the end of the current minute, to move the hand
        var delay = ((360 - secondAngle) / 6 + 0.1) * 1000;
        console.log(delay);
        setTimeout(function() {
          moveMinuteHands(containers);
        }, delay);
      }
    }

    /*
     * Do the first minute's rotation, then move every 60 seconds after
     */
    function moveMinuteHands(containers) {
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.webkitTransform = "rotateZ(6deg)";
        containers[i].style.transform = "rotateZ(6deg)";
      }
      // Then continue with a 60 second interval
      setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
          if (containers[i].angle === undefined) {
            containers[i].angle = 12;
          } else {
            containers[i].angle += 6;
          }
          containers[i].style.webkitTransform =
            "rotateZ(" + containers[i].angle + "deg)";
          containers[i].style.transform =
            "rotateZ(" + containers[i].angle + "deg)";
        }
      }, 60000);
    }
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.offices-container
  width: 89.87342%
  margin: 0 auto
  display: flex
  flex-wrap: wrap
  padding: 100px 0 140px 0

.office
  width: 33.33333%
  max-width: 33.33333%
  flex-basis: 33.33333%
  padding: 115px 70px 60px
  background: #fff
  border-bottom: solid 1px #000
  border-right: solid 1px #000
  box-sizing: border-box
  display: flex
  flex-direction: column
  position: relative

.city
  font:
    size: 2.8rem
  margin-bottom: 30px

.address
  font:
    size: 1.2rem

.telephone
  margin-top: 40px
  display: block
  color: #000
  transition: color .18s
  font: 
    size: 1.2rem
    weight: 400
  letter-spacing: 4px

.telephone:hover
  color: $bround-c-yellow

.clocks
  position: absolute
  bottom: 15px
  right: 15px
  display: inline-block
  height: 75px
  width: 75px


.clock
  border-radius: 50%
  background-image:  url(../../assets/logo/clock.png)
  background-size: cover
  height: 100%
  position: relative
  &.simple:after
    background: $bround-c-brown-grey
    border-radius: 50%
    content: ""
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 5%
    height: 5%
    z-index: 10

.center-dot
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  height: 6%
  width: 6%
  border-radius: 50%
  background: #000

.minutes-container, .hours-container, .seconds-container
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0

.hours
  background: #000
  height: 20%
  left: 48.5%
  position: absolute
  top: 30%
  transform-origin: 50% 100%
  width: 2.5%

.minutes
  background: #000
  height: 40%
  left: 48.75%
  position: absolute
  top: 10%
  transform-origin: 50% 100%
  width: 2%

.seconds
  background: $dataconcepts-red
  height: 45%
  left: 49%
  position: absolute
  top: 14%
  transform-origin: 50% 80%
  width: 1%
  z-index: 8

.hours-container
  animation: rotate 43200s infinite linear

.minutes-container
  transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44)

.seconds-container
  transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)

</style>
